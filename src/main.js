import { modalOverlayClose, onHandleEscapeKey, onModalFormSubmit } from "./js/components/modalForm";
import { deleteAllNodes } from "./js/components/deleteAllNodes";
import { onSearchFormSubmit } from "./js/components/searchForm";
import { renderNodes } from "./js/components/render-markup";
import { deleteNode } from "./js/components/deleteNode";
import { getAllNodes } from "./js/utils/localeStorage";
import { refs } from "./js/utils/refs";

document.addEventListener("DOMContentLoaded", () => {
    renderNodes(getAllNodes("userNodes"))
})

const onHeaderBtnsClick = ({target}) => {
    if(target.matches("#deleteAllNodeBtn")){
        deleteAllNodes()
    }
    if(target.matches("#addNodeBtn")){
        refs.modalOverlay.classList.add("is-open")
        refs.modalOverlay.addEventListener("click", modalOverlayClose)
        refs.modalForm.addEventListener("submit", onModalFormSubmit)
        document.addEventListener("keydown", onHandleEscapeKey)
    }
}

const onNodeButtonsClick = ({target}) => {
    if(target.matches("#editNodeBtn")){
        console.log("editNodeBtn");
        
    }
    if(target.matches("#deleteNodeBtn")){
        const nodeId = target.closest("li").dataset.id
        deleteNode(nodeId)        
    }
}


refs.nodesList.addEventListener("click", onNodeButtonsClick)
refs.searchForm.addEventListener("submit", onSearchFormSubmit)
refs.headerButtons.addEventListener("click", onHeaderBtnsClick)