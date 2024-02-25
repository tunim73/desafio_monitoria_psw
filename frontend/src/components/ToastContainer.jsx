import { useToastStore } from "../store/useStoreToast";

const style = {
  minHeight: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const ToastContainer = () => {
  const [toast] = useToastStore((state) => [state.toast]);

  if (!toast.active) return <></>;

  if (toast.type === "success") {
    return (
      <div style={style} className=".container bg-success text-white">
        {toast.message}
      </div>
    );
  } else if (toast.type === "danger") {
    return (
      <div style={style} className=".container bg-danger text-white">
        {toast.message}
      </div>
    );
  }
};
