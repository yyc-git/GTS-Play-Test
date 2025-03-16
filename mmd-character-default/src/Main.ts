import { getBlockService as getBlockServiceBlockManager, createBlockState as createBlockStateBlockManager, getBlockInfo as getBlockInfoBlockManager } from "block/src/BlockManagerType"
import { service as mmdCharacterService } from "mmd-character-protocol/src/service/ServiceType"
import { state as mmdCharacterState } from "mmd-character-protocol/src/state/StateType"
import { getBoneNameForLightStressing, getClothCollisionData, getClothHpData, getFirstPersonControlsData, getMMDData, getMMDMaterialFixData, getSelectCharacterData, getShoeData, getSnapshotData, handleVMDPath } from "./json/MMDData"
import { getData } from "./json/CollisionShapeData"
import { mmdCharacter } from "type-default/src/Type"
import { api } from "type-api/src/Type"

export let getBlockService: getBlockServiceBlockManager<
    mmdCharacterService
> = (api) => {
    return {
        handleVMDPath: handleVMDPath,

        getMMDData: getMMDData,
        getMMDMaterialFixData: getMMDMaterialFixData,
        getClothCollisionData: getClothCollisionData,
        getClothHpData: getClothHpData,
        getFirstPersonControlsData: getFirstPersonControlsData,
        getShoeData: getShoeData,
        getBoneNameForLightStressing: getBoneNameForLightStressing,
        getSelectCharacterData: getSelectCharacterData,
        getSnapshotData: getSnapshotData,

        getCollisionShapeData: getData,

        // isEnablePhysics: (mmdCharacter) => false,
    }
}

export let createBlockState: createBlockStateBlockManager<
    mmdCharacterState
> = () => {
    return null
}

export let getBlockInfo: getBlockInfoBlockManager = (api: api) => {
    if (api.internation.isChinese()) {
        return {
            protocolName: "mmd-character-protocol",
            blockName: "mmd-character-default",
            /*! title should be unique
            * 
            */
            title: "MMD人物->白希",
            author: "官方",
            category: "MMD人物",
            version: "0.0.1",
        }
    }

    return {
        protocolName: "mmd-character-protocol",
        blockName: "mmd-character-default",
        /*! title should be unique
        * 
        */
        title: "MMD Character->BaiXi",
        author: "Author",
        category: "MMD Character",
        version: "0.0.1",
    }
}