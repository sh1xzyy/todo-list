import { getNodes } from '../utils/localeStorage';
import { addLoader, removeLoader } from './loader';
import { renderNodes } from './render-markup';

export const onSearchFormInput = event => {
  const inputValue = event.target.value.trim();

  const userUniqueNodes = getNodes('userNodes').filter(node =>
    node.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  addLoader();
  setTimeout(() => {
    renderNodes(userUniqueNodes);
    removeLoader();
  }, 200);
};
