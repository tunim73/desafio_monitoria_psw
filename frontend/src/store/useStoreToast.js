import { create } from "zustand";

export const useToastStore = create((set) => {
  return {
    toast: { active: false, type: "", message: "" },
    success: (message) =>
      set(() => ({ toast: { active: true, type: "success", message } })),
    danger: (message) =>
      set(() => ({ toast: { active: true, type: "danger", message } })),
    clear: () =>
      set(() => ({ toast: { active: false, type: "", message: "" } })),
  };
});
