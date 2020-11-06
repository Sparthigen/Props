import Profile from './profile/Profile.js';
import './App.css';
import Pilot from '../src/profile/Pilot.png'



function App() {
  const Alert = () => alert('Ahmed Dhaouadi')
  return (
    <div>


      <Profile FullName='Ahmed Dhaouadi'  profession='Helicopter Pilot' bio='Welcome to my Blog' alert={Alert}>

        <img style={{ borderRadius: '5px', opacity: '80%' }} src={Pilot} alt="not really me" />
       
      </Profile>


    </div>
  );
}


export default App;
