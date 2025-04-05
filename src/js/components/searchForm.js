import {
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage,
} from './showMessage';
import { getNodes } from '../utils/localeStorage';
import { addLoader, removeLoader } from './loader';
import { renderNodes } from './render-markup';

export const onSearchFormSubmit = event => {
  event.preventDefault();

  const inputValue = event.target.elements.searchNode.value.trim();

  if (!inputValue) {
    showWarningMessage('Please enter a search term.');
    return;
  }

  const userUniqueNodes = getNodes('userNodes').filter(
    node => node.title === inputValue
  );

  if (!userUniqueNodes.length) {
    showErrorMessage('No matching nodes found.');
    event.currentTarget.reset();
    return;
  }

  addLoader();
  setTimeout(() => {
    renderNodes(userUniqueNodes);
    showSuccessMessage('Node found successfully!');
    removeLoader();
  }, 200);
  event.currentTarget.reset();
};
