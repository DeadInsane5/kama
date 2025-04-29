import React from 'react'

const CardSwipe = () => {
  return (
    <div className='card-swipe-container w-full h-full flex flex-col justify-center items-center'> 
        <img src="https://placehold.co/300x500" alt="" className="profile-img m-12 rounded-3xl" />
        <div className="card-swipe flex justify-center items-center gap-8">
            <button className="swipe-left w-20 h-20 bg-white rounded-full shadow-2xl ">
                <img src="src\assets\icons\cross.png" alt="" />
            </button>
            <button className="swipe-left w-20 h-20 p-6 bg-white rounded-full shadow-2xl ">
                <img src="src\assets\icons\like.png" alt="" />
            </button>
        </div>
    </div>
  )
}

export default CardSwipe