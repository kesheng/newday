import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

interface ModalPropsInterface {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

// create a Modal component by using React Portal to make sure Modal will not be interacted by root App
const Modal = ({ message, isOpen, onClose, children }: ModalPropsInterface) => {
  if (!isOpen) return null;

  // add role, aria-label, aria-labelledby, area-modal to support web accessability
  return ReactDOM.createPortal(
    <div role="dialog" aria-labelledby="dialog-title" aria-modal="true">
      <h3 id="dialog-title">{message}</h3>
      {children}
      <button data-testid="modal-close" aria-label="close" onClick={onClose}>
        Close
      </button>
    </div>,
    document.body
  );
};

export { Modal };
