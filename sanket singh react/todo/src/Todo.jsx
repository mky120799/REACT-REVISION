import TodoList from './TodoList';
const Todos = () => {

    todos = [
    {id:1,data:'Todo 1'},
    {id:2,data:'Todo 2'},
    {id:3,data:'Todo 3'},
    {id:4,data:'Todo 4'}, 
    {id:5,data:'Todo 5'},
    {id:6,data:'Todo 6'},]
    return(
        <div>
            <TodoList todos></TodoList>
        </div>
    )

}

export default Todos;