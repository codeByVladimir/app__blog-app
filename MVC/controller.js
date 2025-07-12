class Controller{
    constructor(){
        this.model = new Model();
        this.view = new View();
    }
    init(){
        this.view.button.addEventListener('click', () => {
            this.model.subscribe(() => {
                console.log('Новый пост');
            })
            this.model.newPost(this.view.getPost())
            this.view.renderPost(this.model.posts)
        })
    }
}