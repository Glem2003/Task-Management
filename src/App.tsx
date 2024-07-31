//style
import "./assets/style/root.css";
import "./assets/style/style.css";

//icons
import {
  TbAdjustmentsHorizontal,
  IoSearch,
  FaRegPenToSquare,
  FaTrash,
  IoMdCloseCircle,
  FaSave,
  MdAddCircle
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

const App = () => {

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

  const { activeId, handleListClick, handleListOpen, openListId } = useActiveListId()

  return (
    <div className="App">
      <aside className="aside transparent-scrollbar">

        <div className="aside__upper">
          <div>
            {listData.header.map((item) => (
              <List
                key={item.id}
                {...item}
                className={activeId === item.id ? 'active' : ''}
                handleListClick={() => handleListClick(item.id)}
              />
            ))}
          </div>

          <div style={{ marginTop: '20px' }}>
            {listData.main.map((item) => (
              <List
                key={item.id}
                {...item}
                elementClass={openListId.includes(item.id) ? 'active' : ''}
                childListClass={openListId.includes(item.id) ? 'open' : ''}
                handleListClick={() => handleListOpen(item.id)}
              />
            ))}
          </div>

          {filterForm && (
            <Filter
              inputChange={handleFilterChange}
              inputCheck={inputCheck}
            />
          )}

        </div>

        <div className="aside__under">
          <Btn name="New list" span="+" />
          <TbAdjustmentsHorizontal
            style={{ fontSize: '20px', cursor: 'pointer' }}
            onClick={() => setFilterForm(!filterForm)} />
        </div>
      </aside>

      <main className="main transparent-scrollbar">

        {listData.header
          .filter((item) => item.id === activeId)
          .map((item) => (
            <div className="main__header">
              <span className="main__header--icon">{item.images}</span>
              <h3 key={item.id}>{item.text}</h3>
            </div>
          ))
        }

        {filteredTasks.map((data) => (
          <TaskList
            key={data.id} {...data}
            stateHandler={() => handleStateChange(data.id)}
          >
            <div className="main__taskListBtnItem">
              <Btn span={<FaRegPenToSquare />} onClick={() => handleFormEdit(data.id)} />
              <Btn span={<FaTrash />} onClick={() => handleDelete(data.id)} />
            </div>
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
            <div className="form__BtnItem">
              {isEdit ? (
                <Btn span={<FaSave />} onClick={handleFormSave} />
              ) : (
                <Btn span={<MdAddCircle />} onClick={handleFormSubmit} />
              )}
              <Btn span={<IoMdCloseCircle />} onClick={handleFormClose} />
            </div>
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