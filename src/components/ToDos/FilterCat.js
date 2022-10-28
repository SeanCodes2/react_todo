import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { boolean } from 'yup';

export default function FilterCat(props) {
    const [categories, setCategories] = useState([]);

    const callTwoFunctions = () => {
        props.setFilter(0)
        props.setDoneFilter('')
    }

    useEffect(() => {
        axios.get(`https://localhost:7026/api/Categories`).then(response => {
      console.log(response)
      setCategories(response.data)
    })
    }, []);

  return (
    <div className='text-center mt-5'>
        {/* <button onClick={() => props.setFilter(0)} className='btn btn-outline-info bg-dark m-1'>All</button> */}
        <button onClick={() => callTwoFunctions()} className='btn btn-outline-info bg-dark m-1'>All</button>

        <button onClick={() => props.setDoneFilter(boolean(true))} className='btn btn-outline-info bg-dark m-1'>Complete</button>

        <button onClick={() => props.setDoneFilter(boolean(false))} className='btn btn-outline-info bg-dark m-1'>Not Complete</button>

        {/* Below we map all the categories to a button that filters resources on that Category */}
        {categories.map(cat => 
            <button key={cat.categoryId} className='btn btn-outline-info bg-dark m-1' onClick={() => props.setFilter(Number(cat.categoryId))}>
                {cat.catName}
            </button>
        )}
    </div>)
  
}
