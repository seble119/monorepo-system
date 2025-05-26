"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@monorepo/ui-components";
import { ProfileCard } from "./ProfileCard";
import { ProfileForm } from "./ProfileForm";
import { SettingsPanel } from "./SettingsPanel";
import { useProfile } from "../hooks/useProfile";
export function UserProfile() {
    const { user, settings, updateProfile, updateSettings } = useProfile();
    const [activeTab, setActiveTab] = useState("profile");
    const tabs = [
        { id: "profile", label: "Profile", icon: "👤" },
        { id: "edit", label: "Edit Profile", icon: "✏️" },
        { id: "settings", label: "Settings", icon: "⚙️" },
    ];
    return (_jsx("div", { className: "max-w-4xl mx-auto space-y-6", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "User Profile System" }) }), _jsxs(CardContent, { children: [_jsx("div", { className: "flex border-b mb-6", children: tabs.map((tab) => (_jsxs("button", { onClick: () => setActiveTab(tab.id), className: `px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.id
                                    ? "border-blue-600 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"}`, children: [_jsx("span", { className: "mr-2", children: tab.icon }), tab.label] }, tab.id))) }), activeTab === "profile" && _jsx(ProfileCard, { user: user, settings: settings }), activeTab === "edit" && (_jsx(ProfileForm, { user: user, onSubmit: (data) => {
                                updateProfile(data);
                                setActiveTab("profile");
                            }, onCancel: () => setActiveTab("profile") })), activeTab === "settings" && _jsx(SettingsPanel, { settings: settings, onUpdateSettings: updateSettings })] })] }) }));
}
