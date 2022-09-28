import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`
).join('');

galleryList.insertAdjacentHTML('beforeend', markup);

let galleryClick = new SimpleLightbox('.gallery__item', {captionsData: "alt", captionDelay: 250});