import { GraphQLError } from "graphql";
import { CharacterAPI, EspisodeAPI } from "../types.ts";

export const Episode = {
    characters: async(parent: EspisodeAPI): Promise<CharacterAPI[]> => {
        const characters = await Promise.all(
            parent.characters.map(async(e)=>{
                const response = await fetch(e)
                if (response.status !== 200) {
                    throw new GraphQLError("Error en la llamada a API")
                }
                const data: CharacterAPI = await response.json()
                return data
            })
        )

        return characters
    }
}