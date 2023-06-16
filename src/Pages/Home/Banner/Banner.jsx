import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import useBlog from '../../../Hooks/useBlog';
import { HiOutlineClock, HiOutlineCode } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";
import moment from 'moment/moment';

const Banner = () => {
    const [blogs] = useBlog()
    return (
<Carousel showArrows={true} autoPlay={true} showThumbs={false} infiniteLoop={true}>

{
    blogs.slice(0,3).map(blog=><div key={blog.id} className="hero my-20 shadow-md">
    <div className="hero-content flex-col lg:flex-row-reverse gap-10">
      <img src={blog.image} className="max-w-lg rounded-lg shadow-2xl" />
      <div className='text-left relative'>
        <div>
        <h1 className="text-5xl mt-10 font-bold text-secondary">{blog.title}</h1>
        <p className="py-6">{(blog.content).slice(0,150)}...</p>
        </div>
        <div>
        <div className="badge badge-success badge-outline absolute top-0 font-semibold"><HiOutlineCode className='h-5 w-5 mr-1'/> {blog.segment}</div>
        <div className='mt-3 inline-flex gap-10 items-center'>
<p className='inline-flex items-center gap-2 text-sm font-medium'><HiCalendarDays className='h-6 w-6 text-gray-500'/> {moment(blog.date).format('MMMM Do YYYY')}</p>

<p className='inline-flex items-center gap-2 text-sm font-medium'><HiOutlineClock className='h-6 w-6 text-gray-500'/> {blog.readTime}</p>
        </div>
        </div>
      </div>
    </div>
  </div>)
}

   

            </Carousel>


    );
};

export default Banner;