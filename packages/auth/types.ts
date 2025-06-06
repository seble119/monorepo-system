// packages/auth/types.ts

export interface User {
    id: string;
    name: string;
    role: "admin" | "user";
  }
  
  export interface AuthSession {
    token: string;
    user: User;
  }
  