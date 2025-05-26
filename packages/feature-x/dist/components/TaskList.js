import { jsx as _jsx } from "react/jsx-runtime";
import { TaskCard } from "./TaskCard";
export function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
    if (tasks.length === 0) {
        return (_jsx("div", { className: "text-center py-8 text-gray-500", children: _jsx("p", { className: "text-sm", children: "No tasks in this column" }) }));
    }
    return (_jsx("div", { className: "space-y-2", children: tasks.map((task) => (_jsx(TaskCard, { task: task, onUpdateTask: onUpdateTask, onDeleteTask: onDeleteTask }, task.id))) }));
}
