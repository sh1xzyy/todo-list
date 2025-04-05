import { refs } from '../utils/refs';
import editIcon from '/img/nodeIcons/pencil.svg';
import deleteIcon from '/img/nodeIcons/bin.svg';

const createNodesMarkup = ({
  id,
  title,
  message,
  dateTime: { year, month, day, hours, minutes, seconds },
}) => {
  return `
      <li class="nodes-item" data-id="${id}">
      <div>
        <h3 class="nodes-item-title" data-title="${title}">${title}</h3>
        <p class="nodes-item-description" data-message="${message}">${message}</p>
      </div>
      <div class="nodes-bottom-container">
        <p class="nodes-date">
          <span>${year}:${month}:${day}</span>
          <span>${hours}:${minutes}:${seconds}</span>
        </p>
      <div class="nodes-item-btns">
        <button class="edit-node-btn" type="button" id="editNodeBtn" aria-label="Edit node button"  title="Edit node">
          <img src="${editIcon}" alt="" width="18" height="18">
        </button>
        <button class="delete-node-btn" type="button" id="deleteNodeBtn" aria-label="Delete node button" title="Delete node">
          <img src="${deleteIcon}" alt="" width="18" height="18">
        </button>
        </div>
      </div>
    </div>
  </li>
`;
};

export const renderNodes = userNodes => {
  const markup = userNodes.map(createNodesMarkup).join('');
  refs.nodesList.innerHTML = markup;
};
