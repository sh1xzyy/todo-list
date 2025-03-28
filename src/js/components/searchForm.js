import { showErrorMessage, showSuccessMessage, showWarningMessage } from "./showMessage"
import { getAllNodes } from "../utils/localeStorage"
import { renderNodes } from "./render-markup"

export const onSearchFormSubmit = (event) => {
    event.preventDefault()

    const inputValue = event.target.elements.searchNode.value.trim()
    
    if(!inputValue){
        showWarningMessage("Fill fields")
        return
    }
    
    const userUniqueNodes = getAllNodes("userNodes").filter(node => node.title === inputValue)
    
    if(!userUniqueNodes.length){
        showErrorMessage("Nothing to search")
        return
      }
      
    renderNodes(userUniqueNodes)
    showSuccessMessage("You have finally found your node!")
    event.currentTarget.reset()
}