/**
 * The styling for this component is written in App.css
 */
import { useEffect, useState } from "react";
import Feature from "./Feature";
import FeaturesForm from "./FeaturesForm";

const Features = (props) => {
  const FEATURES = [
    {
      name: "Toggle Lights",
      action: "Turn the lights on",
      state: false,
      id: 0,
    },
    {
      name: "Toggle AC",
      action: "Turn the AC on",
      state: false,
      id: 1,
    },
    {
      name: "Clean",
      action: "Start Cleaning",
      state: false,
      id: 2,
    },
    {
      name: "Coffe time",
      action: "Make a coffee",
      state: false,
      id: 3,
    },
  ];

  let allFeatures = [...FEATURES];

  if (props.newFeature) {
    allFeatures = [props.newFeature, ...allFeatures];
  }

  const [features, setFeatures] = useState(allFeatures);

  // useEffect(() => {
  //   console.log("Use effect triggered");
  //   return () => {
  //     // Acest cod se va executa inaintea celui de mai sus, mai putin prima data
  //     console.log("Triggered before this effect, except the first time");
  //   };
  // }, [features[0].state]); // Fara nimic in arrayul de dependinte codul
  //  se va executa o singura data la randarea paginii

  // Fara arayul de dependinte ( fara []) codul se va executa la orice modificare

  // Orice informatie pe care o punem in arrayl de dependinte, de fiecare data cand se 
  // va schimba, se va reexecuta codul

  // console.log("Page rerendered");

  const toggleLights = (name) => {
    console.log(localStorage.getItem('localStorageTest'));
    console.log(sessionStorage.getItem('sessionStorageTest') || '');
    props.toggleAction(name);
    setFeatures((prevState) => {
      const newState = prevState.map((feature) => {
        if (feature.name === "Toggle Lights") {
          feature.state = !feature.state;
          feature.action = `Turn the lights ${feature.state ? "off" : "on"}`;
        }
        return feature;
      });
      return newState;
    });
  };

  const startCleaning = (name) => {
    props.toggleAction(name);
  };

  const toggleAc = (name) => {
    props.toggleAction(name);
    setFeatures( prevState => {
      return prevState.map(feature => {
        if (feature.name === 'Toggle AC') {
          feature.state = !feature.state;
          feature.action =  `Turn the Ac ${feature.state ? "off" : "on"}`;
        }
        return feature
      });
    });
  }

  const toggleTheAction = (name) => {
    switch (name) {
      case "Toggle Lights":
        toggleLights(name);
        break;
      case "Clean":
        startCleaning(name);
        break;
      case 'Toggle AC':
        toggleAc(name);
        break;
    }
  };

  return (
    <div className="container">
      <div className="features">
        {features.map((feature) => {
          return (
            <Feature
              name={feature.name}
              action={feature.action}
              key={feature.id}
              toggleAction={toggleTheAction}
            />
          );
        })}
        {/* <Feature name={FEATURES[0].name} action={FEATURES[0].action}/>
        <Feature name={FEATURES[1].name} action={FEATURES[1].action}/>
        <Feature name={FEATURES[2].name} action={FEATURES[2].action}/>
        <Feature name={FEATURES[3].name} action={FEATURES[3].action}/> */}
      </div>
      
    </div>
  );
};

export default Features;
