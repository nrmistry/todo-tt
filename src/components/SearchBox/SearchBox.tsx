import "./SearchBox.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

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
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearchBoxChange(e.target.value);
    };
  
    return (
      <div className="searchboxContainer">
        <input
          className="searchboxContainer__searchbox"
          type="text"
          placeholder="Add Your Task Here..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="searchboxContainer__button" onClick={onSearchBoxAddToList}>
        <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    );
  };
  
  export default SearchBox;