
import PreviousSearches from './gifs/components/PreviousSearches'
import SearchBar from './shared/components/SearchBar'
// import { mockGifs } from './mock-data/gifs-mock'
import { CustomHeader } from './shared/components/CustomHeader'
import GifList from './gifs/components/GifList'
import { useGifs } from './gifs/hooks/useGifs'

export const GifsApp = () => {

    const { gifs, handleTermClicked, handleSearch, previousTerms } = useGifs();

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
