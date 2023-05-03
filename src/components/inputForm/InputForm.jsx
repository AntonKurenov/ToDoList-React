import './inputForm.scss'
import {useState} from "react";

const InputForm = () => {

	const [count, setCount] = useState(0);

	const press = (e) => {
		setCount(count + 1);
		console.log(count);
		// console.log(e.target);
	}

	return (
		<form className="input-form">
			<div className="input-form__content">
				<input type="text" className="input-form__input" placeholder="Input new To-Do here..."/>
			</div>
			<input type="button" onClick={press} className="input-form__button" value="add To-Do"/>
		</form>
	);

}

export default InputForm;