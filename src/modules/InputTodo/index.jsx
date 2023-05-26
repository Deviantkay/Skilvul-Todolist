import TextField from "../../components/TextField";
import Button from "../../components/AddButton";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../store/todosSlice";
import { PropTypes } from "prop-types";
const InputTodo = ({ id, todoUpdate, isUpdate, done }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () =>
    value != "" &&
    (dispatch(
      addTodo({
        todo: value,
      })
    ),
    setValue(""));

  const handleUpdate = () =>
    value != "" &&
    (dispatch(
      updateTodo({
        id: id,
        todo: value,
      })
    ),
    setValue(""),
    done());

  useEffect(() => {
    setValue(todoUpdate);
  }, [todoUpdate]);

  return (
    <section className="form-section">
      <TextField
        name="inputTodo"
        text="What to do"
        value={value}
        className="form-input"
        handleChange={(e) => setValue(e.target.value)
        }
      />
      <Button
        text={`${isUpdate ? "Update" : "Add"}`}
        className="form-button"
        handleClick={isUpdate ? handleUpdate : handleSubmit}
      />
    </section>
  );
};

InputTodo.propTypes = {
  id: PropTypes.number,
  todoUpdate: PropTypes.string,
  isUpdate: PropTypes.bool,
  done: PropTypes.func,
};

export default InputTodo;
