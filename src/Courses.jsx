/* eslint-disable react/prop-types */
import Course from "./Course"


const Courses = ({courses,courseRegistration}) => {

  return (
    <div className="flex-1">
      <div className="grid mx-2 md:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
          courses?.map((course,index) =>(
            <Course course={course} courseRegistration={courseRegistration}  key={index}/>
          ))
        }       
      </div>
    </div>
  )
}

export default Courses