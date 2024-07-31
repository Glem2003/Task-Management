//style
import "./style/filter.css";

interface FilterProps {
    inputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    inputCheck?: boolean
}

const Filter: React.FC<FilterProps> = (props) => {

    const {
        inputChange,
        inputCheck
    } = props

    return (
        <div className="filter">
            <form className="filter__form">
                <div className="filter__item">
                    <input type="checkbox" name="filter" value={1} onChange={inputChange} />
                    <label>Waiting</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" name="filter" value={2} onChange={inputChange} />
                    <label>Progress</label>
                </div>
                <div className="filter__item">
                    <input type="checkbox" name="filter" value={3} onChange={inputChange} />
                    <label>Completed</label>
                </div>
            </form>
        </div>
    )
}
export default Filter;
