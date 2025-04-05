import { showSuccessMessage, showWarningMessage } from './showMessage';
import { saveOrUpdateNode, getNodes } from '../utils/localeStorage';
import { addLoader, removeLoader } from './loader';
import { renderNodes } from './render-markup';
import { closeModal } from './modalClose';
import { refs } from '../utils/refs';

export const onModalFormSubmit = event => {
  event.preventDefault();
  const form = event.target.elements;

  const inputValue = form.nodeInput.value.trim();
  const messageValue = form.nodeTextarea.value.trim();

  if (!inputValue || !messageValue) {
    showWarningMessage('Please fill in all fields.');
    return;
  }

  const id = getNodes('userNodes') || 0;

  const date = new Date();
  const userNewNode = {
    id: ++id.length,
    title: inputValue,
    message: messageValue,
    dateTime: {
      year: date.getFullYear(),
      month: String(date.getMonth()).padStart(2, '0'),
      day: String(date.getDay()).padStart(2, '0'),
      hours: String(date.getHours()).padStart(2, '0'),
      minutes: String(date.getMinutes()).padStart(2, '0'),
      seconds: String(date.getSeconds()).padStart(2, '0'),
    },
  };

  const nodes = getNodes('userNodes') || [];
  nodes.unshift(userNewNode);
  saveOrUpdateNode('userNodes', nodes);

  addLoader();
  setTimeout(() => {
    showSuccessMessage('New node added successfully!');
    renderNodes(nodes);
    removeLoader();
  }, 200);

  refs.modalForm.removeEventListener('submit', onModalFormSubmit);
  closeModal();
};
