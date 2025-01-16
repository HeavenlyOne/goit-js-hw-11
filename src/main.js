import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImages } from "./js/pixabay-api";
import { galleryMarkup } from "./js/render-functions";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    form: document.querySelector(".js-form"),
    gallery: document.querySelector('.js-gallery'),
    loader: document.querySelector('.loader')
}

refs.form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault()
    refs.gallery.innerHTML = '';
    const inp = evt.currentTarget.elements[0].value.trim()
    this.reset()
    refs.loader.classList.remove('hidden')
    getImages(inp)
        .then((data) => {
            if (data.total < 1) {
                iziToast.show({
                    message: '🚫 Sorry, there are no images matching your search query. Please try again!',
                    position: "topRight",
                    timeout: 3000,
                    backgroundColor: 'red',
                    messageColor: 'white',
                    progressBar: false,
                    });
            } else {
                return refs.gallery.innerHTML = galleryMarkup(data.hits)
            }

        })
        .then(() => gallerySLB.refresh())
        .catch(err => console.log(err))
        .finally(() => refs.loader.classList.add('hidden'))
}

let gallerySLB = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, history: false })

