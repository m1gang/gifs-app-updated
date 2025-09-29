
import PreviousSearches from './gifs/components/PreviousSearches'
import SearchBar from './shared/components/SearchBar'
// import { mockGifs } from './mock-data/gifs-mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { useState } from 'react'
import GifList from './gifs/components/GifList'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action'
import type { Gif } from './gifs/interfaces/gif.interface'

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const handleTermClicked = (term: string) => {
        console.log({ term });
    }

    const handleSearch = async (query: string) => {
        const term = query.trim().toLowerCase();
        if (!term) return;

        if (previousTerms.includes(term)) return;

        setPreviousTerms([term, ...previousTerms,].slice(0, 8));
        const gifs = await getGifsByQuery(query);
        // console.log(gifs);
        setGifs(gifs);

    }

    return (
        <>
            {/* header */}
            <CustomHeader title='Buscador de GIFS' description='Descubre y comparte el gif' />

            {/* search */}
            <SearchBar
                placeholder='Buscar gifs'
                onQuery={handleSearch}
            />

            {/* búsquedas previas */}
            <PreviousSearches searches={previousTerms} onLabelClick={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={gifs} />
        </>
    )
}
