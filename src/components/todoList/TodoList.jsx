import './todoList.scss';

function TodoList(props) {
	let mockTodos = ['Learn JS', 'Learn React', 'Take a shower'];

	const todos = mockTodos.map((todo, index) =>
		<li key={index}>
			{todo}
		</li>
	);

	return (
		<>
			<div className="title">ToDo:</div>
			<ul>{todos}</ul>
		</>
	);
}

export default TodoList;