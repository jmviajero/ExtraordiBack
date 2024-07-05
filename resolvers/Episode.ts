import { CharacterAPI, EspisodeAPI } from "../types.ts";

export const Episode = {
    characters: async(parent: EspisodeAPI): Promise<CharacterAPI[]> => {
        const characters = await Promise.all(
            parent.characters.map(async(e)=>{
                const response = await fetch(e)
                
                const data: CharacterAPI = await response.json()
                return data
            })
        )

        return characters
    }
}