//style
import "./style/taskList.css";

export interface TaskListProps {
    title: string,
    description?: string,
    id: string,
    state: 1 | 2 | 3,
    stateHandler?: () => void
    children?: React.ReactNode
}

const TaskList: React.FC<TaskListProps> = (props) => {

    const {
        title,
        description,
        state,
        stateHandler,
        children
    } = props

    let stateClass = "";
    let stateText = "";

    switch (state) {
        case 1:
            stateClass = "state-waiting";
            stateText = "Waiting";
            break;
        case 2:
            stateClass = "state-in-progress";
            stateText = "Progress";
            break;
        case 3:
            stateClass = "state-completed";
            stateText = "Completed";
            break;
    }

    return (
        <div className="taskList">
            <h4 className="taskList__title">{title}</h4>
            <div className="taskList__description">{description}</div>
            <h5 className={`taskList__state ${stateClass}`} onClick={stateHandler}>{stateText}</h5>
            {children}
        </div>
    );
}

export default TaskList