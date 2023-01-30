import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { groupsGetAll } from "./groupsGetAll";


export async function  groupCreate( newGroup: string ){

    try{
        const storedGroups = await groupsGetAll();

        const groupAlreadyExists = storedGroups.includes(newGroup)

        if(groupAlreadyExists){
            throw new AppError('Ops... It seems that there is already a class with that name.');
        }

        const storage = JSON.stringify([...storedGroups, newGroup])
        await AsyncStorage.setItem(GROUP_COLLECTION, storage)


    }
    catch(error){
        throw error;
    }

}