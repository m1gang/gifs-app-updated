
import PreviousSearches from './gifs/components/PreviousSearches'
import SearchBar from './shared/components/SearchBar'
import { mockGifs } from './mock-data/gifs-mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { useState } from 'react'
import GifList from './gifs/components/GifList'

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['goku']);

    const handleTermClicked = (term: string) => {
        console.log({ term });
    }

    const handleSearch = (query: string) => {
        const term = query.trim().toLowerCase();
        if (!term) return;

        if (previousTerms.includes(term)) return;

        setPreviousTerms([term, ...previousTerms,].slice(0, 8));

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
            <GifList gifs={mockGifs} />
        </>
    )
}
