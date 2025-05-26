import type { User, UpdateProfileData } from "../types";
interface ProfileFormProps {
    user: User;
    onSubmit: (data: UpdateProfileData) => void;
    onCancel: () => void;
}
export declare function ProfileForm({ user, onSubmit, onCancel }: ProfileFormProps): import("react/jsx-runtime").JSX.Element;
export {};
