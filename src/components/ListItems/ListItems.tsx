import "./ListItems.scss";
import ListCard from "../ListCard/ListCard";

type ListItemProps = {
    listItems: string[];
  };
  
  const ListItems = ({ listItems }: ListItemProps) => {
    return (
      <div>
        {listItems.map((item, index) => (
          <ListCard key={index} item={item}/>
        ))}
      </div>
    );
  };
  
  export default ListItems;