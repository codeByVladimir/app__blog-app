class View{
    constructor(){
        this.title = document.querySelector('.write__title');
        this.post = document.querySelector('.write__post');
        this.button = document.querySelector('.createPost');
        this.postsList = document.querySelector('.post-lists');
    }
    getPost(){
        return {
            title: this.title.value,
            post: this.post.value
        }
    }
    renderPost(posts){
        posts.forEach(post => {
            this.postsList.innerHTML += `
            <li class="post">
                <p class=""post-title>${post.title}</p>
                <p class=""post-title>${post.post}</p>
            </li>
            `
        });
    }
    

}