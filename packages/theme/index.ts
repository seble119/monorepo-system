// packages/theme/index.ts

export const lightTheme = {
    background: "#ffffff",
    text: "#000000",
    primary: "#3b82f6", // Tailwind blue-500
  };
  
  export const darkTheme = {
    background: "#1f2937", // Tailwind gray-800
    text: "#f9fafb",
    primary: "#2563eb", // Tailwind blue-600
  };
  
  export const themes = {
    light: lightTheme,
    dark: darkTheme,
  };
  
  export type ThemeName = keyof typeof themes;
  
  export function getTheme(name: ThemeName) {
    return themes[name];
  }
  