//style
import "./css/form.css";

interface TaskFormProps {
    title: string,
    description: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setDescription: React.Dispatch<React.SetStateAction<string>>,
    titleChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    descriptionChangeHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
    children?: React.ReactNode
}

const TaskForm: React.FC<TaskFormProps> = (props) => {

    const {
        title,
        description,
        titleChangeHandler,
        descriptionChangeHandler,
        children
    } = props

    return (
        <form className="taskForm">
            <label className="taskForm__label">title</label>
            <input
                value={title}
                type="text"
                name="title"
                onChange={titleChangeHandler}
                className="taskForm__input"
            />
            <label className="taskForm__label">description</label>
            <textarea
                className="taskForm__description"
                name="description"
                value={description}
                onChange={descriptionChangeHandler}
            />
            {children}
        </form>
    )
}

export default TaskForm