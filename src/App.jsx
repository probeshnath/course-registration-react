import './App.css'
import Courses from './Courses'
import Registration from './Registration'
import { useEffect, useState } from "react"

function App() {
 
  const [courses, setCourses] = useState([])
  const [cartItem, setCartItem] = useState([])

  useEffect(()=>{
    fetch("data.json")
    .then( res => res.json())
    .then(data => setCourses(data))
  },[])

  const courseRegistration = (course) =>{
    setCartItem([...cartItem ,course]);
  }

  return (
    <>
      <div className="">
        <h2 className="text-center text-3xl font-bold pt-8 pb-3" >Course Registration</h2>

        {/* course and cart container */}
        <div className="flex gap-3">

          {/* course  */}
          <Courses courses={courses} courseRegistration={courseRegistration} />
          {/* cart */}
          <Registration cartItem={cartItem} />
        </div>
      </div>
    </>
  )
}

export default App
