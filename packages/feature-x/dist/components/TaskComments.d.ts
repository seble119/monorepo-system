import type { TaskComment } from "../Types/task";
interface TaskCommentsProps {
    comments: TaskComment[];
    onAddComment: (text: string) => void;
    onDeleteComment: (commentId: string) => void;
}
export declare function TaskComments({ comments, onAddComment, onDeleteComment }: TaskCommentsProps): import("react/jsx-runtime").JSX.Element;
export {};
