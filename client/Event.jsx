import React, { useEffect } from 'react';

const Event = props => {
  // console.log(props.eventList)

  return(
    <div className="eventBox">
      <div className='eventTitle'>
        <h1>{props.info.name}</h1>
      </div>
      <div className='eventImg'>
        {/* <span>{props.info.description}</span> */}
        <img src={props.info.img}></img>
      </div>
      <div className='eventInfo'>
          {props.info.description}
      </div>
    </div>
  )
}

export default Event;