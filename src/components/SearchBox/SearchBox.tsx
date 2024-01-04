import "./SearchBox.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from "react";

type SearchBoxProps = {
    searchTerm: string;
    onSearchBoxChange: (value: string) => void;
    onSearchBoxAddToList: () => void;
  };
  
  const SearchBox = ({
    searchTerm,
    onSearchBoxChange,
    onSearchBoxAddToList,
  }: SearchBoxProps) => {

    const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearchBoxChange(e.target.value);
      e.target.setCustomValidity('');
    };

    const handleAddToList = () => {
        if(!searchTerm.trim()) {
            if (inputRef) {
                inputRef.setCustomValidity("Please enter a todo");
                inputRef.reportValidity();
            }
            return;
        }

        onSearchBoxAddToList();
    }
  
    return (
      <div className="searchboxContainer">
        <input
        ref={(input) => setInputRef(input)}
          className="searchboxContainer__searchbox"
          type="text"
          placeholder="Add Your Task Here..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="searchboxContainer__button" onClick={handleAddToList}>
        <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    );
  };
  
  export default SearchBox;