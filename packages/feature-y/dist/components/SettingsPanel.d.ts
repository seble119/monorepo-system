import type { UserSettings, UpdateSettingsData } from "../types";
interface SettingsPanelProps {
    settings: UserSettings;
    onUpdateSettings: (data: UpdateSettingsData) => void;
}
export declare function SettingsPanel({ settings, onUpdateSettings }: SettingsPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
