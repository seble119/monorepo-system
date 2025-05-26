import type { Task, TaskStatus } from "../types";
interface TaskListProps {
    tasks: Task[];
    onUpdateTask: (id: string, data: {
        status: TaskStatus;
    }) => void;
    onDeleteTask: (id: string) => void;
}
export declare function TaskList({ tasks, onUpdateTask, onDeleteTask }: TaskListProps): import("react/jsx-runtime").JSX.Element;
export {};
