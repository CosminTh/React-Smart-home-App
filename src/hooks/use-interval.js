import { useState, useEffect } from "react";

const useInterval = (interval, initialDirtProgress) => {
    let [actions, setActions] = useState({
        dirtProgress: initialDirtProgress,
        cleaned: 0
    });

    useEffect(() => {
        const dirtInterval = setInterval(() => {
           setActions((prevState) => {
             if (prevState.dirtProgress > 1) {
               clearInterval(dirtInterval);
             }
             // console.log(prevState.dirtProgress);
             return {
               ...prevState,
               dirtProgress: prevState.dirtProgress + 0.1,
             };
           });
           return () => {
             clearInterval(dirtInterval);
           };
         }, interval);
       }, [actions.cleaned]);

       const resetCleaningStatus = () => {
        setActions((prevState) => {
            return {
                ...prevState,
                dirtProgress: 0,
                cleaned: prevState.cleaned + 1,
            };
        });
    };

    return [actions, resetCleaningStatus];
}

export default useInterval;