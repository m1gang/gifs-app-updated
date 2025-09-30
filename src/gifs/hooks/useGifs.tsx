import { useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);


    const handleTermClicked = async (term: string) => {
        if (gifsCache[term]) {
            setGifs(gifsCache[term]);
            return;
        }


        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    }

    const handleSearch = async (query: string) => {
        const term = query.trim().toLowerCase();
        if (!term) return;

        if (previousTerms.includes(term)) return;

        setPreviousTerms([term, ...previousTerms,].slice(0, 8));
        const gifs = await getGifsByQuery(query);
        // console.log(gifs);
        setGifs(gifs);

        gifsCache[query] = gifs;
        console.log(gifsCache);

    }
    return {
        //values
        gifs,
        previousTerms,

        //methods
        handleSearch,
        handleTermClicked,
    }
}
