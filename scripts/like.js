/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes('is-liked')) {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}

/*Выбираем кнопку через обработчик события чтобы не инлайнить */
/*Показываю модальное окно*/
document.getElementById('save').addEventListener('click', function() {
  document.getElementById('dialog').showModal();
});

/*Закрываю модальное окно*/
document.getElementById('ok-button').addEventListener('click', function() {
  document.getElementById('dialog').close();
});

/*МОИ АНИМАШКИ*/
/*Включаю лампочку*/
document.getElementById('lamp-button').addEventListener('click', function() {
  const lampImage = this.querySelector('.lamp-img');
  lampImage.classList.toggle('active');
/*Меняю яркость картинки*/
  const cardImage = document.querySelector('.card__image-brightness-filter');
  if (cardImage) {
    cardImage.classList.toggle('brightness-full');
  }
  /*Меняю прозрачность облака*/
  const lampCloud = document.querySelector('.lamp-cloud');
  if (lampCloud) {
    lampCloud.classList.toggle('opacity-full');
  }
  /*Появляется мемное лицо*/
  const lampFace = document.querySelector('.lamp-face');
  if (lampFace) {
    lampFace.classList.toggle('display-block');
  }
  /*Прозрачность текста*/
  
  const lampText = document.querySelector('.lamp-text');
  if (lampText) {
    lampText.classList.toggle('opacity-full');
    
    // Заменить текст в параграфе при клике
    if (lampText.textContent.includes('14 лет в спорте. Чем бы заняться?')) {
      lampText.innerHTML = 'Пойду туда...<span class="new-line">В чём не шарю!!!</span>';
    } else {
      lampText.innerHTML = '14 лет в спорте. <span class="new-line">Чем бы заняться?</span>';
    }
  }
  
});





