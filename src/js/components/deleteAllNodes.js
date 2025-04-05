import { showErrorMessage, showSuccessMessage } from './showMessage';
import { addLoader, removeLoader } from './loader';
import { getNodes } from '../utils/localeStorage';
import { renderNodes } from './render-markup';

export const deleteAllNodes = () => {
  const nodes = getNodes('userNodes');
  if (!nodes.length) {
    showErrorMessage('Nothing to delete');
    return;
  }

  addLoader();
  setTimeout(() => {
    localStorage.removeItem('userNodes');
    renderNodes([]);
    showSuccessMessage('You have successfully deleted all nodes!');
    removeLoader();
  }, 200);
};
