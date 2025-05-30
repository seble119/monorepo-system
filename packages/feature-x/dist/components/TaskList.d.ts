import type { Task } from "../Types/task";
interface TaskListProps {
    tasks: Task[];
    onUpdate: (id: string, updates: Partial<Task>) => void;
    onDelete: (id: string) => void;
    onEdit: (task: Task) => void;
    onAddComment: (taskId: string, text: string) => void;
    onDeleteComment: (taskId: string, commentId: string) => void;
    selectedTasks: Set<string>;
    onToggleSelect: (taskId: string) => void;
    onSelectAll: () => void;
    onClearSelection: () => void;
}
export declare function TaskList({ tasks, onUpdate, onDelete, onEdit, onAddComment, onDeleteComment, selectedTasks, onToggleSelect, onSelectAll, onClearSelection, }: TaskListProps): import("react/jsx-runtime").JSX.Element;
export {};
