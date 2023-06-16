import React, { useEffect, useState } from 'react';
import { HiBriefcase, HiCreditCard } from 'react-icons/hi';
import { HiBanknotes, HiOutlineHome, HiPlayCircle } from 'react-icons/hi2';

const Jobs = () => {
    const [jobs , setJobs] = useState([]);
    useEffect(()=>{
        fetch("jobs.json")
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <section className='flex items-center justify-center'>
            <div>
            <div className='text-center'>
<h1 className='text-secondary font-bold text-4xl brand-title mb-5'>Jobs Opportunity</h1>
<p className='font-semibold'>Explore exciting job opportunities in the programming field through our comprehensive job board. Discover a wide range of job listings for programmers, developers, and technology enthusiasts.</p>
</div>

<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-14'>
{
jobs.map(job=><div key={job.id} className='p-5 rounded-lg shadow'>

<h1 className='font-bold text-lg text-primary'>{job.title}</h1>
<h1 className='font-bold text-gray-400'>{job.company}</h1>

<p className='inline-flex items-center gap-2 mt-6 font-bold'><HiOutlineHome className='h-7 w-7 text-gray-600'/> {job.remote}</p>

<div className='flex flex-col lg:flex-row justify-between mt-8 space-y-7 lg:space-y-0'>
    <div>
        <p className='inline-flex items-center gap-2 text-sm font-bold text-gray-600'><HiPlayCircle className='h-5 w-5'/>START DATE</p>
        <p className='font-bold text-gray-800'>{job.startDate}</p>
    </div>
    <div>
        <p className='inline-flex items-center gap-2 text-sm font-bold text-gray-600'><HiBanknotes className='h-5 w-5'/>CTC</p>
        <p className='font-bold text-gray-800'>{job.salaryRange}</p>
    </div>
    <div>
        <p className='inline-flex items-center  gap-2 text-sm font-bold text-gray-600'><HiBriefcase className='h-5 w-5'/>START DATE</p>
        <p className='font-bold text-gray-800'>{job.experience}</p>
    </div>
</div>

<div className="divider"></div> 

<div className='inline-flex items-center gap-6'>
<h1 className='font-semibold text-primary'>View Details</h1>
<button className='bg-primary px-5 py-2 rounded-md font-semibold text-white'>Apply Now</button>
</div>

</div>)
}
</div>
            </div>
        </section>
    );
};

export default Jobs;