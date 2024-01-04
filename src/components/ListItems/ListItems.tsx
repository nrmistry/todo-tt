import "./ListItems.scss";
import ListCard from "../ListCard/ListCard";

type ListItemProps = {
    listItems: string[];
    onDelete: (index: number) => void;
  };
  
  const ListItems = ({ listItems, onDelete }: ListItemProps) => {
    return (
      <div className="listitems">
        {listItems.map((item, index) => (
          <ListCard key={index} item={item} onDelete={()=> onDelete(index)} index={index}/>
        ))}
      </div>
    );
  };
  
  export default ListItems;