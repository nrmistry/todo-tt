import NavBar from "./containers/NavBar/NavBar";
import './App.scss'
import List from "./components/List/List";
import {useState} from "react";

function App() {
  const [listItems, setListItems] = useState<string[]>([]);

  const handleAddToList = (item:string) => {
    setListItems([...listItems, item]);
  };

  const handleDeleteFromList = (index: number) => {
    setListItems((prevListItems) => {
      const updatedList = [...prevListItems.slice(0, index), ...prevListItems.slice(index + 1)];
      return updatedList;
    });
  };

  const handleResetList = () => {
    setListItems([]);
  }


  return (
    <>
      <div>
        <NavBar onAddToList={handleAddToList} onResetList={handleResetList} />
        <List listItems={listItems} onDelete={handleDeleteFromList}/>
      </div>
    </>
  )
}

export default App;
