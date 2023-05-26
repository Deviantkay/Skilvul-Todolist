import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Checkbox from "../../components/Checkbox";
import FilterTodo from "../FilterTodo";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../store/todosSlice";
import PencilFillIcon from "remixicon-react/PencilFillIcon";
import DeleteBinFillIcon from "remixicon-react/DeleteBinFillIcon";
import Modal from 'react-modal';

const ListTodo = ({ getTodo }) => {
  const todos = useSelector((state) => state.todos.todos);
  const filterBy = useSelector((state) => state.todos.filterBy);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoId, setTodoId] = useState(null);

  useEffect(() => {
    Modal.setAppElement("#root"); // Set the appElement before rendering the component
  }, []);

  const handleCheckbox = (id) => {
    dispatch(completeTodo({ id }));
  };

  const handleDelete = (id) => {
    setTodoId(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteTodo({ id: todoId }));
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  const handleGetData = (id, todo) => {
    getTodo(id, todo);
  };

  const filteredTodo = () => {
    if (filterBy === "COMPLETED") {
      return todos.filter((todo) => todo.completed);
    }
    if (filterBy === "ACTIVE") {
      return todos.filter((todo) => !todo.completed);
    }
    return todos;
  };

  return (
    <section className="list-todo">
      <FilterTodo />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={cancelDelete}
        contentLabel="Confirm Delete"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2 className="modal-title">Confirm Delete</h2>
          <p className="modal-message">Are you sure you want to delete this item?</p>
          <div className="modalbuttons">
            <button className="modal-button" onClick={confirmDelete}>Delete</button>
            <button className="modal-button" onClick={cancelDelete}>Cancel</button>
          </div>
        </div>
      </Modal>

      <section className="list-todo-items">
        {filteredTodo().map((el, i) => (
          <section key={i} className="list-todo-item">
            <section className="list-todo-item-content">
              <Checkbox
                handleChange={() => handleCheckbox(el.id)}
                value={el.todo}
                isChecked={el.completed}
              />
              <h1
                className={`todo-text ${el.completed ? "completed" : ""}`}
              >
                {el.todo}
              </h1>
            </section>
            <section className="list-todo-item-icons">
              {!el.completed && (
                <PencilFillIcon
                  onClick={() => handleGetData(el.id, el.todo)}
                  className="todo-icon"
                />
              )}
              <DeleteBinFillIcon
                onClick={() => handleDelete(el.id)}
                className="todo-icon-delete"
              />
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

ListTodo.propTypes = {
  getTodo: PropTypes.func,
};

export default ListTodo;
