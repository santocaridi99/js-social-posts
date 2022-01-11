//creo array di post
const library = [
    {
        id:1,
        name:'Anonimo',
        photo:'https://unsplash.it/300/300?image=15',
        data:new Date().toLocaleDateString(),
        testo:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image:'https://i.picsum.photos/id/846/300/300.jpg?hmac=Lcv_XGZdWfJT0vkZ1MfderxrWggaRSl2sgQbDrEfqUU',
        likes:80,
    },
    {
        id:2,
        name:'Anonimo2',
        photo:'https://i.picsum.photos/id/96/300/300.jpg?hmac=El5Y-JrwVDoOqzkfDHD1AEZvyGBjFSdFei7hDzhnaEE',
        data:new Date().toLocaleDateString(),
        testo:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image:'https://i.picsum.photos/id/969/300/300.jpg?hmac=qLL7hRFTPtaVajdo36mDSxKq3OwYm3wuDUu83PuHHzI',
        likes:40,
    },
    {
        id:3,
        name:'Anonimo3',
        photo:'https://i.picsum.photos/id/928/300/300.jpg?hmac=QWFJOwXiovf5nsBF_GT3zPKfE-W2vrteEo3m0NcfYCM',
        data:new Date().toLocaleDateString(),
        testo:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image:'https://i.picsum.photos/id/126/300/300.jpg?hmac=FwP550z8RMpf41ekR8IF3pVdJw9yp1itx2Owoexeing',
        likes:65,
    },
] 
//collego il contenitore dei post
const postContainer = document.querySelector('.posts-list');
//creo una function che mi permette di creare i post
function createPost (container , librayList){
    //ciclo for che scorre tutto l'array e dove ricavo i dati da mandare all'html
    for(let i=0 ;i<librayList.length ; i++){
        //assegno a variabile post  valore nell'indice attuale nell arrary
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
                            <a class="like-button  js-like-button" href="#${post.id}" data-postid="${post.id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div> 
        `
    }
}
//creo i post
createPost(postContainer,library);
//collego a tutti i like botton
let postButton = document.querySelectorAll('.like-button')
//dichiaro array dove metterò id dei post che ho messo like
let likeList=[];
//rifaccio un for che andrà da 0 a array di postbutton che è la lista di tutti i bottoni
for(let i=0;i<postButton.length;i++){
    //per ogni bottone avrò un addEventlistener
    postButton[i].addEventListener('click',function(){
        //dichiaro una variabile contatore che si attaccherà per id all'like counter con il relativo id
       let counter=document.getElementById(`like-counter-${library[i].id}`);
       //incremento il valore likes degli oggetti ad ogni click del relativo pulsante 
       library[i].likes++;
       //modifico innerhtml di counter con nuovo valore incrementato sopra
       counter.innerHTML=library[i].likes;
       //per ogni bottone aggiungo (liked  button)
       postButton[i].classList.add('like-button--liked');
       //per prevenire doppi valori
       //se l'id del post cliccato non è presente nella lista dei piaciuti  
       //quando clicchiamo avrò che 
       if(likeList.includes(library[i].id)===false){
           //allora i likes sono quelli incrementati - 2  quando non presente nella lista
           library[i].likes=library[i].likes - 2;
           //successivamente se non incluso e cliccato dovrà essere pushato
           likeList.push(library[i].id);
        }else{
            //se clicciamo ed è già presente nella lista dei piaciuti  allora lo eliminiamo
           likeList.pop(library[i].id);
           //rimuoviamo pure il like 
           postButton[i].classList.remove('like-button--liked');
        }
       
    })

}