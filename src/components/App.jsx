import './app.scss'
import Header from "./header/Header.jsx";
import InputForm from "./inputForm/InputForm.jsx";
import Footer from "./footer/Footer.jsx";
import TodoList from "./todoList/TodoList.jsx";

function App() {

	return (
		<>
			<Header/>
			<InputForm/>
			<TodoList/>
			<Footer/>
		</>
	)
}

export default App
