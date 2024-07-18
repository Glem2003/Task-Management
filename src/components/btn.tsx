//style
import "./style/btn.css";

interface BtnProps {
    name: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string
    span?: string
}

const Btn: React.FC<BtnProps> = (props) => {

    const {
        name,
        onClick,
        className,
        span
    } = props


    const btnClass = className ? `btn ${className}` : "btn";

    return (
        <button type="button" className={btnClass} onClick={onClick}>
            <span className="btn__span">{span}</span>
            {name}
        </button>
    )
}

export default Btn;