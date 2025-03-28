import { refs } from "../utils/refs"

const createNodesMarkup = ({id, title, message}) => {
    return `
    <li class="nodes-item" data-id="${id}">
        <h3 class="nodes-item-title">${title}</h3>
        <p class="nodes-item-description">${message}</p>
        <div class="nodes-item-btns">
          <button class="edit-node-btn" type="button" id="editNodeBtn">Edit</button>
          <button class="delete-node-btn" type="button" id="deleteNodeBtn">Delete</button>
        </div>
    </li>
  `
}

export const renderNodes = (userNodes) => {
  const markup = userNodes.map(createNodesMarkup).join("")
  refs.nodesList.innerHTML = markup
}