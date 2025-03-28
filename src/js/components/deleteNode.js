import { addNewNode, getAllNodes } from "../utils/localeStorage"
import { addLoader, removeLoader } from "./loader"
import { renderNodes } from "./render-markup"

export const deleteNode = (nodeId) => {
    const nodes = getAllNodes("userNodes")
    const filteredNodes = nodes.filter(node => Number(nodeId) !== Number(node.id))

    addLoader()
    setTimeout(() => {
        addNewNode("userNodes", filteredNodes)
        renderNodes(filteredNodes)
        removeLoader()
    }, 200)
}