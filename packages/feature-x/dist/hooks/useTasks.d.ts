import type { Task, CreateTaskData, UpdateTaskData } from "../types";
export declare function useTasks(): {
    tasks: Task[];
    createTask: (data: CreateTaskData) => Task;
    updateTask: (id: string, data: UpdateTaskData) => void;
    deleteTask: (id: string) => void;
    getTasksByStatus: (status: Task["status"]) => Task[];
};
