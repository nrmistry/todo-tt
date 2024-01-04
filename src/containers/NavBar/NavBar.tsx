import { useState } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox'; 

type NavBarProps = {
    onAddToList: (item: string) => void;
  };
  
  const NavBar = ({ onAddToList }: NavBarProps) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchBoxChange = (value: string) => {
      setSearchTerm(value);
    };
  
    const handleSearchBoxAddToList = () => {
      if (searchTerm.trim() !== '') {
        onAddToList(searchTerm);
        setSearchTerm('');
      }
    };
  
    return (
      <nav className="navbar">
        <h1 className="navbar__title">My Todos</h1>
        <SearchBox
          searchTerm={searchTerm}
          onSearchBoxChange={handleSearchBoxChange}
          onSearchBoxAddToList={handleSearchBoxAddToList}
        />
      </nav>
    );
  };
  
  export default NavBar;