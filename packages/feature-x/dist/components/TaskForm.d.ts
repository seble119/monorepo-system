import type { CreateTaskData } from "../types";
interface TaskFormProps {
    onSubmit: (data: CreateTaskData) => void;
    onCancel: () => void;
}
export declare function TaskForm({ onSubmit, onCancel }: TaskFormProps): import("react/jsx-runtime").JSX.Element;
export {};
