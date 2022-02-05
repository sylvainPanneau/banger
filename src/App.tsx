import './App.css';
import Card from './Card';
import NavBar from './NavBar';
import Header from './Header';

function App() {
  const { mode, renderHeader } = Header();
  return (
    <div className="App">
      {renderHeader}
      <Card mode={mode} />
      {mode === 'card' && <NavBar />}
    </div>
  );
}

export default App;
