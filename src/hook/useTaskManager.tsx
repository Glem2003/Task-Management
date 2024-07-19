import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface TaskListProps {
    id: string;
    title: string;
    description?: string;
    state: 1 | 2 | 3;
}

const useTaskManager = () => {
    const [tasks, setTasks] = useState<TaskListProps[]>(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    const [filteredTasks, setFilteredTasks] = useState<TaskListProps[]>(tasks);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    useEffect(() => {
        handleSearch();
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAdd = (title: string, description: string) => {
        const newTask: TaskListProps = { title, description, state: 1, id: uuidv4() };
        setTasks([...tasks, newTask]);
    };

    const handleDelete = (taskId: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    };

    const handleEdit = (taskId: string) => {
        const index = tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            setEditIndex(index);
            return tasks[index];
        }
        return null;
    };

    const handleSave = (title: string, description: string) => {
        if (editIndex !== null) {
            const updatedTasks = tasks.map((task, index) => {
                if (index === editIndex) {
                    return { ...task, title, description };
                }
                return task;
            });
            setTasks(updatedTasks);
            setEditIndex(null);
        }
    };

    const handleStateChange = (taskId: string) => {
        setTasks(prevTasks =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, state: (task.state < 3 ? task.state + 1 : 1) as 1 | 2 | 3 } : task
            )
        );
    };

    const handleSearch = (value = '') => {
        const filteredTasks = tasks.filter(task => {
            if (value === '') {
                return true;
            } else {
                return task.state === Number(value);
            }
        });
        setFilteredTasks(filteredTasks);
    };

    return {
        tasks,
        filteredTasks,
        handleAdd,
        handleDelete,
        handleEdit,
        handleSave,
        handleStateChange,
        handleSearch,
    }
}

export default useTaskManager;