
const articleContainer = document.querySelector(".hello .wrapper");
const workContainer = document.querySelector(".mywork .wrapper")// create selector
//
// // Fetch posts from API
async function getPosts() {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=1`
    );
    const postData = await res.json();
    return postData;
}
// Show posts in DOM
async function showPosts() {
    const posts = await getPosts();
    posts.forEach(post => {
        const postEl = document.createElement('article');
        postEl.classList.add('article');
        postEl.innerHTML = `
        <article class="article article_style_profile" id="article_style_profile">
            <img src='https://picsum.photos/490/490' width=490 height=490 class="article__picture">
            <div class="article__content">
                <h3 class="article__title">${post.title}</h3>
                <p class="article__text">${post.body}</p>
                <a href="/${post.id}" class="article__link">download profile</a>
            </div>
        </article>
    `;
        articleContainer.appendChild(postEl);
    });
}

async function getWorks() {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=4`
    )
    const postData = await res.json();
    return postData;
}

async function getImages() {
    const res = await fetch(
        'https://picsum.photos/v2/list?/page=2&limit=4'
    )
    const images = await res.json();
    return images;
}

async function showWorks() {
    const posts = await getWorks();
    const images = await getImages();

    for (let i = 0; i < images.length; i++) {
      //  for (let j = 0; j < images.length; j++) {
            posts[i].images = images[i].download_url;
            console.log(posts[i], images[i])
      //  }
        //console.log(images[i].download_url);
    }


    
    console.log(posts)
    //
    posts.forEach(post => {
        const postEl = document.createElement('article');
        postEl.classList.add('article');
        postEl.innerHTML = `
        <article class="article article_style_work" >
            <img src=${post.images} width=490 height=490 class="article__picture">
         
            <div class="article__content">
                <h3 class="article__title">${post.title}</h3>
                <p class="article__text">${post.body}</p>
                <a href="/${post.id}" class="article__link">download profile</a>
            </div>
        </article>
    `;
        workContainer.appendChild(postEl);
    });
}
//Show initial posts
showPosts();
showWorks();
// var oReq = new XMLHttpRequest();
// oReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
//
// oReq.responseType = "json";
// let resp = oReq.response
// console.log(resp);
// oReq.send();
// console.log('start')
// setTimeout(() => console.log('middle'), 2000)
// console.log('end')