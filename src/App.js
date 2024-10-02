import logo from './logo.svg';
import './App.css';
import TopNav from './components/topNav/topNav'; // topNav.js 불러오기 
import Section01 from './components/section01/section01';
import Section02 from './components/section02/section02';


function App() {
  return (
    <>
      <TopNav></TopNav>
      <Section01></Section01>
      <Section02></Section02>

    </>
  );
}

export default App;
