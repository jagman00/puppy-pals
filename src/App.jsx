import './App.css'
import { puppyList } from './data';
import { useState } from 'react';

function App() {

const [puppies, setPuppies] = useState(puppyList);
const [featPupId, setFeatPupId] = useState(null);
console.log("puppyList: ", puppies);
console.log(puppies);
console.log(setPuppies);


const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  return (
    <>
      <h1></h1>
      <div className="App">
    {
      puppies.map((puppy) => {
        return <p onClick={()=>{ setFeatPupId(puppy.id)}} key ={puppy.id}>{puppy.name}</p>
      })
    }
      </div>
      {featPupId && (
        <div className = "infor">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            <li>Owner ID: {featuredPup.ownerId}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App