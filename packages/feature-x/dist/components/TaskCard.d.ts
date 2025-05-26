import type { Task, TaskStatus } from "../types";
interface TaskCardProps {
    task: Task;
    onUpdateTask: (id: string, data: {
        status: TaskStatus;
    }) => void;
    onDeleteTask: (id: string) => void;
}
export declare function TaskCard({ task, onUpdateTask, onDeleteTask }: TaskCardProps): import("react/jsx-runtime").JSX.Element;
export {};
