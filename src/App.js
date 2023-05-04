
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SearchPage from './Components/SearchPage';
import ResultPage from './Components/ResultPage';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <>
    <body>
    <div className="App">
    <div>
      <Header/>
    </div>
    <div className='content'>
      <Router>
      <Routes>
        <Route exact path="/" element={<SearchPage />} />
        <Route path="/users/:username" element={<ResultPage />} />
      </Routes>
      </Router>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
    </body>
    </>
  );
}

export default App;
