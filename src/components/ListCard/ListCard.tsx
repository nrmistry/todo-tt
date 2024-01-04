import { useState } from 'react';
import "./ListCard.scss";

type ListCardProps = {
  item: string;
};

const ListCard = ({ item }: ListCardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
    </div>
  );
};

export default ListCard;