import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Define Type for Popup State
interface PopupState {
  message: string;
  type: "success" | "error";
  show: boolean;
}

// ✅ Define Type for PopupMessage Props
interface PopupMessageProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const App: React.FC = () => {
  const [popup, setPopup] = useState<PopupState>({
    message: "",
    type: "success",
    show: false,
  });

  const triggerSuccess = () => {
    setPopup({ message: "✅ Action Successful!", type: "success", show: true });
  };

  const triggerError = () => {
    setPopup({ message: "❌ Action Failed!", type: "error", show: true });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button className="bg-blue-500 text-white px-4 py-2 m-2 rounded shadow-md" onClick={triggerSuccess}>
        Show Success
      </button>
      <button className="bg-red-500 text-white px-4 py-2 m-2 rounded shadow-md" onClick={triggerError}>
        Show Error
      </button>

      {/* Popup Message Component Inside App.tsx */}
      <AnimatePresence>
        {popup.show && (
          <PopupMessage 
            message={popup.message} 
            type={popup.type} 
            onClose={() => setPopup({ message: "", type: "success", show: false })} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// ✅ PopupMessage Component with Explicit Type Annotations
const PopupMessage: React.FC<PopupMessageProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Auto-close after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-5 right-5 px-4 py-2 rounded-lg shadow-lg text-white text-lg font-semibold
        ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
    >
      {message}
    </motion.div>
  );
};

export default App;
