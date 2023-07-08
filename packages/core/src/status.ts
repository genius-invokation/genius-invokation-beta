import {
  ContextOfEvent,
  EventHandlers,
  getStatus,
  PrepareConfig,
  StatusInfoWithId,
} from "@gi-tcg/data";
import { Entity, shallowClone } from "./entity.js";
import { StatusData } from "@gi-tcg/typings";
import { ContextFactory } from "./context.js";

export class Status extends Entity {
  private readonly info: StatusInfoWithId;
  private handler: EventHandlers;
  usagePerRound: number;
  usage: number;
  duration: number;
  shield: number | null = null;
  prepare: number | null = null;
  shouldDispose = false;

  constructor(id: number) {
    super(id);
    this.info = getStatus(id);
    this.handler = new this.info.handlerCtor();
    this.usage = this.info.usage;
    this.usagePerRound = this.info.usagePerRound;
    this.duration = this.info.duration;
    this.shield =
      typeof this.info.shield === "number"
        ? this.info.shield
        : this.info.shield?.initial ?? null;
  }

  getVisibleValue(): number | null {
    if (this.shield !== null) {
      return this.shield;
    }
    if (this.info.usage !== 1 && isFinite(this.usage)) {
      return this.usage;
    }
    if (this.info.duration !== 1 && isFinite(this.duration)) {
      return this.duration;
    }
    return null;
  }

  async handleEvent<E extends keyof EventHandlers>(
    e: E,
    cf: ContextFactory<ContextOfEvent<E>>
  ) {
    if (e === "onRollPhase") {
      this.usagePerRound = this.info.usagePerRound;
      this.duration--;
      if (this.duration === 0) {
        this.shouldDispose = true;
      }
    }
    const ctx = cf(this.entityId);
    if (ctx && this.usagePerRound > 0) {
      const result = await Entity.handleEvent(this.handler, e, ctx);
      if (result) {
        this.usagePerRound--;
        this.usage--;
        if (this.usage === 0) {
          this.shouldDispose = true;
        }
      }
    }
  }

  getData(): StatusData {
    return {
      entityId: this.entityId,
      id: this.id,
      value: this.getVisibleValue() ?? undefined,
    };
  }

  clone() {
    const clone = shallowClone(this);
    clone.handler = shallowClone(this.handler);
    return clone;
  }
}