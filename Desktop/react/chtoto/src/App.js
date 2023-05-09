import './App.css';
import Login from './components/login';
import Registration from './components/registration';

function App() {
  return (<div className="App">
    <div className="header">
      <p>Login</p>
      <p>Registration</p>
    </div>
    <div className="main">
      <div className="main1"><Login /></div>
      <div className="main2"><Registration /></div>
    </div>
  </div>)
}

export default App;