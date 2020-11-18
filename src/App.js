import Routes from './routes';

import Header from './components/Header';
import Main from './pages/main';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
