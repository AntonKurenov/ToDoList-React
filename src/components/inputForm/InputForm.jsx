import './inputForm.scss'

function InputForm() {
	return (
		<form className="input-form">
			<div className="input-form__content">
				<input type="text" className="input-form__input" placeholder="Input new To-Do here..."/>
			</div>
			<input type="submit" className="input-form__button" value="add To-Do"/>
		</form>
	);
	
}

export default InputForm;