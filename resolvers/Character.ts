import { GraphQLError } from "graphql";
import { CharacterAPI, EspisodeAPI, LocationAPI } from "../types.ts";



export const Character = {
    origin: async(parent: CharacterAPI): Promise<LocationAPI | null> => {
        if (!parent.origin.url) {
            return null
        }

        const response = await fetch(parent.origin.url)
        if (response.status !== 200) {
            throw new GraphQLError("Fallo en la llamada")
        }

        const data: LocationAPI = await response.json()
        return data
    },

    location: async(parent: CharacterAPI): Promise<LocationAPI | null> => {
        if (!parent.location.url) {
            return null
        }

        const response = await fetch(parent.location.url)
        if (response.status !== 200) {
            throw new GraphQLError("Fallo en la llamada")
        }

        const data: LocationAPI = await response.json()
        return data
    },

    episode: async(parent: CharacterAPI): Promise<EspisodeAPI[]> => {
        const episodes = await Promise.all(
            parent.episode.map(async(e)=>{
                const response = await fetch(e)
                
                const data: EspisodeAPI = await response.json()
                return data
            })
        )
        return episodes
    }

}