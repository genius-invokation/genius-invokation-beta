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

import { character, skill, summon, status, combatStatus, card, DamageType, CombatStatusHandle, EquipmentHandle } from "@gi-tcg/core/builder";

/**
 * @id 116103
 * @name 冲天转转·脱离
 * @description
 * 结束阶段：造成1点岩元素伤害，对下一个敌方后台角色造成1点穿透伤害。
 */
export const TurboTwirlyLetItRip = summon(116103)
  .since("v5.4.51-beta")
  .endPhaseDamage(DamageType.Geo, 1)
  .usage(1)
  .damage(DamageType.Piercing, 1, "opp next")
  .if((c) => c.$(`my equipment with definition id ${NightRealmsGiftHeartOfUnity}`))
  .drawCards(1)
  .done();

/**
 * @id 116104
 * @name 夜魂加持
 * @description
 * 所附属角色可累积「夜魂值」。（最多累积到2点）
 */
export const NightsoulsBlessing = status(116104)
  .since("v5.4.51-beta")
  .nightsoulsBlessing(2)
  .done();

/**
 * @id 116102
 * @name 冲天转转
 * @description
 * 附属角色切换至后台时：消耗1点夜魂值，召唤冲天转转·脱离。
 * [1161021: 转转冲击] (1*Same) 附属角色消耗1点「夜魂值」，造成undefined点物理伤害，对敌方下一个后台角色造成1点穿透伤害。
 * [1161022: ] ()
 * [1161023: ] ()
 * [1161024: ] ()
 */
export const TurboTwirly = card(116102)
  .since("v5.4.51-beta")
  .unobtainable()
  .nightsoulTechnique()
  .on("switchActive", (c, e) => e.switchInfo.from.id === c.self.master().id)
  .consumeNightsoul("@master")
  .summon(TurboTwirlyLetItRip)
  .endOn()
  .provideSkill(1161021)
  .costSame(1)
  .consumeNightsoul("@master")
  .if((c) => c.$(`my combat status with definition id ${TurboDrillField}`))
  .damage(DamageType.Piercing, 2, "opp next")
  .else()
  .damage(DamageType.Piercing, 1, "opp next")
  .damage(DamageType.Geo, 2)
  .done();

/**
 * @id 116101
 * @name 超级钻钻领域
 * @description
 * 我方冲天转转造成的岩元素伤害+1，造成的穿透伤害+1。
 * 可用次数：2
 */
export const TurboDrillField: CombatStatusHandle = combatStatus(116101)
  .since("v5.4.51-beta")
  .on("increaseDamage", (c, e) => e.source.definition.id === TurboTwirly && e.type === DamageType.Geo)
  .usage(2)
  .increaseDamage(1)
  .done();

/**
 * @id 16101
 * @name 嵴之啮咬
 * @description
 * 造成2点物理伤害。
 */
export const Cragbiter = skill(16101)
  .type("normal")
  .costGeo(1)
  .costVoid(2)
  .damage(DamageType.Physical, 2)
  .done();

/**
 * @id 16102
 * @name 出击，冲天转转！
 * @description
 * 自身附属冲天转转并进入夜魂加持。
 */
export const GoGoTurboTwirly = skill(16102)
  .type("elemental")
  .costGeo(2)
  .filter((c) => !c.self.hasStatus(NightsoulsBlessing))
  .do((c) => {
    c.self.equip(TurboTwirly);
    c.characterStatus(NightsoulsBlessing, "@self", {
      overrideVariables: {
        nightsoul: 2
      }
    });
  })
  .done();

/**
 * @id 16103
 * @name 现在，认真时间！
 * @description
 * 造成undefined点物理伤害，生成超级钻钻领域。
 */
export const TimeToGetSerious = skill(16103)
  .type("burst")
  .costGeo(3)
  .costEnergy(2)
  .damage(DamageType.Geo, 3)
  .combatStatus(TurboDrillField)
  .done();

/**
 * @id 1610
 * @name 卡齐娜
 * @description
 * 眼泪与勇气熔铸出的宝石。
 */
export const Kachina = character(1610)
  .since("v5.4.51-beta")
  .tags("geo", "pole", "natlan")
  .health(10)
  .energy(2)
  .skills(Cragbiter, GoGoTurboTwirly, TimeToGetSerious)
  .done();

/**
 * @id 216101
 * @name 夜域赐礼·团结炉心
 * @description
 * 我方冲天转转或冲天转转·脱离触发效果后，抓1张牌。
 * （牌组中包含卡齐娜，才能加入牌组）
 */
export const NightRealmsGiftHeartOfUnity: EquipmentHandle = card(216101)
  .since("v5.4.51-beta")
  .costGeo(1)
  .talent(Kachina)
  .on("useSkill", (c, e) => e.skill.definition.id === TurboTwirly)
  .drawCards(1)
  .done();
