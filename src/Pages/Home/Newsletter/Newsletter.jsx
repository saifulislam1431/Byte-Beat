import React from 'react';

const Newsletter = () => {
    return (
<section className='my-10 flex items-center justify-center'>
<div>
<div>
<h1 className='text-center text-secondary font-bold text-4xl brand-title mb-5'>Enter your email address and get regular update from us.</h1>
</div>
<div className='mt-10 flex flex-col lg:flex-row justify-center items-center gap-8 shadow-lg py-10 w-fit px-10 mx-auto rounded-md'>
<input type="email" placeholder='Email Address' className='w-full lg:w-96 border border-primary placeholder:text-sm placeholder:font-semibold focus:outline-secondary py-2 px-10 rounded-lg'/>
<button className='py-2 px-8 border border-primary rounded-md font-bold text-white bg-primary hover:bg-transparent hover:text-primary'>Notify Me</button>
</div>
</div>
</section>
    );
};

export default Newsletter;