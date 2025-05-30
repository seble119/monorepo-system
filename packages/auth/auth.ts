// packages/auth/auth.ts

import { AuthSession, User } from "./types";

let mockUser: User | null = null;

export function login(username: string, password: string): AuthSession | null {
  if (username === "admin" && password === "password") {
    mockUser = { id: "1", name: "Admin", role: "admin" };
    return { token: "fake-jwt-token", user: mockUser };
  }
  return null;
}

export function logout() {
  mockUser = null;
}

export function getCurrentUser(): User | null {
  return mockUser;
}
