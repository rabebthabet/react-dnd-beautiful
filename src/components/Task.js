import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provider) => (
        <div
          {...provider.draggableProps}
          {...provider.dragHandleProps}
          ref={provider.innerRef}
          className="task__item"
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
}

export default Task;
