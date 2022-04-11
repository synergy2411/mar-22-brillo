class Todo {
    todoList = [];
    addItem(item){
        this.todoList.push(item);
    }

    getItems(){
        return this.todoList;
    }

    removeItem(index){
        this.todoList.splice(index, 1)
    }
    resetTodoList () {
        this.todoList = [];
    }
}
module.exports = Todo;