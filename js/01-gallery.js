import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryListEl = document.querySelector('.gallery');

galleryListEl.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));

function createMarkup(data) {
  return data
    .map(item => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
      <img class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"/>
      </a>
      </li>`;
    })
    .join('');
}

galleryListEl.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show()
    
    galleryListEl.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close()
		}
	})
})





