import React from "react";
import Button from "../../components/filterButton";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../store/todosSlice";

const FilterTodo = () => {
  const filterBy = useSelector((state) => state.todos.filterBy);
  const dispatch = useDispatch();
  const selectFilter = [
    {
      id: 1,
      filter: "ALL",
    },
    {
      id: 2,
      filter: "ACTIVE",
    },
    {
      id: 3,
      filter: "COMPLETED",
    },
  ];

  const handleClick = (id, filter) => {
    selectFilter.forEach((el) =>
      el.id === id ? (el.isSelected = true) : (el.isSelected = false)
    );
    dispatch(
      updateFilter({
        filterBy: filter,
      })
    );
  };

  return (
    <section className="filter-container">
      {selectFilter.map((el, i) => (
        <Button
          key={i}
          text={el.filter}
          className={`filter-button ${
            el.filter === filterBy ? "selected" : ""
          }`}
          handleClick={() => {
            handleClick(el.id, el.filter);
          }}
        />
      ))}
    </section>
  );
};

export default FilterTodo;
