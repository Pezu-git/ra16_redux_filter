import './App.css';
import ServiceList from './components/ServiceList';
import ServiceAdd from './components/SreviceAdd';
import ServiceFilter from './components/ServiceFilter';


function App() {
  return (
      <div className='card'>
        <ServiceAdd />
        <ServiceFilter/>
        <ServiceList/>
      </div>  
  );
}

export default App;