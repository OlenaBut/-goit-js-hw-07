import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

galleryListEl.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));

function createMarkup(data) {
  return data
    .map(item => {
      return `
        <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" 
        alt="${item.description}"/>
        </a>`;
    })
    .join('');
}

galleryListEl.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }

new SimpleLightbox(`.gallery a`, {
  captions: true,
  captionsData: `alt`,
  captionDelay: 250,
})

});

console.log(galleryItems);
