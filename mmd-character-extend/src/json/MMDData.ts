import { api } from "type-api/src/Type"
import { armorStrength, armorType, boneNameForLightStressing, clothCollisionData, clothHpData, collisionPart, firstPersonControlsData, mmdData, mmdMaterialFixData, resourceLevel, selectCharacterData, shoeData, shoeType, stressingFactorWhenDestroyed } from "mmd-character-protocol/src/service/ServiceType"
import { animationName, gameObject } from "type-default/src/Type"
import { mmdCharacter } from "./Type"

let _replaceVMDPath = ([getNewPathFunc1, getNewPathFunc2], originPath, prefix) => {
    let pOld = "vmd/"
    let pNew = "vmd_bake_physics/"

    let name = getName()

    originPath = originPath.replace(pOld, getNewPathFunc1(pNew))

    if (!originPath.includes(pNew)) {
        return originPath
    }

    return originPath.replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-extend/src/asset/${prefix}/`))
}

export let handleVMDPath = (mmdCharacter_: mmdCharacter, [getNewPathFunc1, getNewPathFunc2], originPath) => {
    let pOld = "vmd/"
    // let pNew = "vmd_bake_physics/"

    // let prefix = "mmd-character-extend/src/asset/"

    let p150 = `vmd_150/`
    let p160 = `vmd_160/`
    let p166 = `vmd_166/`

    // let name = getName()

    // if (originPath.includes("vmd_scenario/")) {
    //     return originPath
    // }

    switch (mmdCharacter_) {
        case mmdCharacter.Xiaye1:
            // return originPath.replace(pOld, getNewPathFunc1(pNew)).replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-extend/src/asset/Tda 夏夜1 HMS illustrious Prom Dress Ver1.00 [Silver]/`))
            return _replaceVMDPath([getNewPathFunc1, getNewPathFunc2], originPath, "Tda 夏夜1 HMS illustrious Prom Dress Ver1.00 [Silver]")
        case mmdCharacter.Xiaye2:
            // return originPath.replace(pOld, getNewPathFunc1(pNew)).replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-extend/src/asset/TDA 夏夜2 MOON LIGHT DANCER LTY/`))
            return _replaceVMDPath([getNewPathFunc1, getNewPathFunc2], originPath, "TDA 夏夜2 MOON LIGHT DANCER LTY")
        case mmdCharacter.Moye:
            // return originPath.replace(pOld, getNewPathFunc1(pNew)).replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-extend/src/asset/摩耶ver1.04/`))
            return _replaceVMDPath([getNewPathFunc1, getNewPathFunc2], originPath, "摩耶ver1.04")
        case mmdCharacter.XiaHui:
            // return originPath.replace(pOld, getNewPathFunc1(pNew)).replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-extend/src/asset/TDA式宴 夏卉/`))
            return _replaceVMDPath([getNewPathFunc1, getNewPathFunc2], originPath, "TDA式宴 夏卉")
        case mmdCharacter.Haku_Lady:
            // return originPath.replace(pOld, getNewPathFunc1(pNew)).replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-extend/src/asset/The TDA Lady Haku Is Trump Ver2.00 [Silver]/`))
            return _replaceVMDPath([getNewPathFunc1, getNewPathFunc2], originPath, "The TDA Lady Haku Is Trump Ver2.00 [Silver]")
        case mmdCharacter.Changee:
            // return originPath.replace(pOld, getNewPathFunc1(pNew)).replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-extend/src/asset/TDA 嫦娥123话OL装 Ver 1.00/`))
            return _replaceVMDPath([getNewPathFunc1, getNewPathFunc2], originPath, "TDA 嫦娥123话OL装 Ver 1.00")
        case mmdCharacter.Miku1:
            // return originPath.replace(pOld, getNewPathFunc1(pNew)).replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-extend/src/asset/Tda初音Ver1.10/`))
            return _replaceVMDPath([getNewPathFunc1, getNewPathFunc2], originPath, "Tda初音Ver1.10")
        case mmdCharacter.Nero:
            // return originPath.replace(pOld, getNewPathFunc1(pNew)).replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-extend/src/asset/TDA Nero Claudius L2 bride Ver 1.00/`))
            return _replaceVMDPath([getNewPathFunc1, getNewPathFunc2], originPath, "TDA Nero Claudius L2 bride Ver 1.00")
        // return originPath.replace(pOld, p160)

        case mmdCharacter.Haku_QP:
            // return originPath.replace(pOld, getNewPathFunc1(pNew)).replace(`resource_girl/${name}/`, `旗袍 Haku/`)
            // return originPath.replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-extend/src/asset/旗袍 Haku/`))
            return originPath.replace(pOld, p160)
        case mmdCharacter.Meiko:
            // return originPath.replace(pOld, getNewPathFunc1(pOld)).replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-extend/src/asset/Meiko/`))
            return originPath.replace(pOld, p160)
        case mmdCharacter.Meibiwusi:
            // return originPath.replace(pOld, getNewPathFunc1(pOld)).replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-extend/src/asset/梅比乌斯OL装/`))
            return originPath.replace(pOld, p166)
        case mmdCharacter.Vanilla:
            // return originPath.replace(pOld, getNewPathFunc1(pOld)).replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-extend/src/asset/Vanilla v1.0/`))
            return originPath.replace(pOld, p150)
        default:
            // throw new Error("err")
            return originPath
    }
}


export let getName = () => "city"


export let getMikuResourcePath = (name) => `../mmd-character-extend/src/asset/miku_v2.pmd`

export let getNeruResourcePath = (name) => `../mmd-character-extend/src/asset/Neru_Akita.pmd`

export let getLukaResourcePath = (name) => `../mmd-character-extend/src/asset/Luka_Megurine.pmd`

export let getMeikoResourcePath = (name) => `../mmd-character-extend/src/asset/Meiko/Meiko_Sakine.pmx`

// export let getHakuQPResourcePath = (name) => `../mmd-character-extend/src/asset/旗袍 Haku/tda haku QP.pmx`
// export let getHakuQPResourcePath = (name) => `../Tda Miku Standard Base 2.5/Tda Miku Standard Base 2.5.pmx`

export let getHakuLadyResourcePath = (name) => `../mmd-character-extend/src/asset/The TDA Lady Haku Is Trump Ver2.00 [Silver]/The TDA Lady Haku Is Trump Ver2.00 [Silver].pmx`

// export let getLuoli1ResourcePath = (name) => `../ぷにる/傉偵傞_僶僢僌塃.pmx`

// export let getBaixiMaidResourcePath = (name) => `../女仆白希/女仆白希安全裤.pmx`

export let getXiahuiResourcePath = (name) => `../mmd-character-extend/src/asset/TDA式宴 夏卉/TDA Utage CORAL COAST.pmx`

export let getXiaye1ResourcePath = (name) => `../mmd-character-extend/src/asset/Tda 夏夜1 HMS illustrious Prom Dress Ver1.00 [Silver]/Tda HMS illustrious Prom Dress Ver1.00 [Silver].pmx`

export let getXiaye2ResourcePath = (name) => `../mmd-character-extend/src/asset/TDA 夏夜2 MOON LIGHT DANCER LTY/TDA MOON LIGHT DANCER LTY.pmx`

export let getNeroResourcePath = (name) => `../mmd-character-extend/src/asset/TDA Nero Claudius L2 bride Ver 1.00/TDA Nero Claudius L2 bride.pmx`

export let getChangeeResourcePath = (name) => `../mmd-character-extend/src/asset/TDA 嫦娥123话OL装 Ver 1.00/TDA 嫦娥123话OL装 Ver 1.00.pmx`

// export let getLuotianyiResourcePath = (name) => `../TDA 洛天依旗袍 芒种 Ver1.00/TDA 洛天依旗袍 芒种 Ver1.00.pmx`

export let getMiku1ResourcePath = (name) => `../mmd-character-extend/src/asset/Tda初音Ver1.10/Tda幃弶壒儈僋丒傾儁儞僪_Ver1.10.pmx`

export let getVanillaResourcePath = (name) => `../mmd-character-extend/src/asset/Vanilla v1.0/Vanilla.pmx`

export let getMeibiwusiResourcePath = (name) => `../mmd-character-extend/src/asset/梅比乌斯OL装/梅比乌斯5.0.pmx`

export let getMoyeResourcePath = (name) => `../mmd-character-extend/src/asset/摩耶ver1.04/捁奀夵擇ver1.04.pmx`


export let getMMDData = (state, getVMDDataFunc, name): Array<mmdData> => {
    return [
        /*! remove Meiko, because pickup vmd not right
        [
            mmdCharacter.Meiko,
            getMeikoResourceId(),
            [
                getMeikoResourcePath(getName()),
                getVMDDataFunc(state,
                    mmdCharacter.Meiko,
                )
            ],
            {
                heightScale: 1
            }
        ],
        */


        // [
        //     mmdCharacter.Haku_QP,
        //     // getHakuQPResourceId(),
        //     mmdCharacter.Haku_QP,
        //     [
        //         getHakuQPResourcePath(getName()),
        //         getVMDDataFunc(state,
        //             mmdCharacter.Haku_QP,
        //         )
        //     ],
        //     {
        //         heightScale: 1
        //     }
        // ],


        [
            mmdCharacter.Haku_Lady,
            mmdCharacter.Haku_Lady,
            [
                getHakuLadyResourcePath(getName()),
                getVMDDataFunc(state,
                    mmdCharacter.Haku_Lady,
                )
            ],
            {
                heightScale: 1
            }
        ],
        // [
        // 	mmdCharacter.Luoli1,
        // 	getLuoli1ResourceId(),
        // 	[
        // 		getLuoli1ResourcePath(getName()),
        // 		getVMDDataFunc(state,
        // 			mmdCharacter.Luoli1,
        // 		)
        // 	],
        // 	{
        // 		heightScale: 0.85
        // 	}
        // ],

        // [
        //     mmdCharacter.Baixi_Maid,
        //     getBaixiMaidResourceId(),
        //     [
        //         getBaixiMaidResourcePath(getName()),
        //         getVMDDataFunc(state,
        //             mmdCharacter.Baixi_Maid,
        //         )
        //     ],
        //     {
        //         heightScale: 1
        //     }
        // ],


        [
            mmdCharacter.XiaHui,
            mmdCharacter.XiaHui,
            [
                getXiahuiResourcePath(getName()),
                getVMDDataFunc(state,
                    mmdCharacter.XiaHui,
                )
            ],
            {
                heightScale: 1
            }
        ],
        [
            mmdCharacter.Xiaye1,
            mmdCharacter.Xiaye1,
            [
                getXiaye1ResourcePath(getName()),
                getVMDDataFunc(state,
                    mmdCharacter.Xiaye1,
                )
            ],
            {
                heightScale: 1
            }
        ],
        [
            mmdCharacter.Xiaye2,
            mmdCharacter.Xiaye2,
            [
                getXiaye2ResourcePath(getName()),
                getVMDDataFunc(state,
                    mmdCharacter.Xiaye2,
                )
            ],
            {
                heightScale: 1
            }
        ],
        [
            mmdCharacter.Nero,
            mmdCharacter.Nero,
            [
                getNeroResourcePath(getName()),
                getVMDDataFunc(state,
                    mmdCharacter.Nero,
                )
            ],
            {
                heightScale: 1
            }
        ],
        [
            mmdCharacter.Changee,
            mmdCharacter.Changee,
            [
                getChangeeResourcePath(getName()),
                getVMDDataFunc(state,
                    mmdCharacter.Changee,
                )
            ],
            {
                heightScale: 1
            }
        ],
        // [
        //     mmdCharacter.Luotianyi,
        //     mmdCharacter.Luotianyi,
        //     [
        //         getLuotianyiResourcePath(getName()),
        //         getVMDDataFunc(state,
        //             mmdCharacter.Luotianyi,
        //         )
        //     ],
        //     {
        //         heightScale: 1
        //     }
        // ],
        [
            mmdCharacter.Miku1,
            mmdCharacter.Miku1,
            [
                getMiku1ResourcePath(getName()),
                getVMDDataFunc(state,
                    mmdCharacter.Miku1,
                )
            ],
            {
                heightScale: 1
            }
        ],
        [
            mmdCharacter.Vanilla,
            mmdCharacter.Vanilla,
            [
                getVanillaResourcePath(getName()),
                getVMDDataFunc(state,
                    mmdCharacter.Vanilla,
                )
            ],
            {
                heightScale: 1
            }
        ],
        [
            mmdCharacter.Meibiwusi,
            mmdCharacter.Meibiwusi,
            [
                getMeibiwusiResourcePath(getName()),
                getVMDDataFunc(state,
                    mmdCharacter.Meibiwusi,
                )
            ],
            {
                heightScale: 1
            }
        ],
        [
            mmdCharacter.Moye,
            mmdCharacter.Moye,
            [
                getMoyeResourcePath(getName()),
                getVMDDataFunc(state,
                    mmdCharacter.Moye,
                )
            ],
            {
                heightScale: 1
            }
        ],
    ]
}


export let getMMDMaterialFixData = (api: api) => {
    let result: mmdMaterialFixData = [
        // {
        //     mmdCharacter: mmdCharacter.Moye,
        //     noBlendingMaterialNamesInVivo: [],
        //     diffuseFactor: 1.2
        // }
    ]

    // if (Device.isVivo()) {
    if (api.isAndroid()) {
        /*! for vivo
        * 
        */
        return result.concat([
            {
                mmdCharacter: mmdCharacter.Haku_QP,
                noBlendingMaterialNamesInVivo: [
                    "身体",
                ]
            },
            {
                mmdCharacter: mmdCharacter.Haku_Lady,
                noBlendingMaterialNamesInVivo: [
                    // "裙子最外层背部蕾丝边",
                    // "裙子最外层背部蕾丝黑色",
                    "身体",
                    "刘海",
                    "渣女大波浪用飘柔",
                    // "奶罩",
                    // "奶罩蕾丝"
                ]
            },
            // {
            //     mmdCharacter: mmdCharacter.Baixi_Maid,
            //     noBlendingMaterialNamesInVivo: [
            //         // "All",
            //         "头发",
            //         "Skin"
            //     ]
            // },


            {
                mmdCharacter: mmdCharacter.XiaHui,
                noBlendingMaterialNamesInVivo: [
                    "Skin01",
                    "skin02",
                    // "jacket1",
                    "hear1",
                    "hear3",
                    "Hair",
                    "hair2",
                    // "jeans1",
                    // "jeans2"
                ]
            },
            // {
            //     mmdCharacter: mmdCharacter.Baixi_Maid,
            //     noBlendingMaterialNamesInVivo: [
            //         // "All",
            //         "头发",
            //         "Skin"
            //     ]
            // },
            {
                mmdCharacter: mmdCharacter.Xiaye1,
                noBlendingMaterialNamesInVivo: [
                    "Body",
                    "hair00",
                    "hair01",
                    // "hairshadow",
                    "前发=============",
                    "前发丝",
                    "呆毛",
                    "前长发",
                ]
            },
            {
                mmdCharacter: mmdCharacter.Xiaye2,
                noBlendingMaterialNamesInVivo: [
                    "Leg",
                    "後髪",
                    "hair00",
                ]
            },
            {
                mmdCharacter: mmdCharacter.Nero,
                noBlendingMaterialNamesInVivo: [
                    "◎Skin",
                    "◆后盘发",
                    "◆后发",
                    "◆前髮",
                    "◆前細髮",
                ]
            },
            {
                mmdCharacter: mmdCharacter.Changee,
                noBlendingMaterialNamesInVivo: [
                    "Skin",
                    "发辫",
                    "hair00",
                    "hair01",
                    "额前长发",
                ]
            },
            // {
            //     mmdCharacter: mmdCharacter.Luotianyi,
            //     noBlendingMaterialNamesInVivo: [
            //         "Skin",
            //         "Leg",
            //         "8字辫 系发 组1",
            //         "8字辫 组1",
            //         "8字辫后发辫 组1",
            //         "hair00",
            //         "後髪",
            //     ]
            // },
            {
                mmdCharacter: mmdCharacter.Miku1,
                noBlendingMaterialNamesInVivo: [
                    "skin",
                    "body00",
                    "body01",
                    "body_pink",
                    "body_green",
                    "body_green2",
                    "body02",
                    "hair00",
                    "hair01",
                    // "hairshadow",
                    "leg",
                    "wing",
                ]
            },
            {
                mmdCharacter: mmdCharacter.Vanilla,
                noBlendingMaterialNamesInVivo: [
                    "skin (Instance)",
                    "Hair_Aho006a-HairAho (Instance)",
                    "Hair_Twin030-HairTwin (Instance)",
                    "Hair_R069-HairR (Instance)",
                    "Hair_R069-HairAcc (Instance)",
                    "Hair_F077-HairF (Instance)",
                ]
            },
            {
                mmdCharacter: mmdCharacter.Meibiwusi,
                noBlendingMaterialNamesInVivo: [
                    "身体",
                    "头发",
                ]
            },
            {
                mmdCharacter: mmdCharacter.Moye,
                noBlendingMaterialNamesInVivo: [
                    "体",
                    "体（パンツ）",
                    "体（手袋）",
                    "体（靴下）",
                    "前髪１",
                    "髪",
                ]
            },
        ])
    }

    return result
}


export let getClothCollisionData = (shoeDamagePart): clothCollisionData<collisionPart> => {
    return [
        // {
        //     mmdCharacter: mmdCharacter.Haku_QP,
        //     data: [
        //         {
        //             collisionPart: [
        //                 collisionPart.Torso,
        //                 collisionPart.LeftBreast,
        //                 collisionPart.RightBreast,
        //                 collisionPart.TrigoneAndButt,
        //             ],
        //             damagePart: "旗袍",
        //             children: [
        //                 {
        //                     collisionPart: [
        //                         collisionPart.TrigoneAndButt,
        //                     ],
        //                     damagePart: "胖次",
        //                     children: []
        //                 }
        //             ]
        //         },
        //     ]
        // },

        {
            mmdCharacter: mmdCharacter.Haku_Lady,
            data: [
                {
                    collisionPart: [
                        collisionPart.Head,
                    ],
                    damagePart: "帽子",
                    damageParts: ["帽子", "帽子白色蕾丝花边", "帽子黑色边", "帽子蕾丝内衬", "帽子黑纱蕾丝"],
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftFoot,
                        collisionPart.RightFoot,
                    ],
                    damagePart: shoeDamagePart,
                    damageParts: [
                        "高跟拖鞋",
                        "高跟鞋玫瑰",
                    ],
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftUpperArm,
                        collisionPart.RightUpperArm,
                        collisionPart.LeftLowerArm,
                        collisionPart.RightLowerArm,
                    ],
                    damagePart: "袖子",
                    damageParts: ["袖子", "西服扣子"],
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.Torso,
                    ],
                    damagePart: "西服",
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftBreast,
                        collisionPart.RightBreast,
                    ],
                    damagePart: "衬衫",
                    children: [
                        {
                            collisionPart: [
                                collisionPart.LeftBreast,
                                collisionPart.RightBreast,
                            ],
                            damagePart: "奶罩",
                            damageParts: ["奶罩", "奶罩蕾丝"],
                            children: [
                            ]
                        },
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftThigh,
                        collisionPart.RightThigh,
                        collisionPart.TrigoneAndButt,
                    ],
                    damagePart: "裙子包腿",
                    damageParts: ["裙子包腿部分", "裙子包腿部蕾丝"],
                    children: [
                        {
                            collisionPart: [
                                collisionPart.TrigoneAndButt,
                            ],
                            damagePart: "三角区蕾丝",
                            damageParts: ["裙子最外层背部蕾丝边", "裙子最外层背部蕾丝黑色"],
                            children: [
                                {
                                    collisionPart: [
                                        collisionPart.TrigoneAndButt,
                                    ],
                                    damagePart: "裤头",
                                    children: [
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },

        {
            mmdCharacter: mmdCharacter.XiaHui,
            data: [
                {
                    collisionPart: [
                        collisionPart.Head,
                    ],
                    damagePart: "头饰",
                    damageParts: ["hat", "glasses"],
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftFoot,
                        collisionPart.RightFoot,
                    ],
                    damagePart: shoeDamagePart,
                    damageParts: [
                        "shoes",
                    ],
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftBreast,
                        collisionPart.RightBreast,
                    ],
                    damagePart: "奶罩",
                    damageParts: ["Bra", "tie"],
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.TrigoneAndButt,
                    ],
                    damagePart: "裤子",
                    damageParts: ["jeans1"],
                    children: [
                        {
                            collisionPart: [
                                collisionPart.TrigoneAndButt,
                            ],
                            damagePart: "胖次",
                            damageParts: ["jeans2"],
                            children: [
                            ]
                        },
                    ]
                },
            ]
        },

        {
            mmdCharacter: mmdCharacter.Xiaye1,
            data: [
                {
                    collisionPart: [
                        collisionPart.Head,
                    ],
                    damagePart: "头饰",
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftThigh,
                        collisionPart.RightThigh,
                        collisionPart.LeftShank,
                        collisionPart.RightShank,
                    ],
                    damagePart: "丝袜",
                    damageParts: [
                        "丝袜",
                        "丝袜足尖",
                    ],
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftFoot,
                        collisionPart.RightFoot,
                    ],
                    damagePart: shoeDamagePart,
                    damageParts: [
                        "高跟鞋",
                    ],
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftLowerArm,
                        collisionPart.RightLowerArm,
                    ],
                    damagePart: "手套",
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftBreast,
                        collisionPart.RightBreast,
                        collisionPart.TrigoneAndButt,
                        collisionPart.Torso
                    ],
                    damagePart: "衣服",
                    damageParts: ["发辫饰带", "礼服内层薄纱", "礼服内层薄纱1"],
                    children: [
                        {
                            collisionPart: [
                                collisionPart.TrigoneAndButt
                            ],
                            damagePart: "胖次",
                            damageParts: ["胖次", "系带", "系带孔", "吊带夹扣"],
                            children: [
                            ]
                        },
                    ]
                },
            ]
        },

        {
            mmdCharacter: mmdCharacter.Xiaye2,
            data: [
                {
                    collisionPart: [
                        collisionPart.Torso,
                        collisionPart.LeftBreast,
                        collisionPart.RightBreast,
                        collisionPart.TrigoneAndButt,
                    ],
                    damagePart: "衣服",
                    damageParts: ["服装 表层", "服装 里层", "兰草1"],
                    children: [
                        {
                            collisionPart: [
                                collisionPart.TrigoneAndButt,
                            ],
                            damagePart: "胖次外",
                            damageParts: ["C型胖次1"],
                            children: [
                                {
                                    collisionPart: [
                                        collisionPart.TrigoneAndButt,
                                    ],
                                    damagePart: "胖次内",
                                    damageParts: ["C型胖次"],
                                    children: [
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftFoot,
                        collisionPart.RightFoot,
                    ],
                    damagePart: shoeDamagePart,
                    damageParts: [
                        "鞋",
                    ],
                    children: [
                    ]
                },
            ]
        },

        {
            mmdCharacter: mmdCharacter.Nero,
            data: [
                {
                    collisionPart: [
                        collisionPart.Head,
                    ],
                    damagePart: "头纱发箍",
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftHand,
                        collisionPart.RightHand,
                        collisionPart.LeftUpperArm,
                        collisionPart.RightUpperArm,
                        collisionPart.LeftLowerArm,
                        collisionPart.RightLowerArm,

                        collisionPart.LeftThigh,
                        collisionPart.RightThigh,
                        collisionPart.LeftShank,
                        collisionPart.RightShank,
                    ],
                    damagePart: "四肢衣服",
                    damageParts: ["手袖", "●金属材質3",],
                    children: [
                        {
                            collisionPart: [
                                collisionPart.LeftThigh,
                                collisionPart.RightThigh,
                                collisionPart.LeftShank,
                                collisionPart.RightShank,
                            ],
                            damagePart: "白丝",
                            damageParts: [
                                "腿 束带",
                                "白丝",
                                "●金属材質4",

                            ],
                            children: [
                            ]
                        },
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftFoot,
                        collisionPart.RightFoot,
                    ],
                    damagePart: shoeDamagePart,
                    damageParts: [
                        "■高跟鞋",
                        "■鞋跟",
                    ],
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftBreast,
                        collisionPart.RightBreast,
                        collisionPart.Torso,
                    ],
                    damagePart: "衣服",
                    damageParts: [
                        "吊带", "吊带金属夹扣", "服 束缚带",
                        "●金属材質1",
                    ],
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.TrigoneAndButt,
                    ],
                    damagePart: "三角区",
                    damageParts: [
                        "●金属材質2",
                        "●金属材質9",
                        "束带套口"
                    ],
                    children: [
                        {
                            collisionPart: [
                                collisionPart.TrigoneAndButt,
                            ],
                            damagePart: "服 束腰带",
                            children: [
                            ]
                        },
                    ]
                },
            ]
        },

        {
            mmdCharacter: mmdCharacter.Changee,
            data: [
                {
                    collisionPart: [
                        collisionPart.LeftUpperArm,
                        collisionPart.RightUpperArm,
                        collisionPart.LeftLowerArm,
                        collisionPart.RightLowerArm,

                        collisionPart.Torso,
                        collisionPart.LeftBreast,
                        collisionPart.RightBreast,

                    ],
                    damagePart: "服装 上衣",
                    damageParts: ["服装 上衣", "袖 扣饰"],
                    children: [
                        {
                            collisionPart: [
                                collisionPart.LeftBreast,
                                collisionPart.RightBreast,
                            ],
                            damagePart: "奶罩",
                            damageParts: ["围颈1"],
                            children: [
                            ]
                        },
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftFoot,
                        collisionPart.RightFoot,
                    ],
                    damagePart: shoeDamagePart,
                    damageParts: [
                        "围颈 饰物",
                        "鞋 内侧",
                        "鞋底",
                    ],
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.TrigoneAndButt,
                    ],
                    damagePart: "服装 裙",
                    children: [
                        {
                            collisionPart: [
                                collisionPart.TrigoneAndButt,
                            ],
                            damagePart: "胖次",
                            damageParts: [
                                "疑似C裤？",
                            ],
                            children: [
                            ]
                        },
                    ]
                },
            ]
        },

        {
            mmdCharacter: mmdCharacter.Meibiwusi,
            data: [
                {
                    collisionPart: [
                        collisionPart.Torso,
                        collisionPart.LeftBreast,
                        collisionPart.RightBreast,

                    ],
                    damagePart: "上衣",
                    damageParts: ["上衣-内"],
                    children: [
                        {
                            collisionPart: [
                                collisionPart.LeftBreast,
                                collisionPart.RightBreast,
                            ],
                            damagePart: "胸罩",
                            children: [
                            ]
                        },
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftFoot,
                        collisionPart.RightFoot,
                    ],
                    damagePart: shoeDamagePart,
                    damageParts: [
                        "鞋子",
                    ],
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.LeftThigh,
                        collisionPart.RightThigh,
                        collisionPart.LeftShank,
                        collisionPart.RightShank,

                    ],
                    damagePart: "裤袜",
                    children: [
                    ]
                },
                {
                    collisionPart: [
                        collisionPart.TrigoneAndButt,
                    ],
                    damagePart: "包臀裙",
                    children: [
                    ]
                },
            ]
        },

        {
            mmdCharacter: mmdCharacter.Moye,
            data: [
                {
                    collisionPart: [
                        collisionPart.Torso,
                        collisionPart.LeftBreast,
                        collisionPart.RightBreast,

                    ],
                    damagePart: "胸襟",
                    damageParts: ["服（ネクタイ）"],
                    children: [
                        {
                            collisionPart: [
                                collisionPart.Torso,
                                collisionPart.LeftBreast,
                                collisionPart.RightBreast,
                            ],
                            damagePart: "上衣",
                            damageParts: ["服"],
                            children: [
                            ]
                        },
                    ]
                },
            ]
        },
    ]
}

// export let getClothHpData = (state: state, usedGirl): clothHpData => {
export let getClothHpData = (fullHp, body, shoeDamagePart): clothHpData => {
    // let fullHp = getFullHpByUsedGirl(state, usedGirl)
    return [
        {
            mmdCharacter: mmdCharacter.Meiko,
            data: [{
                damagePart: body,
                hp: fullHp,
                armorStrength: armorStrength.Low,
                armorType: armorType.Light,
            },
            ]
        },

        // {
        //     mmdCharacter: mmdCharacter.Haku_QP,
        //     data: [{
        //         damagePart: body,
        //         hp: fullHp,
        //         defenseFactor: defenseFactor.VeryHigh,
        //     },
        //     {
        //         damagePart: "旗袍",
        //         hp: fullHp * 0.2,
        //                         armorType: armorType.Middle,
        // armorStrength: armorStrength.Low,
        //         stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
        //     },
        //     {
        //         damagePart: "胖次",
        //         hp: fullHp * 0.3,
        //                         armorType: armorType.Middle,
        // armorStrength: armorStrength.Low,
        //         stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
        //     }]
        // },


        {
            mmdCharacter: mmdCharacter.Haku_Lady,
            data: [{
                damagePart: body,
                hp: fullHp,
                // defenseFactor: defenseFactor.High,
                armorType: armorType.Light,
                armorStrength: armorStrength.Middle,
            },
            {
                damagePart: shoeDamagePart,
                hp: fullHp * 0.3,
                //                 armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                armorType: armorType.Heavy,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            {
                damagePart: "帽子",
                hp: fullHp * 0.2,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.VeryLow,
            },
            {
                damagePart: "袖子",
                hp: fullHp * 0.1,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Low,
            },
            {
                damagePart: "西服",
                hp: fullHp * 0.1,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
            },
            {
                damagePart: "衬衫",
                hp: fullHp * 0.1,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
            },
            {
                damagePart: "奶罩",
                hp: fullHp * 0.2,
                armorType: armorType.Heavy,
                armorStrength: armorStrength.Middle,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            {
                damagePart: "裙子包腿",
                hp: fullHp * 0.1,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
            },
            {
                damagePart: "三角区蕾丝",
                hp: fullHp * 0.15,
                armorType: armorType.VeryHeavy,
                armorStrength: armorStrength.High,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            {
                damagePart: "裤头",
                hp: fullHp * 0.3,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            ]
        },

        // {
        //     mmdCharacter: mmdCharacter.Baixi_Maid,
        //     data: [{
        //         damagePart: body,
        //         hp: fullHp,
        //         armorType: armorType.Light,
        //         armorStrength: armorStrength.Low,
        //     },
        //     ]
        // },

        {
            mmdCharacter: mmdCharacter.XiaHui,
            data: [
                {
                    damagePart: body,
                    hp: fullHp,
                    armorType: armorType.Light,
                    armorStrength: armorStrength.Low,
                },
                {
                    damagePart: shoeDamagePart,
                    hp: fullHp * 0.3,
                    armorType: armorType.Heavy,
                    armorStrength: armorStrength.Low,
                    stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
                },
                {
                    damagePart: "头饰",
                    hp: fullHp * 0.1,
                    armorType: armorType.Middle,
                    armorStrength: armorStrength.Low,
                    stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.VeryLow,
                },
                {
                    damagePart: "奶罩",
                    hp: fullHp * 0.2,
                    armorType: armorType.Heavy,
                    armorStrength: armorStrength.Middle,
                    stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
                },
                {
                    damagePart: "裤子",
                    hp: fullHp * 0.1,
                    armorType: armorType.Middle,
                    armorStrength: armorStrength.Low,
                    stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
                },
                {
                    damagePart: "胖次",
                    hp: fullHp * 0.3,
                    armorType: armorType.VeryHeavy,
                    armorStrength: armorStrength.High,
                    stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
                },
            ]
        },
        {
            mmdCharacter: mmdCharacter.Xiaye1,
            data: [{
                damagePart: body,
                hp: fullHp,
                armorType: armorType.Light,
                armorStrength: armorStrength.Low,
            },
            {
                damagePart: "头饰",
                hp: fullHp * 0.1,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.VeryLow,
            },
            {
                damagePart: "丝袜",
                hp: fullHp * 0.1,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
            },
            {
                damagePart: shoeDamagePart,
                hp: fullHp * 0.3,
                armorType: armorType.Heavy,
                armorStrength: armorStrength.Middle,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            {
                damagePart: "手套",
                hp: fullHp * 0.1,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
            },
            {
                damagePart: "衣服",
                hp: fullHp * 0.2,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
            },
            {
                damagePart: "胖次",
                hp: fullHp * 0.3,
                armorType: armorType.VeryHeavy,
                armorStrength: armorStrength.High,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            ]
        },
        {
            mmdCharacter: mmdCharacter.Xiaye2,
            data: [{
                damagePart: body,
                hp: fullHp,
                armorType: armorType.Light,
                armorStrength: armorStrength.Low,
            },
            {
                damagePart: shoeDamagePart,
                hp: fullHp * 0.3,
                armorType: armorType.Heavy,
                armorStrength: armorStrength.Middle,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            {
                damagePart: "衣服",
                hp: fullHp * 0.3,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
            },
            {
                damagePart: "胖次外",
                hp: fullHp * 0.2,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
            },
            {
                damagePart: "胖次内",
                hp: fullHp * 0.2,
                armorType: armorType.VeryHeavy,
                armorStrength: armorStrength.High,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            ]
        },
        {
            mmdCharacter: mmdCharacter.Nero,
            data: [{
                damagePart: body,
                hp: fullHp,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Middle,
            },
            {
                damagePart: "头纱发箍",
                hp: fullHp * 0.1,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Low,
            },
            {
                damagePart: "四肢衣服",
                hp: fullHp * 0.2,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Low,
            },
            {
                damagePart: "白丝",
                hp: fullHp * 0.2,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Low,
            },
            {
                damagePart: shoeDamagePart,
                hp: fullHp * 0.3,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            {
                damagePart: "衣服",
                hp: fullHp * 0.2,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Middle,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
            },
            {
                damagePart: "三角区",
                hp: fullHp * 0.4,
                armorType: armorType.VeryHeavy,
                armorStrength: armorStrength.High,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            {
                damagePart: "服 束腰带",
                hp: fullHp * 0.1,
                armorType: armorType.Heavy,
                armorStrength: armorStrength.VeryHigh,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            ]
        },
        {
            mmdCharacter: mmdCharacter.Changee,
            data: [{
                damagePart: body,
                hp: fullHp,
                armorType: armorType.Light,
                armorStrength: armorStrength.Low,
            },
            {
                damagePart: shoeDamagePart,
                hp: fullHp * 0.3,
                armorType: armorType.Heavy,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            {
                damagePart: "服装 上衣",
                hp: fullHp * 0.1,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
            },
            {
                damagePart: "奶罩",
                hp: fullHp * 0.2,
                armorType: armorType.Heavy,
                armorStrength: armorStrength.Middle,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            {
                damagePart: "服装 裙",
                hp: fullHp * 0.1,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
            },
            {
                damagePart: "胖次",
                hp: fullHp * 0.3,
                armorType: armorType.VeryHeavy,
                armorStrength: armorStrength.High,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            ]
        },
        // {
        //     mmdCharacter: mmdCharacter.Luotianyi,
        //     data: [{
        //         damagePart: body,
        //         hp: fullHp,
        //     },
        //     ]
        // },
        {
            mmdCharacter: mmdCharacter.Miku1,
            data: [{
                damagePart: body,
                hp: fullHp,
                armorType: armorType.Light,
                armorStrength: armorStrength.Low,
            },
            ]
        },
        {
            mmdCharacter: mmdCharacter.Vanilla,
            data: [{
                damagePart: body,
                hp: fullHp,
                armorType: armorType.Light,
                armorStrength: armorStrength.Low,
            },
            ]
        },
        {
            mmdCharacter: mmdCharacter.Meibiwusi,
            data: [{
                damagePart: body,
                hp: fullHp,
                armorType: armorType.Light,
                armorStrength: armorStrength.Low,
            },
            {
                damagePart: shoeDamagePart,
                hp: fullHp * 0.3,
                armorType: armorType.Heavy,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            {
                damagePart: "上衣",
                hp: fullHp * 0.1,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
            },
            {
                damagePart: "胸罩",
                hp: fullHp * 0.2,
                armorType: armorType.Heavy,
                armorStrength: armorStrength.High,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            {
                damagePart: "裤袜",
                hp: fullHp * 0.1,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.Middle,
            },
            {
                damagePart: "包臀裙",
                hp: fullHp * 0.2,
                armorType: armorType.Heavy,
                armorStrength: armorStrength.High,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            ]
        },
        {
            mmdCharacter: mmdCharacter.Moye,
            data: [{
                damagePart: body,
                hp: fullHp,
                armorType: armorType.Light,
                armorStrength: armorStrength.Low,
            },
            {
                damagePart: "胸襟",
                hp: fullHp * 0.1,
                armorType: armorType.Heavy,
                armorStrength: armorStrength.High,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            {
                damagePart: "上衣",
                hp: fullHp * 0.2,
                armorType: armorType.Middle,
                armorStrength: armorStrength.Low,
                stressingFactorWhenDestroyed: stressingFactorWhenDestroyed.High,
            },
            ]
        },
    ]
}

let _getMiddlePoint1 = (api: api, girl) => {
    let bone1 = api.getGameObjectByName(girl, "左目")
    let p1 = api.getWorldPosition(bone1)
    let bone2 = api.getGameObjectByName(girl, "右目")
    let p2 = api.getWorldPosition(bone2)

    return api.vector3.add(api.clone(p1),
        api.vector3.multiplyScalar(
            api.vector3.sub(
                api.clone(p2), p1
            ),
            0.5
        )
    )
}

let _getMiddlePoint2 = (api, girl) => {
    let bone1 = api.getGameObjectByName(girl, "左目戻")
    let p1 = api.getWorldPosition(bone1)
    let bone2 = api.getGameObjectByName(girl, "右目戻")
    let p2 = api.getWorldPosition(bone2)

    return api.vector3.add(api.clone(p1),
        api.vector3.multiplyScalar(
            api.vector3.sub(
                api.clone(p2), p1
            ),
            0.5
        )
    )
}

let _getCameraPositionForFirstPersonControls1 = (api, girl) => {
    let middlePoint = _getMiddlePoint1(api, girl)

    let bone3 = api.getGameObjectByName(girl, "メガネ")
    let p3 = api.getWorldPosition(bone3)

    // return middlePoint.clone().add(middlePoint.clone().sub(p3).multiplyScalar(10))
    return api.vector3.add(api.clone(middlePoint),
        api.vector3.multiplyScalar(
            api.vector3.sub(
                api.clone(middlePoint), p3
            ),
            10
        )
    )
}


export let getFirstPersonControlsData = (): firstPersonControlsData => {
    return [
        {
            mmdCharacter: mmdCharacter.Meiko,
            data: {
                getCameraPositionForFirstPersonControlsFunc: (api, girl) => {
                    let middlePoint = _getMiddlePoint1(api, girl)

                    let bone3 = api.getGameObjectByName(girl, "後髪")
                    let p3 = api.getWorldPosition(bone3)

                    // return middlePoint.clone().add(middlePoint.clone().sub(p3).multiplyScalar(0.6))
                    return api.vector3.add(api.clone(middlePoint),
                        api.vector3.multiplyScalar(
                            api.vector3.sub(
                                api.clone(middlePoint), p3
                            ),
                            0.6
                        )
                    )
                },
                hideMaterialNames: [
                    "材质2",
                    "材质6",
                    "材质12",
                    "材质13",
                ]
            }

        },
        // {
        //     mmdCharacter: mmdCharacter.Baixi_Maid,
        //     data: {
        //         getCameraPositionForFirstPersonControlsFunc: (api, girl) => {
        //             return girl.getObjectByName("第一視角").getWorldPosition(_v1)
        //         },
        //         hideMaterialNames: [
        //             "脸",
        //             "牙齿",
        //             "眼睛",
        //             "表情"
        //         ]
        //     }

        // },
        {
            mmdCharacter: mmdCharacter.Nero,
            data: {
                getCameraPositionForFirstPersonControlsFunc: (api: api, girl) => {
                    let middlePoint = _getMiddlePoint1(api, girl)

                    let bone3 = api.getGameObjectByName(girl, "ヘッドセット先")
                    let p3 = api.getWorldPosition(bone3)
                    let bone4 = api.getGameObjectByName(girl, "両目")
                    let p4 = api.getWorldPosition(bone4)

                    // return middlePoint.clone().add(p4.clone().sub(p3).multiplyScalar(6))
                    return api.vector3.add(api.clone(middlePoint),
                        api.vector3.multiplyScalar(
                            api.vector3.sub(
                                api.clone(p4), p3
                            ),
                            6
                        )
                    )
                },
                hideMaterialNames: [
                    "◆目",
                    "◆eye_hi",
                    "◆eye_hi2",
                    "◆まつ毛",
                    "◆メガネ",
                    "◆レンズ",
                    "◆顔",
                ]
            }

        },
        {
            mmdCharacter: mmdCharacter.Changee,
            data: {
                getCameraPositionForFirstPersonControlsFunc: _getCameraPositionForFirstPersonControls1,
                hideMaterialNames: [
                    "DumbEyes",
                    "Eyelashes",
                    "Eyes",
                    "New",
                    "eye_hi",
                    "face00",
                    "Eyebrows",
                ]
            }
        },
        {
            mmdCharacter: mmdCharacter.Xiaye1,
            data: {
                getCameraPositionForFirstPersonControlsFunc: _getCameraPositionForFirstPersonControls1,
                hideMaterialNames: [
                    "eye",
                    "eye_hi",
                    "eye_hi2",
                    "face00",
                    "face00R",
                    "face01",
                    "face02",
                    "frame",
                    "cheek",
                    "前发=============",
                    "前发丝",
                    "呆毛",
                ]
            }
        },
        {
            mmdCharacter: mmdCharacter.Xiaye2,
            data: {
                getCameraPositionForFirstPersonControlsFunc: _getCameraPositionForFirstPersonControls1,
                hideMaterialNames: [
                    "目",
                    "eye_hi",
                    "hair00",
                    "顔",
                ]
            }
        },
        {
            mmdCharacter: mmdCharacter.Miku1,
            data: {
                getCameraPositionForFirstPersonControlsFunc: _getCameraPositionForFirstPersonControls1,
                hideMaterialNames: [
                    "face00",
                    "face01",
                    "eye_hi",
                    "eye_hi2",
                    "eye_hi2",
                    "lens",
                    "body02",
                ]
            }
        },
        {
            mmdCharacter: mmdCharacter.XiaHui,
            data: {
                getCameraPositionForFirstPersonControlsFunc: (api, girl) => {
                    // let middlePoint = _getMiddlePoint1(api, girl)

                    // let bone3 = girl.getObjectByName("メガネ")
                    // let p3 = bone3.getWorldPosition(_v3)
                    // let bone4 = girl.getObjectByName("頭")
                    // let p4 = bone4.getWorldPosition(_v4)

                    // return middlePoint.clone().add(
                    //     middlePoint.clone().sub(p3).multiplyScalar(10)
                    // ).add(
                    //     p4.clone().sub(p3).multiplyScalar(8)
                    // )
                    let middlePoint = _getMiddlePoint1(api, girl)

                    let bone3 = api.getGameObjectByName(girl, "メガネ")
                    let p3 = api.getWorldPosition(bone3)
                    let bone4 = api.getGameObjectByName(girl, "頭")
                    let p4 = api.getWorldPosition(bone4)

                    return api.vector3.add(
                        api.vector3.add(api.clone(middlePoint),
                            api.vector3.multiplyScalar(
                                api.vector3.sub(
                                    api.clone(middlePoint), p3
                                ),
                                10
                            )
                        ),
                        api.vector3.multiplyScalar(
                            api.vector3.sub(
                                api.clone(p4),
                                p3
                            ),
                            8
                        )
                    )

                },
                hideMaterialNames: [
                    "eye",
                    "eye extra",
                    "eye hi",
                    "eye+",
                    "eyebrow",
                    "eyewhite",
                    "face",
                    "mouth",
                    "glasses",
                ]
            }
        },
        {
            mmdCharacter: mmdCharacter.Haku_Lady,
            data: {
                getCameraPositionForFirstPersonControlsFunc: (api, girl) => {
                    // let middlePoint = _getMiddlePoint2(girl)

                    // let bone1 = girl.getObjectByName("左目戻")
                    // let p1 = bone1.getWorldPosition(_v1)
                    // let bone2 = girl.getObjectByName("左目")
                    // let p2 = bone2.getWorldPosition(_v2)

                    // return middlePoint.clone().add(
                    //     p1.clone().sub(p2).multiplyScalar(1)
                    // )

                    let middlePoint = _getMiddlePoint2(api, girl)

                    let bone1 = api.getGameObjectByName(girl, "左目戻")
                    let p1 = api.getWorldPosition(bone1)
                    let bone2 = api.getGameObjectByName(girl, "左目")
                    let p2 = api.getWorldPosition(bone2)

                    return api.vector3.add(api.clone(middlePoint),
                        api.vector3.multiplyScalar(
                            api.vector3.sub(
                                api.clone(p1), p2
                            ),
                            1
                        )
                    )

                },
                hideMaterialNames: [
                    "刘海",
                    "玻璃体",
                    "眉毛",
                    "眼光",
                    "脸",
                ]
            }
        },
        {
            mmdCharacter: mmdCharacter.Vanilla,
            data: {
                getCameraPositionForFirstPersonControlsFunc: (api, girl) => {
                    // let middlePoint = _getMiddlePoint1(api, girl)

                    // let bone3 = girl.getObjectByName("Eyepos_R")
                    // let p3 = bone3.getWorldPosition(_v3)
                    // let bone4 = girl.getObjectByName("右目")
                    // let p4 = bone4.getWorldPosition(_v4)

                    // return middlePoint.clone().add(
                    //     p4.clone().sub(p3).multiplyScalar(6)
                    // )

                    let middlePoint = _getMiddlePoint1(api, girl)

                    let bone3 = api.getGameObjectByName(girl, "Eyepos_R")
                    let p3 = api.getWorldPosition(bone3)
                    let bone4 = api.getGameObjectByName(girl, "右目")
                    let p4 = api.getWorldPosition(bone4)

                    return api.vector3.add(api.clone(middlePoint),
                        api.vector3.multiplyScalar(
                            api.vector3.sub(
                                api.clone(p4), p3
                            ),
                            6
                        )
                    )

                },
                hideMaterialNames: [
                    "Face007_EyeL (Instance)",
                    "Face007_EyeR (Instance)",
                    "Face007_Mayu (Instance)",
                    "Face007_Mouth (Instance)",
                    "Face007_Skin (Instance)",
                    "Face007_SkinAlpha (Instance)",
                    "Face007_SkinHi (Instance)",
                ]
            }
        },
        {
            mmdCharacter: mmdCharacter.Meibiwusi,
            data: {
                getCameraPositionForFirstPersonControlsFunc: (api, girl) => {
                    // let middlePoint = _getMiddlePoint1(api, girl)

                    // let bone3 = girl.getObjectByName("メガネ")
                    // let p3 = bone3.getWorldPosition(_v3)

                    // return middlePoint.clone().add(middlePoint.clone().sub(p3).multiplyScalar(10))

                    let middlePoint = _getMiddlePoint1(api, girl)

                    let bone3 = api.getGameObjectByName(girl, "メガネ")
                    let p3 = api.getWorldPosition(bone3)

                    return api.vector3.add(api.clone(middlePoint),
                        api.vector3.multiplyScalar(
                            api.vector3.sub(
                                api.clone(middlePoint), p3
                            ),
                            10
                        )
                    )

                },
                hideMaterialNames: [
                    "眼睛",
                    "脸",
                    "眉毛",
                    "表情",
                    "首",
                ]
            }
        },
        {
            mmdCharacter: mmdCharacter.Moye,
            data: {
                getCameraPositionForFirstPersonControlsFunc: (api, girl) => {
                    // let middlePoint = _getMiddlePoint1(api, girl)

                    // let bone3 = girl.getObjectByName("スカート_0_4")
                    // let p3 = bone3.getWorldPosition(_v3)
                    // let bone4 = girl.getObjectByName("スカート_0_0")
                    // let p4 = bone4.getWorldPosition(_v4)

                    // return middlePoint.clone().add(p4.clone().sub(p3).multiplyScalar(1))


                    let middlePoint = _getMiddlePoint1(api, girl)

                    let bone3 = api.getGameObjectByName(girl, "スカート_0_4")
                    let p3 = api.getWorldPosition(bone3)
                    let bone4 = api.getGameObjectByName(girl, "スカート_0_0")
                    let p4 = api.getWorldPosition(bone4)

                    return api.vector3.add(api.clone(middlePoint),
                        api.vector3.multiplyScalar(
                            api.vector3.sub(
                                api.clone(p4), p3
                            ),
                            1
                        )
                    )
                },
                hideMaterialNames: [
                    "モーフ",
                    "前髪１",
                    "顔（まゆ・まつげ・鼻）",
                    "顔（ハイライト2）",
                    "顔（ハイライト）",
                    "顔（口内）",
                    "顔（歯）",
                    "顔（耳）",
                    "目",
                    "目（ぐるぐる）",
                    "目（しいたけ）",
                    "目（ハート）",
                    "顔（影なし）",
                ]
            }
        },
    ]
}

export let getShoeData = (): shoeData => {
    return [
        {
            mmdCharacter: mmdCharacter.Xiaye1,
            data: {
                shoeType: shoeType.Heel,
                notIKBones: [
                    {
                        name: "全ての親",
                        yOffset: -0.9
                    }
                ],
                ikBones: [
                    {
                        names: ["右つま先ＩＫ", "左つま先ＩＫ"],
                        yOffset: +1.15
                    }
                ],
            }
        },
        {
            mmdCharacter: mmdCharacter.Nero,
            data: {
                shoeType: shoeType.Heel,
                notIKBones: [
                    {
                        name: "全ての親",
                        yOffset: -0.9
                    }
                ],
                ikBones: [
                    {
                        names: ["右つま先ＩＫ", "左つま先ＩＫ"],
                        yOffset: +1.5
                    }
                ],
            }
        },
        {
            mmdCharacter: mmdCharacter.Changee,
            data: {
                shoeType: shoeType.Heel,
                notIKBones: [
                    {
                        name: "全ての親",
                        yOffset: -1.3
                    }
                ],
                ikBones: [
                    {
                        names: ["右つま先ＩＫ", "左つま先ＩＫ"],
                        yOffset: +2.1
                    }
                ],
            }
        },
        {
            mmdCharacter: mmdCharacter.Xiaye2,
            data: {
                shoeType: shoeType.Heel,
                notIKBones: [
                    {
                        name: "全ての親",
                        yOffset: -1
                    }
                ],
                ikBones: [
                    {
                        names: ["右つま先ＩＫ", "左つま先ＩＫ"],
                        yOffset: +1.5
                    }
                ],
            }
        },
        {
            mmdCharacter: mmdCharacter.XiaHui,
            data: {
                shoeType: shoeType.Common,
                notIKBones: [
                    {
                        name: "全ての親",
                        yOffset: -1
                    }
                ],
                ikBones: [
                    {
                        names: ["右つま先ＩＫ", "左つま先ＩＫ"],
                        yOffset: +1.0
                    }
                ],
            }
        },
        {
            mmdCharacter: mmdCharacter.Haku_Lady,
            data: {
                shoeType: shoeType.Heel,
                notIKBones: [
                    {
                        name: "全ての親",
                        yOffset: -1
                    }
                ],
                ikBones: [
                    {
                        names: ["右つま先ＩＫ", "左つま先ＩＫ"],
                        yOffset: +1.15
                    }
                ],
            }
        },
        {
            mmdCharacter: mmdCharacter.Meibiwusi,
            data: {
                shoeType: shoeType.Heel,
                notIKBones: [
                    {
                        name: "全ての親",
                        yOffset: -0.7
                    }
                ],
                ikBones: [
                    {
                        names: ["右つま先ＩＫ", "左つま先ＩＫ"],
                        yOffset: +1
                    }
                ],
            }
        },
        {
            mmdCharacter: mmdCharacter.Miku1,
            data: {
                shoeType: shoeType.None,
            }
        },
        {
            mmdCharacter: mmdCharacter.Miku1,
            data: {
                shoeType: shoeType.None,
            }
        },
        {
            mmdCharacter: mmdCharacter.Miku1,
            data: {
                shoeType: shoeType.None,
            }
        },
        {
            mmdCharacter: mmdCharacter.Vanilla,
            data: {
                shoeType: shoeType.Heel,
            }
        },
        {
            mmdCharacter: mmdCharacter.Moye,
            data: {
                shoeType: shoeType.Heel,
            }
        },
        // {
        //     mmdCharacter: mmdCharacter.Baixi_Maid,
        //     data: {
        //         shoeType: shoeType.Common,
        //     }
        // },
        {
            mmdCharacter: mmdCharacter.Haku_QP,
            data: {
                shoeType: shoeType.Heel,
            }
        },
    ]
}


export let getBoneNameForLightStressing = (): boneNameForLightStressing => {
    return [
        {
            mmdCharacter: mmdCharacter.Vanilla,
            boneName: {
                [collisionPart.RightBreast]: "右胸操作",
                [collisionPart.LeftBreast]: "左胸操作",
            }
        },
        {
            mmdCharacter: mmdCharacter.Nero,
            boneName: {
                [collisionPart.RightBreast]: "右胸上2",
                [collisionPart.LeftBreast]: "左胸上2",
            }
        },
        {
            mmdCharacter: mmdCharacter.Xiaye1,
            boneName: {
                [collisionPart.RightBreast]: "右胸上2",
                [collisionPart.LeftBreast]: "左胸上2",
            }
        },
        {
            mmdCharacter: mmdCharacter.Xiaye2,
            boneName: {
                [collisionPart.RightBreast]: "右胸上2",
                [collisionPart.LeftBreast]: "左胸上2",
            }
        },
        {
            mmdCharacter: mmdCharacter.Haku_Lady,
            boneName: {
                [collisionPart.RightBreast]: "右胸上2",
                [collisionPart.LeftBreast]: "左胸上2",
            }
        },
        {
            mmdCharacter: mmdCharacter.Meibiwusi,
            boneName: {
                [collisionPart.RightBreast]: "右胸上2",
                [collisionPart.LeftBreast]: "左胸上2",
            },
            boneAmplitude: {
                [collisionPart.RightBreast]: 50,
                [collisionPart.LeftBreast]: 50,
            }
        },
        // {
        //     mmdCharacter: mmdCharacter.Baixi_Maid,
        //     boneName: {
        //         [collisionPart.RightBreast]: "右胸上2",
        //         [collisionPart.LeftBreast]: "左胸上2",
        //     }
        // },
        // {
        //     mmdCharacter: mmdCharacter.Haku_QP,
        //     boneName: {
        //         [collisionPart.RightBreast]: "右胸上2",
        //         [collisionPart.LeftBreast]: "左胸上2",
        //     },
        // },
        {
            mmdCharacter: mmdCharacter.Changee,
            boneName: {
                [collisionPart.RightBreast]: "右胸上2",
                [collisionPart.LeftBreast]: "左胸上2",
            }
        },

        {
            mmdCharacter: mmdCharacter.Miku1,
            boneName: {
                [collisionPart.RightBreast]: "右胸１",
                [collisionPart.LeftBreast]: "左胸１",
            },
            boneAmplitude: {
                [collisionPart.RightBreast]: 8,
                [collisionPart.LeftBreast]: 8,
            }
        },

        {
            mmdCharacter: mmdCharacter.Moye,
            boneName: {
                [collisionPart.RightBreast]: "右胸",
                [collisionPart.LeftBreast]: "左胸",

                [collisionPart.TrigoneAndButt]: "下半身",
            }
        },

        {
            mmdCharacter: mmdCharacter.XiaHui,
            boneName: {
                [collisionPart.RightBreast]: "上半身2",
                [collisionPart.LeftBreast]: "上半身2",
            },
            boneAmplitude: {
                [collisionPart.RightBreast]: 2,
                [collisionPart.LeftBreast]: 2,
            }
        },
    ]
}

export let getSelectCharacterData = (name): Array<selectCharacterData> => {
    return [
        // [
        //     "../mmd-character-extend/src/asset/image/Meiko.png",
        //     mmdCharacter.Meiko,
        //     false,
        //     resourceLevel.White,
        // ],
        // [
        //     "../mmd-character-extend/src/asset/image/Baixi_Maid.png",
        //     mmdCharacter.Baixi_Maid,
        //     false,
        //     resourceLevel.White,
        // ],
        [
            `../mmd-character-extend/src/asset/image/XiaHui.png`,
            mmdCharacter.XiaHui,
            false,
            resourceLevel.Green,
        ],
        // [
        //     "../mmd-character-extend/src/asset/image/Haku_QP.png",
        //     mmdCharacter.Haku_QP,
        //     true,
        // ],
        [
            `../mmd-character-extend/src/asset/image/Nero.png`,
            mmdCharacter.Nero,
            false,
            resourceLevel.Green,
        ],
        [
            `../mmd-character-extend/src/asset/image/Xiaye1.png`,
            mmdCharacter.Xiaye1,
            false,
            resourceLevel.Green,
        ],
        [
            `../mmd-character-extend/src/asset/image/Xiaye2.png`,
            mmdCharacter.Xiaye2,
            false,
            resourceLevel.Green,
        ],
        [
            `../mmd-character-extend/src/asset/image/Haku_Lady.png`,
            mmdCharacter.Haku_Lady,
            false,
            resourceLevel.Green,
        ],
        [
            `../mmd-character-extend/src/asset/image/Changee.png`,
            mmdCharacter.Changee,
            false,
            resourceLevel.Green,
        ],
        [
            `../mmd-character-extend/src/asset/image/Meibiwusi.png`,
            mmdCharacter.Meibiwusi,
            false,
            resourceLevel.Green,
        ],
        [
            `../mmd-character-extend/src/asset/image/Miku1.png`,
            mmdCharacter.Miku1,
            false,
            resourceLevel.White,
        ],
        [
            `../mmd-character-extend/src/asset/image/Vanilla.png`,
            mmdCharacter.Vanilla,
            false,
            resourceLevel.White,
        ],
        [
            `../mmd-character-extend/src/asset/image/Moye.png`,
            mmdCharacter.Moye,
            false,
            resourceLevel.White,
        ],
    ]
}

export let getSnapshotData = (name): Array<[mmdCharacter, string]> => {
    return [
        [
            mmdCharacter.XiaHui,
            `../mmd-character-extend/src/asset/image/snapshot/XiaHui.png`,
        ],
        [
            mmdCharacter.Nero,
            `../mmd-character-extend/src/asset/image/snapshot/Nero.png`,
        ],
        [
            mmdCharacter.Xiaye1,
            `../mmd-character-extend/src/asset/image/snapshot/Xiaye1.png`,
        ],
        [
            mmdCharacter.Xiaye2,
            `../mmd-character-extend/src/asset/image/snapshot/Xiaye2.png`,
        ],
        [
            mmdCharacter.Haku_Lady,
            `../mmd-character-extend/src/asset/image/snapshot/Haku_Lady.png`,
        ],
        [
            mmdCharacter.Changee,
            `../mmd-character-extend/src/asset/image/snapshot/Changee.png`,
        ],
        [
            mmdCharacter.Meibiwusi,
            `../mmd-character-extend/src/asset/image/snapshot/Meibiwusi.png`,
        ],
        [
            mmdCharacter.Miku1,
            `../mmd-character-extend/src/asset/image/snapshot/Miku1.png`,
        ],
        [
            mmdCharacter.Vanilla,
            `../mmd-character-extend/src/asset/image/snapshot/Vanilla.png`,
        ],
        [
            mmdCharacter.Moye,
            `../mmd-character-extend/src/asset/image/snapshot/Moye.png`,
        ],
    ]
}