import "./SearchBox.scss";

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
      <div>
        <input
          className="searchbox"
          type="text"
          placeholder="Search Name..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={onSearchBoxAddToList}>Add to List</button>
      </div>
    );
  };
  
  export default SearchBox;