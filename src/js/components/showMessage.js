import iziToast from 'izitoast';
import exclamation from '/img/messageIcons/bi_exclamation-triangle.svg';
import circle from '/img/messageIcons/bi_check2-circle.svg';
import octagon from '/img/messageIcons/bi_x-octagon.svg';

export const showErrorMessage = message => {
  iziToast.error({
    iconUrl: octagon,
    position: 'topRight',
    progressBarColor: '#B51B1B',
    message,
    messageColor: '#FAFAFB',
    backgroundColor: '#EF4040',
  });
};

export const showSuccessMessage = message => {
  iziToast.success({
    iconUrl: circle,
    position: 'topRight',
    progressBarColor: '#326101',
    message,
    messageColor: '#FAFAFB',
    backgroundColor: '#59A10D',
  });
};

export const showWarningMessage = message => {
  iziToast.warning({
    iconUrl: exclamation,
    position: 'topRight',
    progressBarColor: '#BB7B10',
    message,
    messageColor: '#FAFAFB',
    backgroundColor: '#FFA000',
  });
};
