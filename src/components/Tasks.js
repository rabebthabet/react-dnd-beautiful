import React, { useEffect, useState } from "react";
import initialData from "../config/datas";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

function Tasks() {
  const [datas, setDatas] = React.useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = datas.columns[source.droppableId];
    const finish = datas.columns[destination.droppableId];

    if (start === finish) {
      //console.log("meme colonne");
      const column = datas.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...column,
        taskIds: newTaskIds,
      };
      const newState = {
        ...datas,
        columns: {
          ...datas.columns,
          [newColumn.id]: newColumn,
        },
      };
      setDatas(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };
    // useEffect(() => {
    //   settest(true);
    // }, []);
    //const useEffect(() => setCount(), []);
    const newState = {
      ...datas,
      columns: {
        ...datas.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setDatas(newState);
  };

  return (
    <div className="tasks">
      <DragDropContext onDragEnd={onDragEnd}>
        {datas.columnOrder.map((columnId) => {
          const column = datas.columns[columnId];
          const tasks = column.taskIds.map((taskId) => datas.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </div>
  );
}

export default Tasks;
