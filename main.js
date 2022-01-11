//creo array di post
const library = [
    {
        id:1,
        name:'Anonimo',
        photo:'https://unsplash.it/300/300?image=15',
        data:'(11/01/2022)',
        testo:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image:'https://unsplash.it/600/300?image=171',
        likes:80,
    },
    {
        id:2,
        name:'Anonimo2',
        photo:'https://unsplash.it/300/300?image=15',
        data:'(11/01/2022)',
        testo:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image:'https://unsplash.it/600/300?image=171',
        likes:40,
    },
    {
        id:3,
        name:'Anonimo3',
        photo:'https://unsplash.it/300/300?image=15',
        data:'(11/01/2022)',
        testo:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image:'https://unsplash.it/600/300?image=171',
        likes:65,
    },
] 
//collego il contenitore dei post
const postContainer = document.querySelector('.posts-list');
//creo una function che mi permette di creare i post
function createPost (container , librayList){
    //ciclo for che scorre tutto l'array e dove ricavo i dati da mandare all'html
    for(let i=0 ;i<librayList.length ; i++){
        const post=librayList[i];
        container.innerHTML+=`
                <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${post.photo}" alt="${post.name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${post.name}</div>
                            <div class="post-meta__time">${post.data}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${post.testo}</div>
                <div class="post__image">
                    <img src="${post.image}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="${post.id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div> `

    }
}

createPost(postContainer,library);
