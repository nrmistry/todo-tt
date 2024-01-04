import { useState } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox'; 
import Buttons from "../../components/Buttons/Buttons";
import "./NavBar.scss";


type NavBarProps = {
    onAddToList: (item: string) => void;
    onResetList: () => void;
  };
  
  const NavBar = ({ onAddToList, onResetList }: NavBarProps) => {
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
        <div className="navbar__buttons">
        <Buttons onReset={onResetList}/>
        </div>
        <div className="navbar__searchbox">
        <SearchBox
          searchTerm={searchTerm}
          onSearchBoxChange={handleSearchBoxChange}
          onSearchBoxAddToList={handleSearchBoxAddToList}
        />
        </div>
      </nav>
    );
  };
  
  export default NavBar;