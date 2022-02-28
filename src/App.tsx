import Login from './pages/Login'
import './Style/App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <div>
          <Login />
          <LoginForm/>
      </div>
    </div>
  );
}

export default App;
