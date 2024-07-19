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
                <div>
                    <label>All</label>
                    <input type="radio" name="filter" value={""} onChange={inputChange} checked={inputCheck} />
                </div>
                <div>
                    <label>Waiting</label>
                    <input type="radio" name="filter" value={1} onChange={inputChange} />
                </div>
                <div>
                    <label>Progress</label>
                    <input type="radio" name="filter" value={2} onChange={inputChange} />
                </div>
                <div>
                    <label>Completed</label>
                    <input type="radio" name="filter" value={3} onChange={inputChange} />
                </div>
            </form>
        </div>
    )
}
export default Filter;
