import './App.css';
import Login from './pages/login'
import FormRegister from './pages/formRegister'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Style from './styles/styleLogin.css'
import Style2 from './styles/formRegister.css'
import Validation from './js/validations'

function App() {
  return (
    <div className="App">

      
      <Navbar/>
        <Login/>
        {/* <FormRegister/> */}
      

    </div>
  );
}

export default App;
