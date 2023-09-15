import {PiCurrencyDollarLight} from 'react-icons/pi'
import {BsBook} from 'react-icons/bs'

const Course = ({course,courseRegistration}) => {
    const {course_name,credit,description,image,price,id } = course;
  return (
    <div>
        <div className="card p-3 bg-base-100 shadow-xl">
            <figure><img className="h-[200px] rounded-md" src={image} alt={course_name} /></figure>
            <div className="card-body p-0 m-0">
                <h2 className="card-title text-xl pt-2 font-semibold">{course_name}</h2>
                <p className='text-sm font-normal text-gray-500'>{description}</p>
                <div className="card-actions items-center px-2 justify-end">
                    <PiCurrencyDollarLight className='text-black' />
                    <p className='text-gray-500 text-base font-medium'>Price : {price}</p>
                    <BsBook className='text-black'  />
                    <p className='text-gray-500 text-base font-medium'>Credit : {credit}hr</p>
                </div>
                <button onClick={ () => courseRegistration(course)} className="btn btn-primary font-semibold text-white">Select</button>
            </div>
            </div>
    </div>
  )
}

export default Course