import NavBar from "./containers/NavBar/NavBar";
import './App.scss'
import ListItems from "./components/ListItems/ListItems";
import {useState} from "react";

function App() {
  const [listItems, setListItems] = useState<string[]>([]);

  const handleAddToList = (item:string) => {
    setListItems([...listItems, item]);
  };


  return (
    <>
      <div>
        <NavBar onAddToList={handleAddToList} />
        <ListItems listItems={listItems}/>
      </div>
    </>
  )
}

export default App;
