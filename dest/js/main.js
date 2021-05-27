const articleContainer=document.querySelector(".hello .wrapper"),workContainer=document.querySelector(".mywork .wrapper");async function getPosts(){const t=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=1");return await t.json()}async function showPosts(){const t=await getPosts();t.forEach(t=>{const e=document.createElement("article");e.classList.add("article"),e.innerHTML=`
        <article class="article article_style_profile" id="article_style_profile">
            <img src='https://picsum.photos/490/490' width=490 height=490 class="article__picture">
            <div class="article__content">
                <h3 class="article__title">${t.title}</h3>
                <p class="article__text">${t.body}</p>
                <a href="/${t.id}" class="article__link">download profile</a>
            </div>
        </article>
    `,articleContainer.appendChild(e)})}async function getWorks(){const t=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4");return await t.json()}async function showWorks(){const t=await getWorks();t.forEach(t=>{const e=document.createElement("article");e.classList.add("article"),e.innerHTML=`
        <article class="article article_style_work">
            <img src='https://picsum.photos/490/490' width=490 height=490 class="article__picture">
            <div class="article__content">
                <h3 class="article__title">${t.title}</h3>
                <p class="article__text">${t.body}</p>
                <a href="/${t.id}" class="article__link">download profile</a>
            </div>
        </article>
    `,workContainer.appendChild(e)})}showPosts(),showWorks();