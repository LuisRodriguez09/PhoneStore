import { toast as toastEmitter } from "react-toastify";

export type TSeverityOptions = "error" | "success" | "info" | "warning";

const toast = (severity: TSeverityOptions, message: string): void => {
  toastEmitter[severity](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};

export default toast;
