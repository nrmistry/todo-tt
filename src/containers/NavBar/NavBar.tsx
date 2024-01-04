import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";

type NavBarProps = {
    searchTerm: string;
  };
  
  const NavBar = ({ searchTerm }: NavBarProps) => {

    return (
      <nav className="navbar">
        <h1 className="navbar__title">My Todos</h1>
        <SearchBox searchTerm={searchTerm}/>
    
      </nav>
    );
  };
  
  export default NavBar;