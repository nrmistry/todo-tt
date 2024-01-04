import "./Buttons.scss";

type ButtonsProps = {
    onReset: () => void;
}

const Buttons = ({onReset}: ButtonsProps) => {
    return (
        <button className="button" onClick={onReset}>
            Reset
        </button>
    )
}

export default Buttons;