import { getAllNodes } from "../utils/localeStorage"
import { addLoader, removeLoader } from "./loader"
import { showErrorMessage, showSuccessMessage } from "./showMessage"
import { renderNodes } from "./render-markup"

export const deleteAllNodes = () => {
    const nodes = getAllNodes("userNodes")
    if(!nodes.length){
        showErrorMessage("Nothing to delete")
        return
    }
    addLoader()
    setTimeout(() => {
        localStorage.removeItem("userNodes")
        renderNodes(getAllNodes("userNodes"))
        showSuccessMessage("You have successfully deleted all nodes!")
        removeLoader()
    }, 200)
}