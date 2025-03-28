import { getAllNodes } from "../utils/localeStorage"
import { addLoader, removeLoader } from "./loader"
import { renderNodes } from "./render-markup"
import { showErrorMessage } from "./showMessage"

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
        removeLoader()
    }, 200)
}