import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import FeedIcon from '@mui/icons-material/Feed';


import "./App.scss";
import Wellcome from "./logic/Wellcome";
import SmartHome from "./logic/SmartHome";
import FeaturesForm from "./logic/FeaturesForm";
import useFetch from "./hooks/use-fetch";
import useAxios from "./hooks/use-axios";

function App() {
  // let [lightState, setLightState] = useState(false);
  // let [acState, setAcState] = useState(false);
  // let [dirtProgress, setDirtProgress] = useState(0.2);

  // console.log('App js rendered');

  const [users] = useFetch('https://reqres.in/api/users?page=2');
  const { data, loading, error } = useAxios('https://reqress.in/api/users?page=2');

  const [feature, setFeature] = useState({
    name: 'Toggle Warm Lights',
    action: 'Turn the warm lights on',
    state: false,
    id: 500
  });

  const updateFeatures = (newFeature) => {
    setFeature((prevState) => {
      return newFeature;
    });
  };

  const testLocalStorage = 'Acest test va aparea in local storage';
  const testSessionStorage = 'Acest test va aparea in session storage';

  const setStorage = () => {
    localStorage.setItem('localStorageTest', testLocalStorage);
    sessionStorage.setItem('sessionStorageTest', testSessionStorage);
  }

  const removeStorage = () => {
    // localStorage.removeItem('localStorageTest');
    // sessionStorage.removeItem('sessionStorageTest');
    localStorage.clear();
    sessionStorage.clear();
  }



  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <HomeIcon />
              <Link to='/wellcome'>Wellcome page</Link>
            </li>
            <li>
              <DevicesOtherIcon />
              <NavLink to='/smart-home'>Use Smart Home App</NavLink>
            </li>
            <li>
              <FeedIcon />
              <NavLink to='/features-form'>Create new smart home feature</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <button onClick={setStorage}>Set storage</button>
      <button onClick={removeStorage}>Remove storage</button>

      {/* <p>{actions.textToUpdate}</p> */}
      {/* <button onClick={tryToUpdate}>Update the text</button> */}
      {/* Daca punem parantezele () functia nu o sa fie data ca referinta ci o sa fie apelata */}
      {/* <button onClick={logSomethingElse()}>Log Something</button> */}


      <Routes>
        <Route path="/wellcome" element={<Wellcome></Wellcome>}></Route>
        <Route path="/smart-home" element={<SmartHome newFeature={feature}></SmartHome>}></Route>
        <Route path="features-form" element={<FeaturesForm
          updateTheFeatures={updateFeatures}
        ></FeaturesForm>}>
        </Route>
      </Routes>
      <div>Data With use fetch</div>
      {users && users.map(user => <div key={user.id}> {user.first_name} </div>)}
      <div>Data with use axios</div>
      {loading && <div>{loading}</div>}
      {error && <div>{error}</div>}
      {!loading && !error && data && data.map(user => <div key={user.id}> {user.first_name} </div>)}

      <div className="lights"></div>
    </div>
  );
}

export default App;
