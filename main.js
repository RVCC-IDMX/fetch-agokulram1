/* fetch.js */
let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
headers.append('Access-Control-Allow-Credentials', 'true');

//headers.append('GET', 'POST', 'OPTIONS');

/*fetch('https://unsplash.it/600/400', {mode: 'no-cors'})
.then(res => res.blob())
.then(blob => {
    let img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    document.querySelector('body').appendChild(img);
});*/


fetch('demo.json')
.then(res => {
    console.log(res);
    return res.json();
})
.then(json => console.log(json));
const postSection = document.querySelector('#posts');
const postTemplate = document.querySelector('#post-template');
getData();
async function getData(){
    const postStream = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postStream.json();
    let i = 0;
    
    const img = await fetch('https://unsplash.it/300/200', {headers: headers,
    mode: 'no-cors'});
    // console.log(posts);

    posts.forEach(post => {
        i++;
        if(i < 10){
        const title = post.title;
        const body = post.body;
        
        const newPost = document.importNode(postTemplate.content, true);
        const postTitle = newPost.querySelector
        ('.post__title');
        const postBody = newPost.querySelector
        ('.post__body');
        const postImg = newPost.querySelector('.post_img');

        postTitle.innerText = title;
        postBody.innerText = body;
        postSection.appendChild(newPost);
        }
    })
}