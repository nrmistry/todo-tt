import "./SearchBox.scss";

//import {ChangeEvent} from "react";


type SearchBoxProps = {
    searchTerm: string;
}

const SearchBox = ({searchTerm} : SearchBoxProps) => {
    return (
        <input className="searchbox"
            type="text"
            placeholder="Search Name..."
            value={searchTerm}
        />
    )
}
export default SearchBox;