import { modalOverlayClose, onHandleEscapeKey } from "./js/components/modalClose";
import { onModalEditFormSubmit } from "./js/components/editNode";
import { deleteAllNodes } from "./js/components/deleteAllNodes";
import { onSearchFormSubmit } from "./js/components/searchForm";
import { onModalFormSubmit } from "./js/components/modalForm";
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
    const li = target.closest("li")
    if(target.matches("#editNodeBtn")){
        refs.modalForm.elements.nodeInput.value = li.querySelector("h3").dataset.title
        refs.modalForm.elements.nodeTextarea.value = li.querySelector("p").dataset.message
        
        refs.modalOverlay.classList.add("is-open")
        refs.modalOverlay.addEventListener("click", (event) => modalOverlayClose(event))
        refs.modalForm.addEventListener("submit", (event) => onModalEditFormSubmit(event, Number(li.dataset.id)))
        document.addEventListener("keydown", onHandleEscapeKey)
    }
    if(target.matches("#deleteNodeBtn")){
        const nodeId = li.dataset.id
        deleteNode(nodeId)        
    }
}


refs.nodesList.addEventListener("click", onNodeButtonsClick)
refs.searchForm.addEventListener("submit", onSearchFormSubmit)
refs.headerButtons.addEventListener("click", onHeaderBtnsClick)