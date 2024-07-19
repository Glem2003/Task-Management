//style
import "./assets/style/root.css";
import "./assets/style/style.css";

//icons
import {
  TbAdjustmentsHorizontal,
  IoSearch,
} from './assets/icon/icons';

//content
import { listData } from "./content/index";

//hook
import useAppLogic from "./hook/useAppLogic";
import useActiveListId from "./hook/useActiveListId";

//components
import Btn from "./components/btn";
import TaskList from "./components/taskList";
import TaskForm from "./components/form";
import Filter from "./components/filter";
import List from "./components/list";

function App() {

  const {
    isForm,
    isEdit,
    filteredTasks,
    title,
    description,
    inputCheck,
    filterForm,
    setTitle,
    setDescription,
    setFilterForm,
    handleFormAdd,
    handleFormEdit,
    handleFormSubmit,
    handleFormSave,
    handleFormClose,
    handleFilterChange,
    handleStateChange,
    handleDelete
  } = useAppLogic();

  const { activeId, setActiveId, handleListClick } = useActiveListId()

  return (
    <div className="App">
      <aside className="aside">
        <div>
          {listData.header.map((item) => (
            <List
              key={item.id}
              {...item}
              className={activeId === item.id ? 'active' : ''}
              handleListClick={() => handleListClick(item.id)}
            >
            </List>
          ))}
        </div>

        <div style={{ marginTop: '20px' }}>
          {listData.main.map((item) => (
            <List key={item.id} {...item} />
          ))}
        </div>

        {filterForm && (
          <Filter
            inputChange={handleFilterChange}
            inputCheck={inputCheck}
          />
        )}

        <div className="aside__under">
          <Btn name="New list" span="+" />
          <TbAdjustmentsHorizontal
            style={{ fontSize: '20px', cursor: 'pointer' }}
            onClick={() => setFilterForm(!filterForm)} />
        </div>
      </aside>

      <main className="main transparent-scrollbar">
        {filteredTasks.map((data) => (
          <TaskList
            key={data.id} {...data}
            stateHandler={() => handleStateChange(data.id)}
          >
            <Btn name="Edit" onClick={() => handleFormEdit(data.id)} />
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
              <Btn name="Save" onClick={handleFormSave} />
            ) : (
              <Btn name="Submit" onClick={handleFormSubmit} />
            )}
            <Btn name="Close" onClick={handleFormClose} />
          </TaskForm>
        )}

        <Btn
          name="New item"
          span="+"
          onClick={handleFormAdd}
          className="addBtn"
        />

        <div className="main__search">
          <IoSearch />
        </div>
      </main>
    </div>
  );
}

export default App;