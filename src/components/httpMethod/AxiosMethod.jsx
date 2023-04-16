import React, { useEffect, useState } from 'react'
import Axios from 'axios';

const AxiosMethod = () => {

    const [myData, setData] = useState([]);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setData(response.data);
        });
    }, []);

  return (
    <div>
      <p>Fetched Data by using Axios</p>
      {
        myData.map((list, index) => (
          <li key={index}>{list.id} <br/> {list.name}</li>
        ))
      }
    </div>
  )
}

export default AxiosMethod