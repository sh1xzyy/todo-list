import { saveOrUpdateNode, getNodes } from '../utils/localeStorage';
import { addLoader, removeLoader } from './loader';
import { showSuccessMessage } from './showMessage';
import { renderNodes } from './render-markup';

export const deleteNode = nodeId => {
  const nodes = getNodes('userNodes');
  const filteredNodes = nodes.filter(
    node => Number(nodeId) !== Number(node.id)
  );

  addLoader();
  setTimeout(() => {
    saveOrUpdateNode('userNodes', filteredNodes);
    renderNodes(filteredNodes);
    showSuccessMessage('You have successfully deleted a node!');
    removeLoader();
  }, 200);
};
