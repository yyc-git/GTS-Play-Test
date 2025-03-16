import { api } from "type-api/src/Type"
import { armorStrength, armorType, boneNameForLightStressing, clothCollisionData, clothHpData, collisionPart, firstPersonControlsData, mmdData, mmdMaterialFixData, resourceLevel, selectCharacterData, shoeData, shoeType } from "mmd-character-protocol/src/service/ServiceType"
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

    return originPath.replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-default/src/asset/${prefix}/`))
}

export let handleVMDPath = (mmdCharacter_: mmdCharacter, [getNewPathFunc1, getNewPathFunc2], originPath) => {
    // if (originPath.includes("vmd_scenario/")) {
    //     return originPath
    // }

    switch (mmdCharacter_) {
        case mmdCharacter.Baixi_Maid:
            // return originPath.replace(pOld, getNewPathFunc1(pNew)).replace(`${name}/`, getNewPathFunc2(`${name}/mmd-character-default/src/asset/女仆白希/`))
            // return originPath.replace(pOld, getNewPathFunc1(pNew)).replace(`resource_girl/${name}/`, getNewPathFunc2(`mmd-character-default/src/asset/女仆白希/`))
            return _replaceVMDPath([getNewPathFunc1, getNewPathFunc2], originPath, "女仆白希")
        default:
            // throw new Error("err")
            return originPath
    }
}

// export let getIdleAnimationResourcePath = (name) => `../vmd/idle.vmd`

// export let getWalkAnimationResourcePath = (name) => `../vmd/walk.vmd`

// export let getRunAnimationResourcePath = (name) => `../vmd/run.vmd`

// export let getStompAnimationResourcePath = (name) => `../vmd/stomp.vmd`


// export let getBreastPressAnimationResourcePath = (name) => `../vmd/breast_press.vmd`

// export let getCrawlMoveAnimationResourcePath = (name) => `../vmd/crawl_move.vmd`

// export let getStandToCrawlAnimationResourcePath = (name) => `../vmd/stand_to_crawl.vmd`

// export let getCrawlToStandAnimationResourcePath = (name) => `../vmd/crawl_to_stand.vmd`

// export let getKeepCrawlAnimationResourcePath = (name) => `../vmd/keep_crawl.vmd`




// export let getPickupAnimationResourcePath = (name) => `../vmd/pickup.vmd`

// export let getPickdonwAnimationResourcePath = (name) => `../vmd/pickdown.vmd`

// export let getKeepPickAnimationResourcePath = (name) => `../vmd/keep_pick.vmd`

// export let getPinchAnimationResourcePath = (name) => `../vmd/pinch.vmd`

// export let getEatAnimationResourcePath = (name) => `../vmd/eat.vmd`




// export let getCrawlHeavyStressingAnimationResourcePath = (name) => `../vmd/crawl_heavy_stressing.vmd`

// export let getCrawlHeavyStressingBreastAnimationResourcePath = (name) => `../vmd/crawl_heavy_stressing_breast.vmd`

// export let getCrawlHeavyStressingTrigoneAndButtAnimationResourcePath = (name) => `../vmd/crawl_heavy_stressing_trigoneAndButt.vmd`

// export let getCrawlDeathAnimationResourcePath = (name) => `../vmd/crawl_death.vmd`







// export let getHeavyStressingAnimationResourcePath = (name) => `../vmd/heavy_stressing.vmd`

// export let getHeavyStressingBreastAnimationResourcePath = (name) => `../vmd/heavy_stressing_breast.vmd`

// export let getHeavyStressingTrigoneAndButtAnimationResourcePath = (name) => `../vmd/heavy_stressing_trigoneAndButt.vmd`

// export let getDeathAnimationResourcePath = (name) => `../vmd/death.vmd`







export let getName = () => "city"


// export let getVMDRawData = () => {
//     return [
//         [
//             animationName.Idle,

//             getIdleAnimationResourcePath(getName())
//         ],
//         [
//             animationName.Walk,
//             getWalkAnimationResourcePath(getName())
//         ],
//         [
//             animationName.Run,
//             getRunAnimationResourcePath(getName())
//         ],
//         [
//             animationName.Stomp,
//             getStompAnimationResourcePath(getName())
//         ],


//         [
//             animationName.BreastPress,
//             getBreastPressAnimationResourcePath(getName())
//         ],
//         [
//             animationName.StandToCrawl,
//             getStandToCrawlAnimationResourcePath(getName())
//         ],
//         [
//             animationName.CrawlToStand,
//             getCrawlToStandAnimationResourcePath(getName())
//         ],
//         [
//             animationName.CrawlMove,
//             getCrawlMoveAnimationResourcePath(getName())
//         ],
//         [
//             animationName.KeepCrawl,
//             getKeepCrawlAnimationResourcePath(getName())
//         ],


//         [
//             animationName.Pickup,
//             getPickupAnimationResourcePath(getName())
//         ],
//         [
//             animationName.Pickdown,
//             getPickdonwAnimationResourcePath(getName())
//         ],
//         [
//             animationName.KeepPick,
//             getKeepPickAnimationResourcePath(getName())
//         ],
//         [
//             animationName.Pinch,
//             getPinchAnimationResourcePath(getName())
//         ],
//         [
//             animationName.Eat,
//             getEatAnimationResourcePath(getName())
//         ],





//         [
//             animationName.HeavyStressing,
//             getHeavyStressingAnimationResourcePath(getName())
//         ],
//         [
//             animationName.HeavyStressingBreast,
//             getHeavyStressingBreastAnimationResourcePath(getName())
//         ],
//         [
//             animationName.HeavyStressingTrigoneAndButt,
//             getHeavyStressingTrigoneAndButtAnimationResourcePath(getName())
//         ],
//         [
//             animationName.Death,
//             getDeathAnimationResourcePath(getName())
//         ],


//         [
//             animationName.CrawlHeavyStressing,
//             getCrawlHeavyStressingAnimationResourcePath(getName())
//         ],
//         [
//             animationName.CrawlHeavyStressingBreast,
//             getCrawlHeavyStressingBreastAnimationResourcePath(getName())
//         ],
//         [
//             animationName.CrawlHeavyStressingTrigoneAndButt,
//             getCrawlHeavyStressingTrigoneAndButtAnimationResourcePath(getName())
//         ],
//         [
//             animationName.CrawlDeath,
//             getCrawlDeathAnimationResourcePath(getName())
//         ],




//         // [
//         //     animationName.Hello,
//         //     getHelloAnimationResourcePath(getName())
//         // ],
//     ]
// }

// let _getVMDData = (mmdCharacter_) => {
//     return getVMDRawData().map(([animationName_, originPath]) => {
//         return [
//             animationName_,
//             handleVMDPath(mmdCharacter_, [path => path, path => path], originPath)
//         ]
//     })
// }

export let getBaixiMaidResourcePath = (name) => `../mmd-character-default/src/asset/女仆白希/女仆白希安全裤.pmx`

export let getMMDData = (state, getVMDDataFunc, name): Array<mmdData> => {
    return [[
        mmdCharacter.Baixi_Maid,
        // getBaixiMaidResourceId(),
        mmdCharacter.Baixi_Maid,
        [
            // `./mmd-character/女仆白希/女仆白希安全裤.pmx`,
            // `../女仆白希/女仆白希安全裤.pmx`,
            getBaixiMaidResourcePath(name),
            getVMDDataFunc(
                state,
                mmdCharacter.Baixi_Maid,
            )
        ],
        // TODO remove
        {
            heightScale: 1
        }
    ]]
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
                mmdCharacter: mmdCharacter.Baixi_Maid,
                noBlendingMaterialNamesInVivo: [
                    // "All",
                    "头发",
                    "Skin"
                ]
            },
        ])
    }

    return result
}

export let getClothCollisionData = (_): clothCollisionData<collisionPart> => {
    return []
}


// export let getClothHpData = (state: state, usedGirl): clothHpData => {
export let getClothHpData = (fullHp, body, _): clothHpData => {
    // let fullHp = getFullHpByUsedGirl(state, usedGirl)
    return [
        {
            mmdCharacter: mmdCharacter.Baixi_Maid,
            data: [{
                // damagePart: getBody(),
                damagePart: body,
                hp: fullHp,
                armorType: armorType.Light,
                armorStrength: armorStrength.Low,
            },
            ]
        },
    ]
}



export let getFirstPersonControlsData = (): firstPersonControlsData => {
    return [
        {
            mmdCharacter: mmdCharacter.Baixi_Maid,
            data: {
                // getCameraPositionForFirstPersonControlsFunc: (girl: Object3D) => {
                getCameraPositionForFirstPersonControlsFunc: (api: api, girl: gameObject) => {
                    // return girl.getObjectByName("第一視角").getWorldPosition(new Vector3())
                    return api.getWorldPosition(api.getGameObjectByName(girl, "第一視角"))
                },
                hideMaterialNames: [
                    "脸",
                    "牙齿",
                    "眼睛",
                    "表情"
                ]
            }

        },
    ]
}

export let getShoeData = (): shoeData => {
    return [
        {
            mmdCharacter: mmdCharacter.Baixi_Maid,
            data: {
                shoeType: shoeType.Common,
            }
        },
    ]
}


export let getBoneNameForLightStressing = (): boneNameForLightStressing => {
    return [
        {
            mmdCharacter: mmdCharacter.Baixi_Maid,
            boneName: {
                [collisionPart.RightBreast]: "右胸上2",
                [collisionPart.LeftBreast]: "左胸上2",
            }
        },
    ]
}

export let getSelectCharacterData = (name): Array<selectCharacterData> => {
    return [[
        // "./mmd-character/女仆白希/mmd-character-default/src/asset/image/Baixi_Maid.png",
        // `../女仆白希/mmd-character-default/src/asset/image/Baixi_Maid.png`,
        `../mmd-character-default/src/asset/image/Baixi_Maid.png`,
        mmdCharacter.Baixi_Maid,
        false,
        resourceLevel.White,
    ]]
}

export let getSnapshotData = (name): Array<[mmdCharacter, string]> => {
    // return "./mmd-character/女仆白希/mmd-character-default/src/asset/image/snapshot/Baixi_Maid.png"
    // return [[mmdCharacter.Baixi_Maid, `../女仆白希/mmd-character-default/src/asset/image/snapshot/Baixi_Maid.png`]]
    return [[mmdCharacter.Baixi_Maid, `../mmd-character-default/src/asset/image/snapshot/Baixi_Maid.png`]]
}