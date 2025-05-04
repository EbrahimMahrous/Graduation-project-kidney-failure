// components/ui/Toast.tsx
import { useEffect, useState } from "react";
import style from "../../styles/components/ui/Toast.module.css";

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
  type?: "success" | "error";
}

const Toast: React.FC<ToastProps> = ({
  message,
  show,
  onClose,
  type = "success",
}) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`${style.toast} ${visible ? style.show : ""} ${
        type === "error" ? style.error : style.success
      }`}
    >
      {type === "error" ? "" : "✅"} {message}
    </div>
  );
};

export default Toast;
