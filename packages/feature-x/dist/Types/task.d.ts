export interface Task {
    id: string;
    title: string;
    description?: string;
    status: "todo" | "in-progress" | "completed";
    priority: "low" | "medium" | "high";
    category: string;
    dueDate?: Date;
    createdAt: Date;
    updatedAt: Date;
    comments: TaskComment[];
    tags: string[];
}
export interface TaskComment {
    id: string;
    text: string;
    createdAt: Date;
}
export interface TaskFilterOptions {
    status?: Task["status"];
    priority?: Task["priority"];
    category?: string;
    search?: string;
    dueDateRange?: {
        start?: Date;
        end?: Date;
    };
}
export interface TaskStats {
    total: number;
    completed: number;
    inProgress: number;
    todo: number;
    overdue: number;
    byCategory: Record<string, number>;
    byPriority: Record<string, number>;
}
