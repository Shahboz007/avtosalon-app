import axios from "../api/axios";
import React, { useEffect } from 'react'
import CardList from './CardList'

const GET_URL = '/marka?limit=5&page=1';

function Home() {

  useEffect(() => {
    getData();
  },[])

  const getData = async() => {
    try{
      const response = await axios.get(GET_URL,{
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE4MzZmY2UxNzFkZTZjNWM5NjE4NzMiLCJwaG9uZU51bWJlciI6Iis5OTg5OTM0NjY3ODgiLCJpYXQiOjE2NjI1NzQ3NTgsImV4cCI6MTY2MzE3OTU1OH0.EPtYR-1mSY13c4ZHCNfa1x_RM3BvyGvuqzYRuRVofXU`
        }
      });
      console.log(response);
    }catch(err) {
      console.log(err);
    }
  }
  
  return (
    <div className='container'>
      <CardList />
    </div>
  )
}

export default Home