//import logo from './logo.svg';
import './App.css'; 
import Navbar from './component/Navbar/navbar.js';
import Cover from './component/Cover/cover.js';
import Intro from './component/Intro/intro.js';
import Service from './component/Services/service.js';

function App() {
  return (
  <div>
    <Navbar/>
    <Cover/>
    <Intro/>
    <Service/>
  </div>
    

  );
}

export default App;
