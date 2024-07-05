import { GraphQLError } from "graphql";
import { CharacterAPI, LocationAPI } from "../types.ts";


export const Location = {
    residents: async(parent: LocationAPI): Promise<CharacterAPI[]> => {
        const characters = await Promise.all(
            parent.residents.map(async(e)=>{
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