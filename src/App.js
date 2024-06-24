
import './App.css';
import RocketList from './components/RocketList';


function App() {
  const filterParams = {
    year:2018,
    customerName: 'NASA'
  };
  return (
    <div className="App">
    <RocketList filterParams={filterParams} />
    </div>
  );
}

export default App;
