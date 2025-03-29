import { addNewNode, getAllNodes } from "../utils/localeStorage"
import { addLoader, removeLoader } from "./loader"
import { showSuccessMessage } from "./showMessage"
import { renderNodes } from "./render-markup"

export const deleteNode = (nodeId) => {
    const nodes = getAllNodes("userNodes")
    const filteredNodes = nodes.filter(node => Number(nodeId) !== Number(node.id))

    addLoader()
    setTimeout(() => {
        addNewNode("userNodes", filteredNodes)
        renderNodes(filteredNodes)
        showSuccessMessage("You have delete a node!")
        removeLoader()
    }, 200)
}