import { CharacterAPI, LocationAPI } from "../types.ts";


export const Location = {
    residents: async(parent: LocationAPI): Promise<CharacterAPI[]> => {
        const characters = await Promise.all(
            parent.residents.map(async(e)=>{
                const response = await fetch(e)
                
                const data: CharacterAPI = await response.json()
                return data
            })
        )

        return characters
    }
}