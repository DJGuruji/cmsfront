import { create } from "zustand";
import { removeSession, setSession } from "./lib/session";

const useGlobalStore = create((set) => ({
  userData: {},
  adminData: {},
  updateUserData: (action) => {
    switch (action?.type) {
      case "USER_LOGIN":
        set({ userData: action?.payload });
        setSession("user_data", JSON.stringify(action?.payload));
        break;
      case "USER_LOGOUT":
        set({ userData: null });
        removeSession("user_data");
        break;
      default:
        return;
    }
  },
  updateAdminData: (action) => {
    switch (action?.type) {
      case "ADMIN_LOGIN":
        set({ adminData: action?.payload });
        setSession("admin_data", JSON.stringify(action?.payload));
        break;
      case "ADMIN_LOGOUT":
        set({ adminData: null });
        removeSession("admin_data");
        break;
      default:
        return;
    }
  },
}));

export default useGlobalStore;