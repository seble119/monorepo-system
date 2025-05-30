import type { TaskFilterOptions as TaskFiltersType } from "../Types/task";
interface TaskFiltersProps {
    filters: TaskFiltersType;
    onFiltersChange: (filters: TaskFiltersType) => void;
    categories: string[];
}
export declare function TaskFilters({ filters, onFiltersChange, categories }: TaskFiltersProps): import("react/jsx-runtime").JSX.Element;
export {};
