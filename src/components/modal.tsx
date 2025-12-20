import { FaTimes } from "react-icons/fa";
import "../Style/modal.css"
import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    
    if (!isOpen) return null;

    return (
        // <div className={`modal__wrapper ${isOpen ? 'open' : ''}`}>
        <div className="modal__wrapper">
            <div className="modal__ctn">
                <div className="icn__close" onClick={onClose}>
                    <FaTimes size={12} color="#5e5e5eff" style={{ cursor: "pointer" }} />
                </div>
            </div>
        </div>
    )
}

export default Modal;