import { useState } from "react";
import useTaskManager from "./useTaskManager";
import useTakeFormData from "./useTakeFormData";
import useFilterState from "./useFilterState";

const useAppLogic = () => {

    const [isForm, setIsForm] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [inputCheck, setInputCheck] = useState<boolean>(true);
    const [filterForm, setFilterForm] = useState<boolean>(false);
    const { tasks, filteredTasks, handleAdd, handleDelete, handleEdit, handleSave, handleStateChange, handleSearch } = useTaskManager();
    const { title, description, setTitle, setDescription } = useTakeFormData();
    const { value, setValue } = useFilterState();

    const handleFormAdd = () => {
        setIsForm(true);
        setIsEdit(false);
        setTitle('');
        setDescription('');
    }

    const handleFormEdit = (taskId: string) => {
        const taskToEdit = tasks.find(task => task.id === taskId);
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description || '');
            handleEdit(taskId);
            setIsForm(true);
            setIsEdit(true);
        } else {
            alert('Task not found');
        }
    }

    const handleFormSubmit = () => {
        if (title.trim() === '') {
            alert('Please enter a task name');
            return;
        }
        handleAdd(title, description);
        setIsForm(false);
        setTitle('');
        setDescription('');
    };

    const handleFormSave = () => {
        if (title === '') {
            alert('Please do not leave the task name blank.');
            return;
        } else {
            handleSave(title, description);
            setIsForm(false);
            setTitle('');
            setDescription('');
        }
    }

    const handleFormClose = () => {
        setIsForm(false);
        setTitle('');
        setDescription('');
    }

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setInputCheck(event.target.value === "");
        handleSearch(event.target.value);
    }

    return {
        isForm, isEdit, tasks, filteredTasks, title, description, inputCheck, filterForm,
        setIsForm, setIsEdit, setTitle, setDescription, setInputCheck, setFilterForm, handleFormAdd,
        handleFormEdit, handleFormSubmit, handleFormSave, handleFormClose, handleFilterChange,
        handleStateChange, handleDelete
    }

}

export default useAppLogic