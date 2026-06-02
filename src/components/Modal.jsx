import { useEffect } from "react"
import ReactDOM from "react-dom"
import "./Modal.css"

const Modal = ({isOpen, onClose, children}) => {
  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // чтобы клик внутри не закрывал модалку
        >
        <button className="modal-close" onClick={onClose}>x</button>
        {children}
      </div>
    </div>, document.body
  );
}

export default Modal