const todos = [];

window.onload = () => {
	const form = document.getElementById('todo-form');
	form.onsubmit = (e) => {
		e.preventDefault();
		const todo = document.getElementById('todo');
		const todoText = todo.value;
		todo.value = '';
		todos.push(todoText);
		const todoList = document.getElementById('todo-list');
		todoList.innerHTML = '';
		for(let i = 0; i< todos.length; i++){
			if(todos[i] != ''){
				todoList.innerHTML = todoList.innerHTML  + '<li>' + todos[i] + '/<li>';
			}
		}
	}
}
/*
window.onload = () => {	
console.log("utilizando js")
const parrafo= document.getElementById("parrafo")
console.log(parrafo.innerHTML)
console.log(parrafo.innerText)
parrafo.innerText="Nuevo Texto"
}
*/