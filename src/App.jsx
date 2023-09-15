import './App.css'
import Courses from './Courses'
import Registration from './Registration'
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
   
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [price, setPrice] = useState(0);
  const [credit, setCredit] = useState(0)
 
  const [courses, setCourses] = useState([])
  const [cartItem, setCartItem] = useState([])

  useEffect(()=>{
    fetch("data.json")
    .then( res => res.json())
    .then(data => setCourses(data))
  },[])

  const courseRegistration = (course) =>{
    let isExist = cartItem.find((item) => item.id === course.id)
    if(isExist){
      return toast.error("Already Exist this Course");
    }else{
      if(credit > 20){
       return toast.error("You have no credit")
      }else if(remainingCredit < 0){
        return toast.error("You have no remaining hours")
      }else if (credit + course.credit > 20) {
        return toast.error("This course would exceed the maximum credit limit");
      } else{
        
        toast.success("Course Registration Done !!")
        setCartItem([...cartItem ,course]);
      }
    }
   

  }



  useEffect(() => {
    let totalPrice = 0;
    let totalCredit = 0;

    cartItem.forEach((cart) => {
      const cartPrice = cart.price;
      const cartCredit = cart.credit;

      totalPrice += cartPrice;
      totalCredit += cartCredit;
    });

    
    if(totalCredit > 20){
      return toast.error("You have no cretit ")
    }
    setCredit(totalCredit);

    // Calculate remaining credit hours based on the initial value of 20 and subtracting totalCredit
    const remainingCredit = 20 - totalCredit;
    if(remainingCredit < 0){
       toast.error("you had spend your all credit and Now you are not remaining hours")
       return setRemainingCredit(0);
    }
    setRemainingCredit(remainingCredit);
    setPrice(totalPrice);
  }, [cartItem]);




  return (
    <>
      <div className="">
        <h2 className="text-center text-3xl font-bold pt-8 pb-3" >Course Registration</h2>
        {/* course and cart container */}
        <div className="flex gap-3">

          {/* course  */}
          <Courses courses={courses} courseRegistration={courseRegistration} />
          {/* cart */}
          <Registration 
            price={price} 
            credit={credit} 
            remainingCredit={remainingCredit} 
            cartItem={cartItem} />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
