import "./ListItems.scss";

type ListItemProps = {
    listItems: string[];
  };
  
  const ListItems = ({ listItems }: ListItemProps) => {
    return (
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  
  export default ListItems;