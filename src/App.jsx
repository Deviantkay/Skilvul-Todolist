import MainLayout from "./layouts/MainLayout";
import ContentLayout from "./layouts/ContentLayout";
import InputTodo from "./modules/InputTodo";
import ListTodo from "./modules/ListTodo";
import { useState } from "react";

const App = () => {
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const getTodo = (id, todo) => {
    setId(id);
    setTodo(todo);
    setIsUpdate(true);
  };

  const updateDone = () => setIsUpdate(false);

  return (
    <MainLayout>
      <ContentLayout>
        <h1 className="title">
          To do List
        </h1>
        <section className="section">
          <InputTodo
            id={id}
            todoUpdate={todo}
            isUpdate={isUpdate}
            done={updateDone}
          />

          <ListTodo getTodo={getTodo} />
        </section>
      </ContentLayout>
    </MainLayout>
  );
};

export default App;
