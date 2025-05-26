import type { User, UserSettings, UpdateProfileData, UpdateSettingsData } from "../types";
export declare function useProfile(): {
    user: User;
    settings: UserSettings;
    updateProfile: (data: UpdateProfileData) => void;
    updateSettings: (data: UpdateSettingsData) => void;
    updateAvatar: (avatarUrl: string) => void;
};
