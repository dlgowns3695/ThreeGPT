
import './App.css';
import TopNav from './components/topNav/topNav'; // topNav.js 불러오기 
import Section01 from './components/section01/section01';
import Section02 from './components/section02/section02';
import Section03 from './components/section03/section03';
import Section04 from './components/section04/section04';


function App() {
  return (
    <>
      <TopNav></TopNav>
      <Section01></Section01>
      <Section02></Section02>
      <Section03></Section03>
      <Section04></Section04>

    </>
  );
}

export default App;
