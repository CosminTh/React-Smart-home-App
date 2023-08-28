import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url).then(response => {
          return response.json();
        }).then(data => {
            setData(data.data);
        });
      }, [url]);

      return [data]
}

export default useFetch;