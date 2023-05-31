import React, { useEffect } from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

function Column({ column, tasks }) {
  // const [test, setTest] = React.useState(false);
  //  console.log(test);

  // const drag = () => {
  //   console.log("hello");
  //   if (column.id === "column-2") {
  //     setTest(true);
  //   }
  // };

  return (
    <div className={"tasks__column"}>
      <h2>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provider) => (
          <div
            // onBlur={drag}
            {...provider.droppableProps}
            ref={provider.innerRef}
            // className="tasks__list"
            className={
              column.id === "column-2" ? " tasks__list2" : "tasks__list"
            }
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Column;
