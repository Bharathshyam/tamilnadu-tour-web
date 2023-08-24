
import './App.css';
import Chennais from './components/Chennais';
import Descripe from './components/Descripe';
import Header from './components/Header';
import Hogenakkal from './components/Hogenakkal';
import Kanyakumari from './components/Kanyakumari';
import Kodaikanal from './components/Kodaikanal';
import Kumbakonam from './components/Kumbakonam';
import Madurai from './components/Madurai';
import Ooty from './components/Ooty';
import Rameshwaram from './components/Rameshwaram';
import Theni from './components/Theni';
import TopBar from './components/TopBar';
import Yarcaud from './components/Yarcaud';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header/>
      <Descripe/>
      <Chennais/>
      <Kodaikanal/>
      <Madurai/>
      <Kumbakonam/>
      <Theni/>
      <Rameshwaram/>
      <Ooty/>
      <Kanyakumari/>
      <Yarcaud/>
      <Hogenakkal/>
    </div>
  );
}

export default App;
