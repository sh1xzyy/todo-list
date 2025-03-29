import { showSuccessMessage, showWarningMessage } from "./showMessage"
import { addNewNode, getAllNodes } from "../utils/localeStorage"
import { addLoader, removeLoader } from "./loader"
import { renderNodes } from "./render-markup"
import { closeModal } from "./modalClose"

export const onModalEditFormSubmit = (event, id) => {
    event.preventDefault()

    const form = event.target.elements
    const nodeTitle = form.nodeInput.value.trim()
    const nodeMessage = form.nodeTextarea.value.trim()

    if(!nodeTitle || !nodeMessage){
        showWarningMessage("You must fill all fields!")
        return
    }

    const data = getAllNodes("userNodes")

    const updateData = data.map(node => {
        if(node.id === id){
            return {id, title: nodeTitle, message: nodeMessage}
        }
        return node
    })

    addNewNode("userNodes", updateData)

    addLoader()
    setTimeout(() => {
        renderNodes(updateData)
        showSuccessMessage("You have successfully edit node")
        removeLoader()
    }, 200)

    closeModal()
}