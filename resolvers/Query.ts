import { CharacterAPI } from "../types.ts";
import {GraphQLError} from "graphql"

export const Query = {
    character: async(_: unknown, args: {id: string}): Promise<CharacterAPI> => {
        const response = await fetch("https://rickandmortyapi.com/api/character/" + args.id) 
        if (response.status !== 200) {
            throw new GraphQLError("Error en la llamada a API")
        }

        const data: CharacterAPI = await response.json()
        return data;
    },

    charactersByIds: async(_:unknown, args: {ids: string[]}): Promise<CharacterAPI[]> => {
        const response = await fetch("https://rickandmortyapi.com/api/character/"+ args.ids.toString())

        if (response.status !== 200) {
            throw new GraphQLError("Error en la llamada a API")
        }

        const data: CharacterAPI[] = await response.json()
        return data;
    }

}