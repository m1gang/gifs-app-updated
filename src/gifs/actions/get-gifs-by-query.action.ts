import type { GiphyResponse } from '../interfaces/giphy.response';
import type { Gif } from '../interfaces/gif.interface';
import { giphyApi } from '../api/giphy.api';


export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
    if (query.trim().length === 0) {
        return [];
    }

    try {
        const response = await giphyApi<GiphyResponse>('/search', {
            params: {
                q: query,
                limit: 10,
                // lang: 'en',
                // api_key: import.meta.env.VITE_GIPHY_API_KEY,
                // api_key: 'NQGtfUVMYeV0Jcg0R0HmeKRO4hOVSist',
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

    } catch (error) {
        console.error(error);
        return [];
    }

}



// https://api.giphy.com/v1/gifs/search?api_key=NQGtfUVMYeV0Jcg0R0HmeKRO4hOVSist&q=${query}&limit=10&lang=en