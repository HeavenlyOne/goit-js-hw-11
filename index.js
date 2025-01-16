import{i as c,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(s){const o="48149972-37b948820d674e189867b2eae",t="https://pixabay.com/api/",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});return fetch(`${t}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function d(s){return s.map(({webformatURL:o,largeImageURL:t,tags:i,likes:e,views:r,comments:a,downloads:n})=>`<li class="cat-card">
        <div class="gallery"><a href="${t}"><img src="${o}" alt="${i}"></a></div>
        <ul class="cat-info">
            <li class="info-desk">
            <h1>Likes</h1>
            <p>${e}</p>
            </li> 
            <li class="info-desk">
            <h1>Views</h1>
            <p>${r}</p>
            </li>
            <li class="info-desk">
            <h1>Comments</h1>
            <p>${a}</p>
            </li>
            <li class="info-desk">
            <h1>Downloads</h1>
            <p>${n}</p>
            </li>
        </ul>
        </li>`).join("")}const l={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")};l.form.addEventListener("submit",h);function h(s){s.preventDefault(),l.gallery.innerHTML="";const o=s.currentTarget.elements[0].value.trim();this.reset(),l.loader.classList.remove("hidden"),f(o).then(t=>{if(t.total<1)c.show({message:"🚫 Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,backgroundColor:"red",messageColor:"white",progressBar:!1});else return l.gallery.innerHTML=d(t.hits)}).then(()=>m.refresh()).catch(t=>console.log(t)).finally(()=>l.loader.classList.add("hidden"))}let m=new u(".gallery a",{captionsData:"alt",captionDelay:250,history:!1});
//# sourceMappingURL=index.js.map
