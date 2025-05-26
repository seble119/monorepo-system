"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, Input, Label, Textarea, Button } from "@monorepo/ui-components";
import { validateRequired } from "@monorepo/utils";
export function ProfileForm({ user, onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        bio: user.bio || "",
        location: user.location || "",
        website: user.website || "",
    });
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        const firstNameValidation = validateRequired(formData.firstName, "First name");
        if (!firstNameValidation.isValid) {
            newErrors.firstName = firstNameValidation.message;
        }
        const lastNameValidation = validateRequired(formData.lastName, "Last name");
        if (!lastNameValidation.isValid) {
            newErrors.lastName = lastNameValidation.message;
        }
        if (formData.website && !formData.website.startsWith("http")) {
            newErrors.website = "Website must start with http:// or https://";
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            onSubmit(formData);
        }
    };
    return (_jsxs(Card, { className: "max-w-2xl mx-auto", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Edit Profile" }) }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "firstName", children: "First Name" }), _jsx(Input, { id: "firstName", value: formData.firstName, onChange: (e) => setFormData((prev) => ({ ...prev, firstName: e.target.value })), placeholder: "Enter your first name" }), errors.firstName && _jsx("p", { className: "text-sm text-red-600 mt-1", children: errors.firstName })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "lastName", children: "Last Name" }), _jsx(Input, { id: "lastName", value: formData.lastName, onChange: (e) => setFormData((prev) => ({ ...prev, lastName: e.target.value })), placeholder: "Enter your last name" }), errors.lastName && _jsx("p", { className: "text-sm text-red-600 mt-1", children: errors.lastName })] })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "bio", children: "Bio" }), _jsx(Textarea, { id: "bio", value: formData.bio, onChange: (e) => setFormData((prev) => ({ ...prev, bio: e.target.value })), placeholder: "Tell us about yourself", rows: 4 })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "location", children: "Location" }), _jsx(Input, { id: "location", value: formData.location, onChange: (e) => setFormData((prev) => ({ ...prev, location: e.target.value })), placeholder: "City, Country" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "website", children: "Website" }), _jsx(Input, { id: "website", value: formData.website, onChange: (e) => setFormData((prev) => ({ ...prev, website: e.target.value })), placeholder: "https://yourwebsite.com" }), errors.website && _jsx("p", { className: "text-sm text-red-600 mt-1", children: errors.website })] }), _jsxs("div", { className: "flex gap-4 pt-4", children: [_jsx(Button, { type: "submit", className: "flex-1", children: "Save Changes" }), _jsx(Button, { type: "button", variant: "outline", onClick: onCancel, className: "flex-1", children: "Cancel" })] })] }) })] }));
}
