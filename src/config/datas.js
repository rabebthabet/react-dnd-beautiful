const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Faire mon Sport" },
    "task-2": { id: "task-2", content: "Regarder le dernier film de burton" },
    "task-3": { id: "task-3", content: "Charger mon téléphone" },
    "task-4": { id: "task-4", content: "Préparer à manger" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Tâches à faire",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "Tâches en cours",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Tâches terminée",
      taskIds: [],
    },
  },
  // Pour mieux organiser nos futures colonnes
  columnOrder: ["column-1", "column-2"],
};

export default initialData;
