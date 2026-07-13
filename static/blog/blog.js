const   template = document.getElementById("blog_post_template");
const  string_template = template.outerHTML;
const blog_grid = document.getElementById("blog_grid");

async function fetchJSONData() {
    fetch('blog.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {console.log(data); populatePosts(data);})
        .catch(error => console.error('Failed to fetch data:', error));
}



window.onload = async function() {
  console.log("OnLOAD");   
fetchJSONData() ;
};

function populatePosts(data) {
    console.log(template);

    for (let post of data) {
        console.log(post);
        const clone = document.importNode(template.content, true);
        let img = clone.getElementById("img");
        console.log(img);


        let tag = clone.getElementById("tag");
        let title = clone.getElementById("title");
        let excerpt = clone.getElementById("excerpt");
        let content = clone.getElementById("content");
        let meta = clone.getElementById("meta");
        img.src = post.img;
        tag.innerHTML = post.tag;
        title.innerHTML = post.title;
        excerpt.innerHTML = post.excerpt;
        content.innerHTML = post.content;
        meta.innerHTML = post.meta;

//        console.log("blog "+blog_grid);
        blog_grid.appendChild(clone);


        // let new_post = string_template.replace("@img", post.image);
        // new_post = new_post.replace("@tag", post.tag);
        // new_post = new_post.replace("@title", post.title);
        // new_post = new_post.replace("@excerpt", post.excerpt);
        // new_post = new_post.replace("@content", post.content);
        // new_post = new_post.replace("@meta", post.meta);
    }
}


function togglePost(card) {
    console.log("toggle");
    console.log(card.classList);
   // const wasOpen = card.classList.contains('card_open');
    
    let excerpt = card.querySelector(".blog-card__excerpt");
    let content = card.querySelector(".blog-card__content");
    let thumb = card.querySelector(".blog-card__thumb--sm");
    const wasOpen = content.classList.contains('open');


    if (wasOpen) { 
        excerpt.classList.remove('hidden');
         thumb.classList.remove('open');
        content.classList.remove('open');
       // card.classList.add('card_open')
    } else {
        excerpt.classList.add('hidden');
         thumb.classList.add('open');
        content.classList.add('open');
        //card.classList.remove('card_open');
    }
    console.log(card.classList);
}






const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    console.log("menuToggle clicked");
    navLinks.classList.toggle('active');
});