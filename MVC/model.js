class Model{
    constructor(){
        this.posts = [],
        this.notify = null
    }
    newPost({title, post}){
        this.posts.push({title, post})
        console.log(this.posts);
        if(this.notify){
            this.notify()
        }
    }
    subscribe(callback){
        this.notify = callback;
    }
}