// Copyright (C) 2024 Guyutongxue
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

import { DamageType, DiceType, card, status } from "@gi-tcg/core/builder";

/**
 * @id 312101
 * @name 破冰踏雪的回音
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个冰元素。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const BrokenRimesEcho = card(312101)
  .since("v3.3.0")
  .costVoid(2)
  .artifact()
  .on("deductElementDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state) && e.canDeductCostOfType(DiceType.Cryo))
  .usagePerRound(1)
  .deductCost(DiceType.Cryo, 1)
  .done();

/**
 * @id 312201
 * @name 酒渍船帽
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个水元素。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const WinestainedTricorne = card(312201)
  .since("v3.3.0")
  .costVoid(2)
  .artifact()
  .on("deductElementDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state) && e.canDeductCostOfType(DiceType.Hydro))
  .usagePerRound(1)
  .deductCost(DiceType.Hydro, 1)
  .done();

/**
 * @id 312301
 * @name 焦灼的魔女帽
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个火元素。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const WitchsScorchingHat = card(312301)
  .since("v3.3.0")
  .costVoid(2)
  .artifact()
  .on("deductElementDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state) && e.canDeductCostOfType(DiceType.Pyro))
  .usagePerRound(1)
  .deductCost(DiceType.Pyro, 1)
  .done();

/**
 * @id 312401
 * @name 唤雷的头冠
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个雷元素。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const ThunderSummonersCrown = card(312401)
  .since("v3.3.0")
  .costVoid(2)
  .artifact()
  .on("deductElementDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state) && e.canDeductCostOfType(DiceType.Electro))
  .usagePerRound(1)
  .deductCost(DiceType.Electro, 1)
  .done();

/**
 * @id 312501
 * @name 翠绿的猎人之冠
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个风元素。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const ViridescentVenerersDiadem = card(312501)
  .since("v3.3.0")
  .costVoid(2)
  .artifact()
  .on("deductElementDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state) && e.canDeductCostOfType(DiceType.Anemo))
  .usagePerRound(1)
  .deductCost(DiceType.Anemo, 1)
  .done();

/**
 * @id 312601
 * @name 不动玄石之相
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个岩元素。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const MaskOfSolitudeBasalt = card(312601)
  .since("v3.3.0")
  .costVoid(2)
  .artifact()
  .on("deductElementDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state) && e.canDeductCostOfType(DiceType.Geo))
  .usagePerRound(1)
  .deductCost(DiceType.Geo, 1)
  .done();

/**
 * @id 312701
 * @name 月桂的宝冠
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个草元素。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const LaurelCoronet = card(312701)
  .since("v3.3.0")
  .costVoid(2)
  .artifact()
  .on("deductElementDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state) && e.canDeductCostOfType(DiceType.Dendro))
  .usagePerRound(1)
  .deductCost(DiceType.Dendro, 1)
  .done();

/**
 * @id 312102
 * @name 冰风迷途的勇士
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个冰元素。（每回合1次）
 * 投掷阶段：2个元素骰初始总是投出冰元素。
 * （角色最多装备1件「圣遗物」）
 */
export const BlizzardStrayer = card(312102)
  .since("v3.3.0")
  .costSame(2)
  .artifact()
  .on("deductElementDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state) && e.canDeductCostOfType(DiceType.Cryo))
  .usagePerRound(1)
  .deductCost(DiceType.Cryo, 1)
  .on("roll")
  .fixDice(DiceType.Cryo, 2)
  .done();

/**
 * @id 312202
 * @name 沉沦之心
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个水元素。（每回合1次）
 * 投掷阶段：2个元素骰初始总是投出水元素。
 * （角色最多装备1件「圣遗物」）
 */
export const HeartOfDepth = card(312202)
  .since("v3.3.0")
  .costSame(2)
  .artifact()
  .on("deductElementDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state) && e.canDeductCostOfType(DiceType.Hydro))
  .usagePerRound(1)
  .deductCost(DiceType.Hydro, 1)
  .on("roll")
  .fixDice(DiceType.Hydro, 2)
  .done();

/**
 * @id 312302
 * @name 炽烈的炎之魔女
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个火元素。（每回合1次）
 * 投掷阶段：2个元素骰初始总是投出火元素。
 * （角色最多装备1件「圣遗物」）
 */
export const CrimsonWitchOfFlames = card(312302)
  .since("v3.3.0")
  .costSame(2)
  .artifact()
  .on("deductElementDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state) && e.canDeductCostOfType(DiceType.Pyro))
  .usagePerRound(1)
  .deductCost(DiceType.Pyro, 1)
  .on("roll")
  .fixDice(DiceType.Pyro, 2)
  .done();

/**
 * @id 312402
 * @name 如雷的盛怒
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个雷元素。（每回合1次）
 * 投掷阶段：2个元素骰初始总是投出雷元素。
 * （角色最多装备1件「圣遗物」）
 */
export const ThunderingFury = card(312402)
  .since("v3.3.0")
  .costSame(2)
  .artifact()
  .on("deductElementDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state) && e.canDeductCostOfType(DiceType.Electro))
  .usagePerRound(1)
  .deductCost(DiceType.Electro, 1)
  .on("roll")
  .fixDice(DiceType.Electro, 2)
  .done();

/**
 * @id 312502
 * @name 翠绿之影
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个风元素。（每回合1次）
 * 投掷阶段：2个元素骰初始总是投出风元素。
 * （角色最多装备1件「圣遗物」）
 */
export const ViridescentVenerer = card(312502)
  .since("v3.3.0")
  .costSame(2)
  .artifact()
  .on("deductElementDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state) && e.canDeductCostOfType(DiceType.Anemo))
  .usagePerRound(1)
  .deductCost(DiceType.Anemo, 1)
  .on("roll")
  .fixDice(DiceType.Anemo, 2)
  .done();

/**
 * @id 312602
 * @name 悠古的磐岩
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个岩元素。（每回合1次）
 * 投掷阶段：2个元素骰初始总是投出岩元素。
 * （角色最多装备1件「圣遗物」）
 */
export const ArchaicPetra = card(312602)
  .since("v3.3.0")
  .costSame(2)
  .artifact()
  .on("deductElementDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state) && e.canDeductCostOfType(DiceType.Geo))
  .usagePerRound(1)
  .deductCost(DiceType.Geo, 1)
  .on("roll")
  .fixDice(DiceType.Geo, 2)
  .done();

/**
 * @id 312702
 * @name 深林的记忆
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个草元素。（每回合1次）
 * 投掷阶段：2个元素骰初始总是投出草元素。
 * （角色最多装备1件「圣遗物」）
 */
export const DeepwoodMemories = card(312702)
  .since("v3.3.0")
  .costSame(2)
  .artifact()
  .on("deductElementDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state) && e.canDeductCostOfType(DiceType.Dendro))
  .usagePerRound(1)
  .deductCost(DiceType.Dendro, 1)
  .on("roll")
  .fixDice(DiceType.Dendro, 2)
  .done();

/**
 * @id 312001
 * @name 冒险家头带
 * @description
 * 角色使用「普通攻击」后：治疗自身1点。（每回合至多3次）
 * （角色最多装备1件「圣遗物」）
 */
export const AdventurersBandana = card(312001)
  .since("v3.3.0")
  .costSame(1)
  .artifact()
  .on("useSkill", (c, e) => e.isSkillType("normal"))
  .usagePerRound(3)
  .heal(1, "@master")
  .done();

/**
 * @id 312002
 * @name 幸运儿银冠
 * @description
 * 角色使用「元素战技」后：治疗自身2点。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const LuckyDogsSilverCirclet = card(312002)
  .since("v3.3.0")
  .costVoid(2)
  .artifact()
  .on("useSkill", (c, e) => e.isSkillType("elemental"))
  .usagePerRound(1)
  .heal(2, "@master")
  .done();

/**
 * @id 312003
 * @name 游医的方巾
 * @description
 * 角色使用「元素爆发」后：治疗所有我方角色1点。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const TravelingDoctorsHandkerchief = card(312003)
  .since("v3.3.0")
  .costSame(1)
  .artifact()
  .on("useSkill", (c, e) => e.isSkillType("burst"))
  .usagePerRound(1)
  .heal(1, "all my characters")
  .done();

/**
 * @id 312004
 * @name 赌徒的耳环
 * @description
 * 敌方角色被击倒后：如果所附属角色为「出战角色」，则生成2个万能元素。（整场牌局限制3次）
 * （角色最多装备1件「圣遗物」）
 */
export const GamblersEarrings = card(312004)
  .since("v3.3.0")
  .costSame(1)
  .artifact()
  .on("defeated", (c, e) => c.self.master().isActive() && !c.of(e.target).isMine())
  .listenToAll()
  .usage(3, { autoDispose: false })
  .generateDice(DiceType.Omni, 2)
  .done();

/**
 * @id 312005
 * @name 教官的帽子
 * @description
 * 角色引发元素反应后：生成1个此角色元素类型的元素骰。（每回合至多3次）
 * （角色最多装备1件「圣遗物」）
 */
export const InstructorsCap = card(312005)
  .since("v3.3.0")
  .costVoid(2)
  .artifact()
  .on("skillReaction")
  .usagePerRound(3)
  .do((c) => {
    c.generateDice(c.self.master().element(), 1);
  })
  .done();

/**
 * @id 312006
 * @name 流放者头冠
 * @description
 * 角色使用「元素爆发」后：所有我方后台角色获得1点充能。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const ExilesCirclet = card(312006)
  .since("v3.3.0")
  .costVoid(2)
  .artifact()
  .on("useSkill", (c, e) => e.isSkillType("burst"))
  .usagePerRound(1)
  .gainEnergy(1, "my standby")
  .done();

/**
 * @id 312007
 * @name 华饰之兜
 * @description
 * 其他我方角色使用「元素爆发」后：所附属角色获得1点充能。
 * （角色最多装备1件「圣遗物」）
 */
export const OrnateKabuto = card(312007)
  .since("v3.5.0")
  .costSame(1)
  .artifact()
  .on("useSkill", (c, e) => e.skill.caller.id !== c.self.master().id && e.isSkillType("burst"))
  .listenToPlayer()
  .gainEnergy(1, "@master")
  .done();

/**
 * @id 312008
 * @name 绝缘之旗印
 * @description
 * 其他我方角色使用「元素爆发」后：所附属角色获得1点充能。
 * 角色使用「元素爆发」造成的伤害+2。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const EmblemOfSeveredFate = card(312008)
  .since("v3.7.0")
  .costSame(2)
  .artifact()
  .on("useSkill", (c, e) => e.skill.caller.id !== c.self.master().id && e.isSkillType("burst"))
  .listenToPlayer()
  .gainEnergy(1, "@master")
  .on("increaseSkillDamage", (c, e) => e.viaSkillType("burst"))
  .usagePerRound(1)
  .increaseDamage(2)
  .done();

/**
 * @id 301201
 * @name 重嶂不移
 * @description
 * 提供2点护盾，保护所附属的角色。
 */
export const UnmovableMountain = status(301201)
  .shield(2)
  .done();

/**
 * @id 312009
 * @name 将帅兜鍪
 * @description
 * 行动阶段开始时：为角色附属「重嶂不移」。（提供2点护盾，保护该角色。）
 * （角色最多装备1件「圣遗物」）
 */
export const GeneralsAncientHelm = card(312009)
  .since("v3.5.0")
  .costSame(2)
  .artifact()
  .on("actionPhase")
  .characterStatus(UnmovableMountain, "@master")
  .done();

/**
 * @id 312010
 * @name 千岩牢固
 * @description
 * 行动阶段开始时：为角色附属「重嶂不移」。（提供2点护盾，保护该角色。）
 * 角色受到伤害后：如果所附属角色为「出战角色」，则生成1个此角色元素类型的元素骰。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const TenacityOfTheMillelith = card(312010)
  .since("v3.7.0")
  .costSame(3)
  .artifact()
  .on("actionPhase")
  .characterStatus(UnmovableMountain, "@master")
  .on("damaged", (c) => c.self.master().isActive())
  .usagePerRound(1)
  .do((c) => {
    c.generateDice(c.self.master().element(), 1);
  })
  .done();

/**
 * @id 312011
 * @name 虺雷之姿
 * @description
 * 对角色打出「天赋」或角色使用「普通攻击」时：少花费1个元素骰。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const ThunderingPoise = card(312011)
  .since("v3.7.0")
  .costVoid(2)
  .artifact()
  .on("deductOmniDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state, "normal"))
  .usagePerRound(1)
  .deductOmniCost(1)
  .done();

/**
 * @id 301203
 * @name 辰砂往生录（生效中）
 * @description
 * 本回合中，角色「普通攻击」造成的伤害+1。
 */
export const VermillionHereafterEffect = status(301203)
  .oneDuration()
  .on("increaseSkillDamage", (c, e) => e.viaSkillType("normal"))
  .increaseDamage(1)
  .done();

/**
 * @id 312012
 * @name 辰砂往生录
 * @description
 * 对角色打出「天赋」或角色使用「普通攻击」时：少花费1个元素骰。（每回合1次）
 * 角色被切换为「出战角色」后：本回合中，角色「普通攻击」造成的伤害+1。
 * （角色最多装备1件「圣遗物」）
 */
export const VermillionHereafter = card(312012)
  .since("v3.7.0")
  .costVoid(3)
  .artifact()
  .on("deductOmniDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state, "normal"))
  .usagePerRound(1)
  .deductOmniCost(1)
  .on("switchActive", (c, e) => c.self.master().id === e.switchInfo.to.id)
  .characterStatus(VermillionHereafterEffect, "@master")
  .done();

/**
 * @id 312013
 * @name 无常之面
 * @description
 * 对角色打出「天赋」或角色使用「元素战技」时：少花费1个元素骰。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const CapriciousVisage = card(312013)
  .since("v3.7.0")
  .costVoid(2)
  .artifact()
  .on("deductOmniDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state, "elemental"))
  .usagePerRound(1)
  .deductOmniCost(1)
  .done();

/**
 * @id 312014
 * @name 追忆之注连
 * @description
 * 对角色打出「天赋」或角色使用「元素战技」时：少花费1个元素骰。（每回合1次）
 * 如果角色具有至少2点充能，就使角色「普通攻击」和「元素战技」造成的伤害+1。
 * （角色最多装备1件「圣遗物」）
 */
export const ShimenawasReminiscence = card(312014)
  .since("v3.7.0")
  .costVoid(3)
  .artifact()
  .on("deductOmniDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state, "elemental"))
  .usagePerRound(1)
  .deductOmniCost(1)
  .on("increaseSkillDamage", (c, e) =>
    c.self.master().energy >= 2 &&
    (e.viaSkillType("normal") || e.viaSkillType("elemental")))
  .increaseDamage(1)
  .done();

/**
 * @id 312015
 * @name 海祇之冠
 * @description
 * 我方角色每受到3点治疗，此牌就累积1个「海染泡沫」。（最多累积2个）
 * 角色造成伤害时：消耗所有「海染泡沫」，每消耗1个都使造成的伤害+1。
 * （角色最多装备1件「圣遗物」）
 * 【此卡含描述变量】
 */
export const CrownOfWatatsumi = card(312015)
  .since("v4.1.0")
  .costSame(1)
  .artifact()
  .variable("healedPts", 0, { visible: false })
  .variable("bubble", 0)
  .replaceDescription("[GCG_TOKEN_SHIELD]", (_, self) => self.variables.healedPts)
  .on("healed")
  .do((c, e) => {
    c.addVariable("healedPts", e.value);
    const totalPts = c.getVariable("healedPts");
    const generatedBubbleCount = Math.floor(totalPts / 3);
    const restPts = totalPts % 3;
    c.addVariableWithMax("bubble", generatedBubbleCount, 2);
    c.setVariable("healedPts", restPts);
  })
  .on("increaseSkillDamage")
  .do((c, e) => {
    const bubbleCount = c.getVariable("bubble");
    c.setVariable("bubble", 0);
    e.increaseDamage(bubbleCount);
  })
  .done();

/**
 * @id 312016
 * @name 海染砗磲
 * @description
 * 入场时：治疗所附属角色2点。
 * 我方角色每受到3点治疗，此牌就累积1个「海染泡沫」。（最多累积2个）
 * 角色造成伤害时：消耗所有「海染泡沫」，每消耗1个都使造成的伤害+1。
 * （角色最多装备1件「圣遗物」）
 * 【此卡含描述变量】
 */
export const OceanhuedClam = card(312016)
  .since("v4.2.0")
  .costVoid(3)
  .artifact()
  .variable("healedPts", 0, { visible: false })
  .variable("bubble", 0)
  .replaceDescription("[GCG_TOKEN_SHIELD]", (_, self) => self.variables.healedPts)
  .on("enter")
  .heal(2, "@master")
  .on("healed")
  .do((c, e) => {
    c.addVariable("healedPts", e.value);
    const totalPts = c.getVariable("healedPts");
    const generatedBubbleCount = Math.floor(totalPts / 3);
    const restPts = totalPts % 3;
    c.addVariableWithMax("bubble", generatedBubbleCount, 2);
    c.setVariable("healedPts", restPts);
  })
  .on("increaseSkillDamage")
  .do((c, e) => {
    const bubbleCount = c.getVariable("bubble");
    c.setVariable("bubble", 0);
    e.increaseDamage(bubbleCount);
  })
  .done();

/**
 * @id 312017
 * @name 沙王的投影
 * @description
 * 入场时：抓1张牌。
 * 所附属角色为出战角色期间，敌方受到元素反应伤害时：抓1张牌。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const ShadowOfTheSandKing = card(312017)
  .since("v4.2.0")
  .costSame(1)
  .artifact()
  .on("enter")
  .drawCards(1)
  .on("damaged", (c, e) => !c.of(e.target).isMine() && c.self.master().isActive() && e.getReaction())
  .listenToAll()
  .usagePerRound(1)
  .drawCards(1)
  .done();

/**
 * @id 312018
 * @name 饰金之梦
 * @description
 * 入场时：生成1个所附属角色类型的元素骰。如果我方队伍中存在3种不同元素类型的角色，则改为生成2个。
 * 所附属角色为出战角色期间，敌方受到元素反应伤害时：抓1张牌。（每回合至多2次）
 * （角色最多装备1件「圣遗物」）
 */
export const GildedDreams = card(312018)
  .since("v4.3.0")
  .costSame(3)
  .artifact()
  .on("enter")
  .do((c) => {
    const diceType = c.self.master().element();
    const elementKinds = new Set(c.$$("my characters include defeated").map((ch) => ch.element()));
    if (elementKinds.size >= 3) {
      c.generateDice(diceType, 2);
    } else {
      c.generateDice(diceType, 1);
    }
  })
  .on("damaged", (c, e) => !c.of(e.target).isMine() && c.self.master().isActive() && e.getReaction())
  .listenToAll()
  .usagePerRound(2)
  .drawCards(1)
  .done();

/**
 * @id 312019
 * @name 浮溯之珏
 * @description
 * 角色使用「普通攻击」后：抓1张牌。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const FlowingRings = card(312019)
  .since("v4.3.0")
  .artifact()
  .on("useSkill", (c, e) => e.isSkillType("normal"))
  .usagePerRound(1)
  .drawCards(1)
  .done();

/**
 * @id 312020
 * @name 来歆余响
 * @description
 * 角色使用「普通攻击」后：抓1张牌。（每回合1次）
 * 角色使用技能后：如果我方元素骰数量不多于手牌数量，则生成1个所附属角色类型的元素骰。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const EchoesOfAnOffering = card(312020)
  .since("v4.3.0")
  .costSame(2)
  .artifact()
  .on("useSkill", (c, e) => e.isSkillType("normal"))
  .usagePerRound(1)
  .drawCards(1)
  .on("useSkill", (c) => c.player.dice.length <= c.player.hands.length)
  .usagePerRound(1)
  .do((c) => {
    c.generateDice(c.self.master().element(), 1);
  })
  .done();

/**
 * @id 312021
 * @name 灵光明烁之心
 * @description
 * 角色受到伤害后：如果所附属角色为「出战角色」，则抓1张牌。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const HeartOfKhvarenasBrilliance = card(312021)
  .since("v4.3.0")
  .artifact()
  .on("damaged", (c) => c.self.master().isActive())
  .usagePerRound(1)
  .drawCards(1)
  .done();

/**
 * @id 312022
 * @name 花海甘露之光
 * @description
 * 角色受到伤害后：如果所附属角色为「出战角色」，则抓1张牌，并且在本回合结束阶段中治疗所附属角色1点。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const VourukashasGlow = card(312022)
  .since("v4.3.0")
  .costSame(1)
  .artifact()
  .variable("shouldHeal", 0)
  .on("damaged", (c) => c.self.master().isActive())
  .usagePerRound(1)
  .addVariable("shouldHeal", 1)
  .drawCards(1)
  .on("endPhase", (c) => c.getVariable("shouldHeal"))
  .heal(1, "@master")
  .setVariable("shouldHeal", 0)
  .done();

/**
 * @id 312023
 * @name 老兵的容颜
 * @description
 * 角色受到伤害或治疗后：根据本回合触发此效果的次数，执行不同的效果。
 * 第1次触发：生成1个此角色类型的元素骰。
 * 第2次触发：抓1张牌。
 * （角色最多装备1件「圣遗物」）
 */
export const VeteransVisage = card(312023)
  .since("v4.4.0")
  .costVoid(2)
  .artifact()
  .variable("triggered", 0)
  .on("roundEnd")
  .setVariable("triggered", 0)
  .on("damagedOrHealed")
  .do((c) => {
    c.addVariable("triggered", 1);
    const triggered = c.getVariable("triggered");
    if (triggered === 1) {
      c.generateDice(c.self.master().element(), 1);
    } else if (triggered === 2) {
      c.drawCards(1);
    }
  })
  .done();

/**
 * @id 312025
 * @name 黄金剧团的奖赏
 * @description
 * 结束阶段：如果所附属角色在后台，则此牌累积1点「报酬」。（最多累积2点）
 * 对角色打出「天赋」或角色使用「元素战技」时：此牌每有1点「报酬」，就将其消耗，以少花费1个元素骰。
 * （角色最多装备1件「圣遗物」）
 */
export const GoldenTroupesReward = card(312025)
  .since("v4.5.0")
  .artifact()
  .variable("reward", 0)
  .on("endPhase", (c) => !c.self.master().isActive())
  .addVariableWithMax("reward", 1, 2)
  .on("deductOmniDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state, "elemental"))
  .do((c, e) => {
    const reward = c.getVariable("reward");
    const currentCost = e.costSize();
    const deduced = Math.min(reward, currentCost);
    e.deductOmniCost(deduced);
    c.addVariable("reward", -deduced);
  })
  .done();

/**
 * @id 312027
 * @name 紫晶的花冠
 * @description
 * 所附属角色为出战角色，敌方受到草元素伤害后：累积1枚「花冠水晶」。如果「花冠水晶」大于等于我方手牌数，则生成1个随机基础元素骰。
 * （每回合至多生成2个）
 * （角色最多装备1件「圣遗物」）
 */
export const AmethystCrown = card(312027)
  .since("v4.6.0")
  .costSame(1)
  .artifact()
  .variable("generatedCount", 0, { visible: false })
  .variable("crystal", 0)
  .on("roundEnd")
  .setVariable("generatedCount", 0)
  .on("damaged", (c, e) =>
    !c.of(e.target).isMine() &&
    e.type === DamageType.Dendro &&  
    c.self.master().isActive())
  .listenToAll()
  .do((c) => {
    c.addVariable("crystal", 1);
    const crystal = c.getVariable("crystal");
    const hands = c.player.hands.length;
    if (crystal >= hands && c.getVariable("generatedCount") < 2) {
      c.generateDice("randomElement", 1);
      c.addVariable("generatedCount", 1);
    }
  })
  .done();

/**
 * @id 312024
 * @name 逐影猎人
 * @description
 * 角色受到伤害或治疗后：根据本回合触发此效果的次数，执行不同的效果。
 * 第1次触发：生成1个此角色类型的元素骰。
 * 第2次触发：抓1张牌。
 * 第4次触发：生成1个此角色类型的元素骰。
 * （角色最多装备1件「圣遗物」）
 */
export const MarechausseeHunter = card(312024)
  .since("v4.7.0")
  .costVoid(3)
  .artifact()
  .variable("count", 0)
  .on("damagedOrHealed")
  .do((c) => {
    c.addVariable("count", 1);
    const v = c.getVariable("count");
    if (v === 1 || v === 4) {
      c.generateDice(c.self.master().element(), 1);
    } else if (v === 2) {
      c.drawCards(1)
    }
  })
  .done();

/**
 * @id 312026
 * @name 黄金剧团
 * @description
 * 结束阶段：如果所附属角色在后台，则此牌累积2点「报酬」。（最多累积4点）
 * 对角色打出「天赋」或角色使用「元素战技」时：此牌每有1点「报酬」，就将其消耗，以少花费1个元素骰。
 * （角色最多装备1件「圣遗物」）
 */
export const GoldenTroupe = card(312026)
  .since("v4.7.0")
  .costSame(2)
  .artifact()
  .variable("reward", 0)
  .on("endPhase", (c) => !c.self.master().isActive())
  .addVariableWithMax("reward", 2, 4)
  .on("deductOmniDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state, "elemental"))
  .do((c, e) => {
    const reward = c.getVariable("reward");
    const currentCost = e.costSize();
    const deduced = Math.min(reward, currentCost);
    e.deductOmniCost(deduced);
    c.addVariable("reward", -deduced);
  })
  .done();

/**
 * @id 312028
 * @name 乐园遗落之花
 * @description
 * 所附属角色为出战角色，敌方受到伤害后：如果此伤害是草元素伤害或发生了草元素相关反应，则累积2枚「花冠水晶」。如果「花冠水晶」大于等于我方手牌数，则生成1个万能元素。
 * （每回合至多生成2个）
 * （角色最多装备1件「圣遗物」）
 */
export const FlowerOfParadiseLost = card(312028)
  .since("v4.7.0")
  .costSame(2)
  .artifact()
  .variable("crystal", 0)
  .variable("generatedCount", 0, { visible: false })
  .on("roundEnd")
  .setVariable("generatedCount", 0)
  .on("damaged", (c, e) =>
    c.self.master().isActive() && 
    !c.of(e.target).isMine() && 
    (e.type === DamageType.Dendro || e.isReactionRelatedTo(DamageType.Dendro)))
  .listenToAll()
  .do((c) => {
    c.addVariable("crystal", 2);
    const crystal = c.getVariable("crystal");
    const hands = c.player.hands.length;
    if (crystal >= hands && c.getVariable("generatedCount") < 2) {
      c.generateDice(DiceType.Omni, 1);
      c.addVariable("generatedCount", 1);
    }
  })
  .done();

/**
 * @id 312029
 * @name 角斗士的凯旋
 * @description
 * 角色使用「普通攻击」时：如果我方手牌数量不多于2，则少消耗1个元素骰。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const GladiatorsTriumphus = card(312029)
  .since("v4.8.0")
  .artifact()
  .on("deductOmniDiceSkill", (c, e) => e.isSkillType("normal") && c.player.hands.length <= 2)
  .usagePerRound(1)
  .deductOmniCost(1)
  .done();

/**
 * @id 133086
 * @name 千岩牢固
 * @description
 * 行动阶段开始时：为角色附属「重嶂不移」。（提供2点护盾，保护该角色。）
 * 角色受到伤害后：如果所附属角色为「出战角色」，则生成1个此角色元素类型的元素骰。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const FakeTenacityOfTheMillelith = card(133086) // 骗骗花
  .reserve();

/**
 * @id 133095
 * @name 饰金之梦
 * @description
 * 入场时：生成1个所附属角色类型的元素骰。如果我方队伍中存在3种不同元素类型的角色，则改为生成2个。
 * 所附属角色为出战角色期间，敌方受到元素反应伤害时：抓1张牌。（每回合至多2次）
 * （角色最多装备1件「圣遗物」）
 */
export const FakeGildedDreams = card(133095) // 骗骗花
  .reserve();

/**
 * @id 301204
 * @name 指挥的礼帽（生效中）
 * @description
 * 对角色打出「天赋」或角色使用技能时：少花费1个元素骰。
 * 可用次数：1
 */
export const ConductorsTopHatInEffect = status(301204)
  .on("deductOmniDice", (c, e) => e.isSkillOrTalentOf(c.self.master().state))
  .usage(1)
  .deductOmniCost(1)
  .done();

/**
 * @id 312030
 * @name 指挥的礼帽
 * @description
 * 我方切换到所附属角色后：舍弃原本元素骰费用最高的1张手牌，将2个元素骰转换为万能元素，并使角色下次使用技能或打出「天赋」时少花费1个元素骰。（每回合1次）
 * （角色最多装备1件「圣遗物」）
 */
export const ConductorsTopHat = card(312030)
  .since("v5.1.0")
  .costSame(1)
  .artifact()
  .on("switchActive", (c, e) => e.switchInfo.to.id === c.self.master().id && c.player.hands.length > 0)
  .usagePerRound(1)
  .do((c) => {
    c.disposeRandomCard(c.getMaxCostHands());
    c.convertDice(DiceType.Omni, 2)
    c.characterStatus(ConductorsTopHatInEffect, "@master");
  })
  .done();

/**
 * @id 312031
 * @name 少女易逝的芳颜
 * @description
 * 附属角色受到圣遗物以外的治疗后：治疗我方受伤最多的角色1点。（每回合至多触发2次）
 * （角色最多装备1件「圣遗物」）
 */
export const MaidensFadingBeauty = card(312031)
  .since("v5.2.0")
  .costSame(1)
  .artifact()
  .on("healed", (c, e) => !(e.source.definition.type === "equipment" && e.source.definition.tags.includes("artifact")))
  .usagePerRound(2)
  .heal(1, "my characters order by health - maxHealth limit 1")
  .done();

/**
 * @id 312032
 * @name 魔战士的羽面
 * @description
 * 附属角色使用特技后：获得1点充能。（每回合1次)
 * （角色最多装备1件「圣遗物」）
 */
export const DemonwarriorsFeatherMask = card(312032)
  .since("v9999.beta")
  .costVoid(2)
  .artifact()
  .on("useTechinque")
  .gainEnergy(1, "@master")
  .done();
