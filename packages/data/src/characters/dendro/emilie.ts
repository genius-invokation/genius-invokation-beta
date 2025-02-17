// Copyright (C) 2024-2025 Guyutongxue
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { character, skill, summon, card, DamageType, Reaction } from "@gi-tcg/core/builder";
import { BurningFlame } from "../../commons";

/**
 * @id 117102
 * @name 柔灯之匣·二阶
 * @description
 * 结束阶段：造成2点草元素伤害。
 * 可用次数：3（可叠加，最多叠加到6次）
 */
export const LumidouceCaseLevel2 = summon(117102)
  .since("v5.4.51-beta")
  .endPhaseDamage(DamageType.Dendro, 2)
  .usageCanAppend(3, 6)
  .done();

/**
 * @id 117101
 * @name 柔灯之匣·一阶
 * @description
 * 结束阶段：造成1点草元素伤害。
 * 我方造成燃烧反应伤害后：此牌升级为柔灯之匣·二阶。
 * 可用次数：3（可叠加，最多叠加到6次）
 */
export const LumidouceCaseLevel1 = summon(117101)
  .since("v5.4.51-beta")
  .endPhaseDamage(DamageType.Dendro, 1)
  .usageCanAppend(3, 6)
  .on("dealDamage", (c, e) => e.getReaction() === Reaction.Burning)
  .listenToPlayer()
  .transformDefinition("@self", LumidouceCaseLevel2)
  .done();

/**
 * @id 117103
 * @name 柔灯之匣·三阶
 * @description
 * 结束阶段：对敌方全体造成1点草元素伤害。
 * 可用次数：1
 */
export const LumidouceCaseLevel3 = summon(117103)
  .since("v5.4.51-beta")
  .endPhaseDamage(DamageType.Dendro, 1, "all opp characters")
  .usage(1)
  .done();

/**
 * @id 17101
 * @name 逐影枪术·改
 * @description
 * 造成2点物理伤害。
 */
export const ShadowhuntingSpearCustom = skill(17101)
  .type("normal")
  .costDendro(1)
  .costVoid(2)
  .damage(DamageType.Physical, 2)
  .done();

/**
 * @id 17102
 * @name 撷萃调香
 * @description
 * 召唤柔灯之匣·一阶。
 */
export const FragranceExtraction = skill(17102)
  .type("elemental")
  .costDendro(3)
  .if((c) => c.$(`my summons with definition id ${LumidouceCaseLevel2}`))
  .summon(LumidouceCaseLevel2)
  .else()
  .summon(LumidouceCaseLevel1)
  .done();

/**
 * @id 17103
 * @name 香氛演绎
 * @description
 * 造成undefined点物理伤害。移除我方场上的柔灯之匣。召唤柔灯之匣·三阶。
 */
export const AromaticExplication = skill(17103)
  .type("burst")
  .costDendro(3)
  .costEnergy(2)
  .damage(DamageType.Dendro, 1)
  .dispose(`
    my summons with definition id ${LumidouceCaseLevel1} or 
    my summons with definition id ${LumidouceCaseLevel2} or
    my summons with definition id ${LumidouceCaseLevel3}`)
  .summon(LumidouceCaseLevel3)
  .done();

/**
 * @id 17104
 * @name 余薰
 * @description
 * 我方造成燃烧反应伤害后：触发1次我方燃烧烈焰的回合结束效果。（每回合1次）
 */
export const LingeringFragrance01 = skill(17104)
  .type("passive")
  .on("dealDamage", (c, e) => e.getReaction() === Reaction.Burning)
  .listenToPlayer()
  .usagePerRound(1, { name: "usagePerRound1" })
  .do((c) => {
    const burning = c.$(`my summons with definition id ${BurningFlame}`);
    if (burning) {
      c.triggerEndPhaseSkill(burning.state);
    }
  })
  .done();

/**
 * @id 17105
 * @name 余薰
 * @description
 * 我方造成燃烧反应伤害后：触发1次我方燃烧烈焰的回合结束效果。（每回合1次）
 */
export const LingeringFragrance02 = skill(17105)
  .reserve();

/**
 * @id 1710
 * @name 艾梅莉埃
 * @description
 * 如香消，如雾散。
 */
export const Emilie = character(1710)
  .since("v5.4.51-beta")
  .tags("dendro", "pole", "fontaine", "ousia")
  .health(10)
  .energy(2)
  .skills(ShadowhuntingSpearCustom, FragranceExtraction, AromaticExplication, LingeringFragrance01)
  .done();

/**
 * @id 217101
 * @name 茉洁香迹
 * @description
 * 战斗行动：我方出战角色为艾梅莉埃时，装备此牌。
 * 所附属角色造成的物理伤害变为草元素伤害。
 * 装备有此牌的艾梅莉埃普通攻击后：我方「柔灯之匣」立刻行动1次。
 * （牌组中包含艾梅莉埃，才能加入牌组）
 */
export const MarcotteSillage = card(217101)
  .since("v5.4.51-beta")
  .costDendro(1)
  .talent(Emilie, "action")
  .on("modifySkillDamageType", (c, e) => e.type === DamageType.Physical)
  .changeDamageType(DamageType.Dendro)
  .on("useSkill", (c, e) => e.isSkillType("normal"))
  .do((c) => {
    const lumidouce = c.$(`
      my summons with definition id ${LumidouceCaseLevel1} or
      my summons with definition id ${LumidouceCaseLevel2} or 
      my summons with definition id ${LumidouceCaseLevel3}`);
    if (lumidouce) {
      c.triggerEndPhaseSkill(lumidouce.state);
    }
  })
  .done();
