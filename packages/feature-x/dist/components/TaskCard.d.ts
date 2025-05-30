import type { Task } from "../Types/task";
interface TaskCardProps {
    task: Task;
    onUpdate: (id: string, updates: Partial<Task>) => void;
    onDelete: (id: string) => void;
    onEdit: (task: Task) => void;
    onAddComment: (taskId: string, text: string) => void;
    onDeleteComment: (taskId: string, commentId: string) => void;
    isSelected: boolean;
    onToggleSelect: (taskId: string) => void;
}
export declare function TaskCard({ task, onUpdate, onDelete, onEdit, onAddComment, onDeleteComment, isSelected, onToggleSelect, }: TaskCardProps): import("react/jsx-runtime").JSX.Element;
export {};
