import ListCard from "../ListCard/ListCard";
import "./List.scss";

type ListProps = {
    listItems: string [];
    onDelete: (index: number) => void;
};

const List = ({listItems, onDelete}: ListProps) => {
    return (
        <div>
            {listItems.length === 0 ? (
                <p className="list-empty-message">
                    Nothing to see here yet... add a task in the field above!
                </p>
            ) : (
                listItems.map((item, index) => (
                    <ListCard key={index} item={item} onDelete={() => onDelete(index)} index={index} />
                ))
            )}
        </div>
    );
};

export default List;