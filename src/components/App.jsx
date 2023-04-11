import './app.scss'
import Header from "./header/Header.jsx";
import InputForm from "./inputForm/InputForm.jsx";
import Footer from "./footer/Footer.jsx";

function App() {

  return (
    <>
      <Header/>
      <div className="main-part">
        <InputForm/>
        <div className="text">Hello World!!</div>
      </div>
      <Footer/>
    </>
  )
}

export default App
