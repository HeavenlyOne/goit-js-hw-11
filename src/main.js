import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImages, perPage, page } from "./js/pixabay-api";
// import * as getImgRequest from "./js/pixabay-api"
import { galleryMarkup } from "./js/render-functions";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    form: document.querySelector(".js-form"),
    gallery: document.querySelector('.js-gallery'),
    loader: document.querySelector('.js-submit-loader'),
    loadMore: document.querySelector('.js-load-more'),
    loader2: document.querySelector('.js-more-loader'),
}

refs.form.addEventListener('submit', onSubmit);
refs.loadMore.addEventListener('click', onLoadMore);


let inputRequest = ''
let totalHitsPages = 0;


async function onSubmit(evt) {
    try {
        evt.preventDefault()
        refs.gallery.innerHTML = '';
        
        const inp = evt.currentTarget.elements.input.value.trim()
        inputRequest = inp;

        this.reset()
        
        refs.loadMore.classList.add('hidden')
        refs.loader.classList.remove('hidden')
        
        //Запит на API з імпортованої функції
        const getImgs = await getImages(inp);
        
        //Розмітка з перевіркою чи прийщло щось взагалі і чи картинок більше 15-ти (чи ставити кнопку Load More)
        markupImages(getImgs);
        function markupImages({data}) {
                // console.log(data);
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
                    if (data.totalHits > 15) {
                        totalHitsPages = data.totalHits;
                        //Додаємо кнопку Load More, якщо картинок в базі більше 15
                        refs.loadMore.classList.remove('hidden')
                    }
                    
                    return refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup(data.hits))
                }
        }
        //Оновлення SimpleLightBox
        await gallerySLB.refresh();
        
    } catch (err) {   
        console.log(err)
    } finally {
            //Прибираємо loader - коло індикатора завантаження
        refs.loader.classList.add('hidden'); 
        }
}


async function onLoadMore() {
  
    try {
        refs.loadMore.classList.add('hidden')
        refs.loader2.classList.remove('hidden')

        //Визначаємо загальну кількість сторінок, доступних для завантаження
        const totalPages = Math.ceil(totalHitsPages / perPage);

    
        if ((totalPages < page) || (totalPages === page)) {
            iziToast.show({
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight",
                timeout: 3000,
                backgroundColor: 'blue',
                messageColor: 'white',
                progressBar: false,
            });
            refs.loader2.classList.add('hidden');
        } else {
            const newImage = await getImages(inputRequest)
            refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup(newImage.data.hits))
            gallerySLB.refresh();

            refs.loader2.classList.add('hidden');
            refs.loadMore.classList.remove('hidden')

            //Прокрутка екрану на висоту двох карток після додавання нових картинок в галерею
            const imgCard = document.querySelector('.cat-card');
            const yScroll = imgCard.getBoundingClientRect().height * 2.75
            window.scrollBy({
                top: yScroll,
                left: 0,
                behavior: "smooth",
            })
        }
    
    } catch (err) {
        console.log(err);
    }
}

let gallerySLB = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, history: false })



//ЧОМУ ПІСЛЯ ПЕРЕЗАВАНТАЖЕННЯ СТОРІНКИ ЗАПИТИ ДУБЛЮЮТЬСЯ І ДРУГИМ ІДЕ ПУСТИЙ, БЕЗ УЛЮЧОВОГО СЛОВА?
// ЦЕ ЯКОСЬ ПОВ'ЯЗАНО З RESET() У 33 РЯДКУ ТА ТИМ ДЕ Я ДАЮ НОВЕ ЗНАЧЕННЯ inputRequest
// У 30 - БАГ, У 34 - ВСЕ ДОБРЕ.

