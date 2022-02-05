import './App.css';
import Card from './Card';
import NavBar from './NavBar';
import Header from './Header';
import Login from './Login';

function App() {
  const { mode, renderHeader } = Header();
  return (
    // <div className="App">
    //   {renderHeader}
    //   <Card mode={mode} />
    //   {mode === 'card' && <NavBar />}
    // </div>
    <Login/>
  );
}

export default App;
