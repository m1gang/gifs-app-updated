import axios from 'axios';
import type { GiphyResponse } from '../interfaces/giphy.response';
import type { Gif } from '../interfaces/gif.interface';


export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    const response = await axios.get<GiphyResponse>(`https://api.giphy.com/v1/gifs/search`, {
        params: {
            q: query,
            limit: 10,
            lang: 'en',
            api_key: 'NQGtfUVMYeV0Jcg0R0HmeKRO4hOVSist',
        }
    }
    );

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height)
    }))

}



// https://api.giphy.com/v1/gifs/search?api_key=NQGtfUVMYeV0Jcg0R0HmeKRO4hOVSist&q=${query}&limit=10&lang=en