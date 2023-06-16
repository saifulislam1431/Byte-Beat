import React, { useEffect, useState } from 'react';

const Update = () => {
    const [events , setEvents] = useState([]);
    useEffect(()=>{
        fetch("events.json")
        .then(res=>res.json())
        .then(data=>setEvents(data))
    },[]);
    
    return (
        <section className='flex justify-center items-center my-14'>
            <div className='text-center space-y-5 mb-3'>
<div>
<h1 className='text-secondary font-bold text-4xl brand-title mb-5'>Upcoming Events</h1>
<p className='font-semibold'>Stay updated with the latest and most exciting upcoming events in the programming world. Discover conferences, workshops, webinars, hackathons, and more that cover a wide range of programming languages, frameworks, and technology topics. </p>
</div>


<div className='mt-6'>
{
    events.map(pEvent=> <div className='mt-5 flex items-center justify-center gap-4' key={pEvent.id}>

<div className='h-16'>
   <p className='font-bold text-error'>{pEvent.date}</p> 
   <p className='uppercase font-semibold text-sm w-20'>{pEvent.month}</p> 
</div>

<div className='text-left'>
<h1 className='font-bold text-lg text-primary'>{pEvent.name} || {pEvent.location}</h1>
<h1 className='font-medium'>{pEvent.description}</h1>
</div>

    </div>)
}
            </div>
            </div>
          
        </section>
    );
};

export default Update;