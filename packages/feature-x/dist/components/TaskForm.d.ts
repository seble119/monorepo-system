import type { Task } from "../Types/task";
interface TaskFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (task: Omit<Task, "id" | "createdAt" | "updatedAt" | "comments">) => void;
    onUpdate?: (id: string, updates: Partial<Task>) => void;
    editingTask?: Task | null;
    categories: string[];
}
export declare function TaskForm({ isOpen, onClose, onSubmit, onUpdate, editingTask, categories }: TaskFormProps): import("react/jsx-runtime").JSX.Element;
export {};
