import React from 'react'

function Greeting(props) {

    const date = new Date().getHours();
    let message = ""
    if(date<12){
        message = "Good morning";
    }
    else if(date < 17){
        message = "Good afternoon";
    }
    else{
        message = "Good evening"
    }

  return (
    <div className='bg-gray-700 text-stone-200 p-4 rounded-lg text-center text-2xl font-bold shadow-lg shadow-gray-800/50'
    >{message }, { props.name }</div>
  )
}

export default Greeting