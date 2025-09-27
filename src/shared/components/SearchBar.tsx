import { useState, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;
}

const SearchBar = ({ placeholder = 'buscar', onQuery }: Props) => {

    // const [query, setQuery] = useState('');

    // const handleSearch = () => {
    //     onQuery(query);
    //     setQuery('');
    // }

    // const handleKeyDwon = (event: KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === 'Enter') {
    //         handleSearch();
    //     }
    // }

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}

                onKeyDown={handleKeyDwon}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}

export default SearchBar
