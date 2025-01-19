import{a as L,i as d,S as b}from"./assets/vendor-BDaiwwc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();let l=0;const u=15;let c="";async function f(t){const r="48149972-37b948820d674e189867b2eae",a="https://pixabay.com/api/";return l<1?(c=t,l+=1):l>0&&t!==c?(l=1,c=t):l+=1,await L.get(`${a}`,{params:{key:r,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:l}})}function m(t){return t.map(({webformatURL:r,largeImageURL:a,tags:i,likes:e,views:s,comments:n,downloads:y})=>`<li class="cat-card">
        <div class="gallery"><a href="${a}"><img src="${r}" alt="${i}"></a></div>
        <ul class="cat-info">
            <li class="info-desk">
            <h1>Likes</h1>
            <p>${e}</p>
            </li> 
            <li class="info-desk">
            <h1>Views</h1>
            <p>${s}</p>
            </li>
            <li class="info-desk">
            <h1>Comments</h1>
            <p>${n}</p>
            </li>
            <li class="info-desk">
            <h1>Downloads</h1>
            <p>${y}</p>
            </li>
        </ul>
        </li>`).join("")}const o={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-submit-loader"),loadMore:document.querySelector(".js-load-more"),loader2:document.querySelector(".js-more-loader")};o.form.addEventListener("submit",w);o.loadMore.addEventListener("click",v);let h="",g=0;async function w(t){try{let i=function({data:e}){if(e.total<1)d.show({message:"🚫 Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,backgroundColor:"red",messageColor:"white",progressBar:!1});else return e.totalHits>15&&(g=e.totalHits,o.loadMore.classList.remove("hidden")),o.gallery.insertAdjacentHTML("beforeend",m(e.hits))};t.preventDefault(),o.gallery.innerHTML="";const r=t.currentTarget.elements.input.value.trim();h=r,this.reset(),o.loadMore.classList.add("hidden"),o.loader.classList.remove("hidden");const a=await f(r);i(a),await p.refresh()}catch(r){console.log(r)}finally{o.loader.classList.add("hidden")}}async function v(){try{o.loadMore.classList.add("hidden"),o.loader2.classList.remove("hidden");const t=Math.ceil(g/u);if(t<l||t===l)d.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3,backgroundColor:"blue",messageColor:"white",progressBar:!1}),o.loader2.classList.add("hidden");else{const r=await f(h);o.gallery.insertAdjacentHTML("beforeend",m(r.data.hits)),p.refresh(),o.loader2.classList.add("hidden"),o.loadMore.classList.remove("hidden");const i=document.querySelector(".cat-card").getBoundingClientRect().height*2.75;window.scrollBy({top:i,left:0,behavior:"smooth"})}}catch(t){console.log(t)}}let p=new b(".gallery a",{captionsData:"alt",captionDelay:250,history:!1});
//# sourceMappingURL=index.js.map
