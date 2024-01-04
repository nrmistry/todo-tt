import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "./ListCard.scss";

type ListCardProps = {
  item: string;
  onDelete: () => void;
  index: number;
};

const ListCard = ({ item, onDelete, index }: ListCardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log('checkbox clicked for index:', index, 'isChecked:', !isChecked);
  };

  return (
    <div className={`list-card ${isChecked ? 'list-card--completed' : ''}`}>
        <input
            className="list-card__checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
        />
        <p className="list-card__text">{item}</p>
        <button className="list-card__delete-button" onClick={onDelete}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    
    </div>
  );
};

export default ListCard;