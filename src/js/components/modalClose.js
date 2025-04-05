import { refs } from '../utils/refs';

export const modalOverlayClose = event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
  if (event.target.closest('#modalCloseBtn')) {
    closeModal();
  }
};

export const onHandleEscapeKey = event => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

export const closeModal = () => {
  refs.modalOverlay.classList.remove('is-open');
  document.removeEventListener('keydown', onHandleEscapeKey);
  refs.modalOverlay.removeEventListener('click', modalOverlayClose);
  refs.modalForm.reset();
};
