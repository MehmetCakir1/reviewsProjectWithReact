import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from './components/Header';
import Reviews from './components/Reviews';

const App = () => {
  return (
    <div className='row'>
      <Header/>
      <Reviews/>
    </div>
  )
}

export default App