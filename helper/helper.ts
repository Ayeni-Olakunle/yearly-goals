export function isLoggedIn() {
    if (typeof window !== "undefined") {
        return localStorage.getItem('token') !== null
    }
   return false
}