import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoggedIn: !!localStorage.getItem("user"),
  error: null,


  signUp: (userData, navigate) => {
    localStorage.setItem("user", JSON.stringify(userData));
    set({ user: userData, isLoggedIn: false, error: null });
    navigate("/login");
  },


  signIn: (username, password, navigate) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.username === username &&
      savedUser.password === password
    ) {
      set({ user: savedUser, isLoggedIn: true, error: null });
      navigate("/");
    } else {
      set({ error: "Invalid Credentials" });
    }
  },

  logOut: (navigate) => {
    set({ user: null, isLoggedIn: false, error: null });
    navigate("/login");
  },
}));

export default useAuthStore;
