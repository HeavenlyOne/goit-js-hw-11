export function galleryMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `<li class="cat-card">
        <div class="gallery"><a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"></a></div>
        <ul class="cat-info">
            <li class="info-desk">
            <h1>Likes</h1>
            <p>${likes}</p>
            </li> 
            <li class="info-desk">
            <h1>Views</h1>
            <p>${views}</p>
            </li>
            <li class="info-desk">
            <h1>Comments</h1>
            <p>${comments}</p>
            </li>
            <li class="info-desk">
            <h1>Downloads</h1>
            <p>${downloads}</p>
            </li>
        </ul>
        </li>`).join('')
}