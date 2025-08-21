// src/utils.ts

// Save user to localStorage
export function saveUser(user: any) {
  localStorage.setItem("user", JSON.stringify(user))
}

// Get user from localStorage
export function getUser() {
  const data = localStorage.getItem("user")
  return data ? JSON.parse(data) : null
}

// Clear user from localStorage (logout)
export function clearUser() {
  localStorage.removeItem("user")
}
