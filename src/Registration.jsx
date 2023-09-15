/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"

const Registration = ({cartItem}) => {
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [price, setPrice] = useState(0);
  const [credit, setCredit] = useState(0)

  useEffect(() => {
    let totalPrice = 0;
    let totalCredit = 0;

    cartItem.forEach((cart) => {
      const cartPrice = cart.price;
      const cartCredit = cart.credit;

      totalPrice += cartPrice;
      totalCredit += cartCredit;
    });

    setPrice(totalPrice);
    if(totalCredit > 20){
      return console.log("you cross your credit limit")
    }
    setCredit(totalCredit);

    // Calculate remaining credit hours based on the initial value of 20 and subtracting totalCredit
    const remainingCredit = 20 - totalCredit;
    if(remainingCredit <= 0){
     return console.log("you have no remaining hour")
    }
    setRemainingCredit(remainingCredit);
  }, [cartItem]);




  // console.log(cartItem)
  return (
    <div className="egistration-container">
      <div className="bg-white p-5 rounded-md">
        <h4 className="text-lg font-bold text-blue-700 pb-2">Credit Hour Remaining {remainingCredit}hr</h4>
        <hr />
        <h3 className="text-lg font-bold py-1">Course Name</h3>
        <ol className="pb-2">
          {
            cartItem.map((item,index)=>(
               <li key={index} className="text-gray-500 text-sm pb-1">{index + 1} {item.course_name} </li>
            ))
          }
        </ol>
        <hr />
        <h4 className="text-base text-gray-600 font-medium py-3">Total Credit Hour : {credit}</h4>
        <hr />
        <h2 className="font-semibold text-gray-800 py-3">Total Price : {price} USD</h2>
      </div>
    </div>
  )
}

export default Registration