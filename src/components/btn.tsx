//style
import "./css/btn.css";

interface BtnProps {
    name: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Btn: React.FC<BtnProps> = (props) => {

    const {
        name,
        onClick
    } = props

    return (
        <button type="button" className="btn" onClick={onClick}>{name}</button>
    )
}

export default Btn;