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
		const todosTemplate = todos.map(t => '<li>' + t + '</li>');
		/*
		const todosTemplate=todos.map(t =>{
			return '<li>' + t + '/<li>'
		})
		*/
		todoList.innerHTML = todosTemplate.join('');
		
		const elementos = document.querySelectorAll('#todo-list li')
		elementos.forEach((elemento, i) => {
			elemento.addEventListener('click',() => {
				console.log(elemento,i)
			})
		})	
		/*		
		for(let i = 0; i< todos.length; i++){
			if(todos[i] != ''){
				todoList.innerHTML = todoList.innerHTML  + '<li>' + todos[i] + '/<li>';
			}
		}
*/			}
}