import Light from "../ui/Light";
import Room from "../ui/Room";
import Ac from "../ui/Ac";
import Features from "./Features";

import { useState } from "react";
import useInterval from "../hooks/use-interval";


const SmartHome = (props) => {
    let [actions, setActions] = useState({
        lightState: false,
        acState: false,
        textToUpdate: "Text to update",
    });

    const [roomActions, resetRoomActions] = useInterval(2000, 0);
    const [childRoomActions, resetChildRoomActions] = useInterval(500, 0.3);

    /**
     * Use effect model
     */
    // useEffect(()=> {
    //   console.log('Effect triggered');
    //   return () => {
    //     console.log('Component unmount')
    //   }
    // },[actions.lightState]);

    const toggleLights = () => {
        // setLightState(!lightState);
        // setLightState( (prevState) => {
        //   return !prevState;
        // });
        // setActions({...actions, lightState: !actions.lightState});
        setActions((prevState) => {
            const newState = {
                ...prevState,
                lightState: !prevState.lightState,
            };
            return newState;
        });
    };

    // const logSomething = () => {
    //     const person = {
    //         name: "Sergiu",
    //         address: {
    //             city: "Brasov",
    //         },
    //         age: 30,
    //         // name: 'Andrei'
    //         // name: "Raymond",
    //         // nam: "Anca",
    //         // name: "SSS",
    //     };

    //     const newPerson = { ...person, name: "Andrei", sex: "male" };
    //     console.log(person);
    //     console.log(newPerson);
    // };

    // const dirtInterval = setInterval(() => {
    //   setActions((prevState) => {
    //     return {
    //       ...prevState,
    //       dirtProgress: prevState.dirtProgress + 0.1,
    //     };
    //   });
    // }, 2000);

    // console.log(actions.dirtProgress);

    const startCleaning = () => {
        resetRoomActions();
        resetChildRoomActions();
    };

    const toggleAc = () => {
        setActions((prevState) => {
            return { ...prevState, acState: !prevState.acState }
        });
    }

    const toggleActionHandler = (name) => {
        switch (name) {
            case "Toggle Lights":
                toggleLights();
                break;
            case "Clean":
                startCleaning();
                break;
            case 'Toggle AC':
                toggleAc();
                break;
            default:
                break;    
        }
    };

    //  Daca incercam sa ne folosim de variabile care nu sunt setate in state
    // pagina nu va fi actualizata

    // let test = 'Test update';

    // const tryToUpdate = () => {
    //     // actions.textToUpdate = 'Text updated after the button was clicked';

    //     // Daca avem si alte lucruri care depind de schimbarile astea, 
    //     // s-ar putea sa nu fie actualizate in timp util

    //     // setActions({
    //     //   lightState: false,
    //     //   acState: false,
    //     //   dirtProgress: 0,
    //     //   cleaned: 0,
    //     //   textToUpdate: 'Text updated after the button was clicked'
    //     // });

    //     // Daca avem si alte lucruri care depind de schimbarile astea, 
    //     // s-ar putea sa nu fie actualizate in timp util
    //     // setActions({
    //     //   ...actions,
    //     //   textToUpdate: "Text updated after the button was clicked",
    //     // });

    //     setActions((prevState) => {
    //         return {
    //             ...prevState,
    //             textToUpdate: "Text updated after the button was clicked"
    //         }
    //     });
    // };

    // const logSomethingElse = () => {
    //   console.log('Something');
    // }



// <> echivalent cu React.Fragment
    return <> 
        <div className="uiFeatures">
            <Light lightsOn={actions.lightState} />
            <Room status={roomActions.dirtProgress} />
            <Room status={childRoomActions.dirtProgress} />
            <Ac acIsOn={actions.acState}></Ac>
        </div>
        <Features toggleAction={toggleActionHandler} newFeature={props.newFeature} />
        {/* <button onClick={logSomething}>Detailed destructuring</button> */}
    </>
}

export default SmartHome;