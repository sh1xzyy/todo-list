import { addNewNode, getAllNodes } from "../utils/localeStorage";
import { showSuccessMessage, showWarningMessage } from "./showMessage";
import { renderNodes } from "./render-markup";
import { refs } from "../utils/refs";
import { addLoader, removeLoader } from "./loader";

export const onModalFormSubmit = (event) => {
    event.preventDefault()
    const form = event.target.elements

    const inputValue = form.nodeInput.value.trim()
    const messageValue = form.nodeTextarea.value.trim()

    if(!inputValue || !messageValue){
      showWarningMessage("Fill all fields")
      return
    }

    const id = getAllNodes("userNodes") || 0

    const userNewNode = {
      id: ++id.length,
      title: inputValue,
      message: messageValue,
    }
    
    const nodes = getAllNodes("userNodes") || []
    nodes.unshift(userNewNode)
    addNewNode("userNodes", nodes)
    
    addLoader()
    setTimeout(() => {
      showSuccessMessage("You added new Node!")
      renderNodes(nodes)
      removeLoader()
    }, 200)
    
    closeModal();
    event.currentTarget.reset()
    refs.modalOverlay.removeEventListener("click", modalOverlayClose)
    refs.modalForm.removeEventListener("submit", onModalFormSubmit)
    document.removeEventListener("keydown", onHandleEscapeKey)
}

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
  
const closeModal = () => {
    refs.modalOverlay.classList.remove('is-open');
};