import articlesTpl from './templates/articles.hbs'
import NewsApiService from './components/news-api'
import LoadMoreBtn from './components/load-more-btn'

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    // loadMoreBtn: documentq  ('.load-more'),
};
const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles); 



function onSearch(e) {
    e.preventDefault();
    clearArticlesContainer();
    newsApiService.query = e.currentTarget.elements.query.value;
    if (newsApiService.query === '') {
        return alert('Input something real')
    }

    loadMoreBtn.show();
    
    newsApiService.resetPage();
    fetchArticles()
};

function fetchArticles() {
    loadMoreBtn.disabled();

    newsApiService.fetchArticles().then(articles => {
        appendArticlesMarkup(articles);
        loadMoreBtn.enable();
    });
};
function appendArticlesMarkup(articles) {
    refs.articlesContainer.insertAdjscentHTML('beforeend', articlesTpl(articles));
};
function clearArticlesContainer() {
    refs.articlesContainer.innerHTML = '';
};