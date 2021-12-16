import './normalize.css'
import Header from './components/header/Header'
import List from './components/list/List'
import Login from './components/login/Login'
function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <List />
    </div>
  );
}

export default App;
