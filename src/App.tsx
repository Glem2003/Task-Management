import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import useTakeFormData from "./hook/useTakeFormData";
import useFilterState from "./hook/useFilterState";
import Btn from "./components/btn";
import TaskList, { TaskListProps } from "./components/taskList";
import TaskForm from "./components/form";
import Filter from "./components/filter";
import "./style/root.css";
import "./style/style.css";
import List from "./components/list";
import { text } from "stream/consumers";

//icons
import { MdInbox } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

function App() {

  const [isForm, setIsForm] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskListProps[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [filteredTasks, setFilteredTasks] = useState<TaskListProps[]>(tasks);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const { title, description, setTitle, setDescription } = useTakeFormData();
  const { value, setValue } = useFilterState();
  const [inputCheck, setInputCheck] = useState<boolean>(true);
  const [filterForm, setFilterForm] = useState<boolean>(false);

  useEffect(() => {
    handleSearch();
    // tasks save in localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    setIsForm(true);
    setIsEdit(false);
    setTitle('');
    setDescription('');
  }

  const handleDelete = (taskId: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleSubmit = () => {
    if (title.trim() === '') {
      alert('Please enter a task name');
      return;
    }

    const newTask: TaskListProps = { title, description, state: 1, id: uuidv4() };
    setTasks([...tasks, newTask]);
    setIsForm(false);
    setTitle('');
    setDescription('');
  };

  const handleEdit = (taskId: string) => {
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
      setIsForm(true);
      setIsEdit(true);
      setEditIndex(index);
      setTitle(tasks[index].title);
      setDescription(tasks[index].description ?? '');
    }
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedTasks = tasks.map((task, index) => {
        if (index === editIndex) {
          return { ...task, title, description };
        }
        return task;
      });
      if (title === '') {
        alert('Please do not leave the task name blank.');
        return;
      } else {
        setTasks(updatedTasks);
        setIsForm(false);
        setTitle('');
        setDescription('');
        setEditIndex(null);
      }
    }
  }

  const handleClose = () => {
    setIsForm(false);
    setTitle('');
    setDescription('');
  }

  const handleStateChange = (taskId: string) => {
    setTasks(prevTasks =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, state: (task.state < 3 ? task.state + 1 : 1) as 1 | 2 | 3 } : task
      )
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setInputCheck(event.target.value === "");
  }

  const handleSearch = () => {
    const filteredTasks = tasks.filter(task => {
      if (value === '') {
        return true; // if no value is selected, return all tasks
      } else {
        return task.state === Number(value); // filter tasks based on the selected value
      }
    });
    setFilteredTasks(filteredTasks);
  };

  const listData = [
    {
      header: [
        {
          id: 'inbox',
          text: 'Inbox',
          images: (<MdInbox style={{ color: '#0098fd' }} />)
        },
        {
          id: 'today',
          text: 'Today',
          images: (<FaStar style={{ color: '#ffe500' }} />)
        },
        {
          id: 'coming-up',
          text: 'Coming Up',
          images: (<FaRegCalendar style={{ color: '#e53c51' }} />)
        }
      ]
    }
  ]

  return (
    <div className="App">

      <aside className="aside">

        {listData && listData.map((item) => (
          item.header.map((lists) => (
            <List key={lists.id} {...lists}>
            </List>
          ))
        ))}

        {filterForm && (
          <Filter
            inputChange={handleChange}
            SearchBtnClick={handleSearch}
            inputCheck={inputCheck}
          />
        )}

        <div className="aside__under">
          <Btn name="New list" span="+" />
          <TbAdjustmentsHorizontal
            style={{ fontSize: '20px', cursor: 'pointer' }}
            onClick={() => setFilterForm(!filterForm)}/>
        </div>

      </aside>

      <main className="main">

        {filteredTasks.map((data) => (
          <TaskList
            key={data.id} {...data}
            stateHandler={() => handleStateChange(data.id)}
          >
            <Btn name="Edit" onClick={() => handleEdit(data.id)} />
            <Btn name="Delete" onClick={() => handleDelete(data.id)} />
          </TaskList>
        ))}

        {isForm && (
          <TaskForm
            title={title}
            description={description}
            setTitle={setTitle}
            setDescription={setDescription}
            titleChangeHandler={(e) => setTitle(e.target.value)}
            descriptionChangeHandler={(e) => setDescription(e.target.value)}
          >
            {isEdit ? (
              <Btn name="Save" onClick={handleSave} />
            ) : (
              <Btn name="Submit" onClick={handleSubmit} />
            )}
            <Btn name="Close" onClick={handleClose} />
          </TaskForm>
        )}

        <Btn
          name="New item"
          span="+"
          onClick={handleAdd}
          className="addBtn"
        />

      </main>
    </div>
  );
}

export default App;
