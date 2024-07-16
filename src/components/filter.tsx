//style
import "./css/filter.css";

//component
import Btn from "../components/btn";

interface FilterProps {
    inputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    SearchBtnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    inputCheck?: boolean
}

const Filter: React.FC<FilterProps> = (props) => {

    const {
        inputChange,
        SearchBtnClick,
        inputCheck
    } = props

    return (
        <div className="filter">
            <h6>Filter control</h6>
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
                <Btn name="Search" onClick={SearchBtnClick} />
            </form>
        </div>
    )
}
export default Filter;
