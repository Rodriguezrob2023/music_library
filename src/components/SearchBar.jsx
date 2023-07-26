import { useState } from "react";

export default function SearchBar(props) {
    // let [searchTerm, setSearchTerm] = useState('');

    return (
        <form> 
            <input
                type="text"
                placeholder="Search for a song, album, or artist"
                onChange={(e) => props.handleSearch(e, e.target.value)}
            />
            <button type="submit">
                Search
            </button>
        </form>
    );
}