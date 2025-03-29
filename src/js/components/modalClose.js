import { onModalFormSubmit } from "./modalForm";
import { refs } from "../utils/refs";

export const modalOverlayClose = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
    if (event.target.matches('#modalCloseBtn')) {
      closeModal();
    }
};
  
export const onHandleEscapeKey = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
};
  
export const closeModal = () => {
    refs.modalOverlay.classList.remove('is-open');
    document.removeEventListener("keydown", onHandleEscapeKey)
    refs.modalOverlay.removeEventListener("click", modalOverlayClose)
    refs.modalForm.removeEventListener("submit", onModalFormSubmit)
    refs.modalForm.reset()
};