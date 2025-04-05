import { showSuccessMessage, showWarningMessage } from './showMessage';
import { saveOrUpdateNode, getNodes } from '../utils/localeStorage';
import { addLoader, removeLoader } from './loader';
import { renderNodes } from './render-markup';
import { closeModal } from './modalClose';
import { refs } from '../utils/refs';

let editingNodeId = null;

export const onModalEditFormSubmit = event => {
  event.preventDefault();

  const form = event.target.elements;
  const nodeTitle = form.nodeInput.value.trim();
  const nodeMessage = form.nodeTextarea.value.trim();

  if (!nodeTitle || !nodeMessage) {
    showWarningMessage('You must fill all fields!');
    return;
  }

  const nodes = getNodes('userNodes');

  const updateNodes = nodes.map(node =>
    node.id === editingNodeId
      ? {
          id: editingNodeId,
          title: nodeTitle,
          message: nodeMessage,
          dateTime: node.dateTime,
        }
      : node
  );

  saveOrUpdateNode('userNodes', updateNodes);

  addLoader();
  setTimeout(() => {
    renderNodes(updateNodes);
    showSuccessMessage('You have successfully edited the node.');
    removeLoader();
  }, 200);

  refs.modalForm.removeEventListener('submit', onModalEditFormSubmit);

  closeModal();
};

export const setEditingNodeId = nodeId => {
  editingNodeId = nodeId;
};
