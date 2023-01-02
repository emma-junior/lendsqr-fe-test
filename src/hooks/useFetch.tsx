import {useState, useEffect} from 'react'


const useFetch = (id:string) => {
    const url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`;
    const [data, setData] = useState(null);
    const [isloading, setIsloading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch your data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsloading(false);
        setIsError(null);
      })
      .catch((err) => {
        setIsloading(false);
        setIsError(err.message);
      });
  }, [id,url]);
  return { data, isloading, isError };
}

export default useFetch