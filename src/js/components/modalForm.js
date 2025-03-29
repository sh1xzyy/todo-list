import { showSuccessMessage, showWarningMessage } from "./showMessage";
import { addNewNode, getAllNodes } from "../utils/localeStorage";
import { addLoader, removeLoader } from "./loader";
import { renderNodes } from "./render-markup";
import { closeModal } from "./modalClose";

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
    
    closeModal()
}