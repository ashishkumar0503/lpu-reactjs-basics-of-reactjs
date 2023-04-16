import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setRecords(data))
        .catch(err => console.error(err))
    }, [])

    console.table(records);

  return (
    <div>
        <ul>Fetched Data from an API: 
            {
                records.map((list, index) => (
                    <li key={index}>{list.id} | {list.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Fetch