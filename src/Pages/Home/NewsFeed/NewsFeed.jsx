import React, { useEffect, useState } from 'react';
import { HiOutlineChevronDoubleDown, HiOutlineClock, HiOutlineCode } from 'react-icons/hi';
import useBlog from '../../../Hooks/useBlog';
import Newses from './Newses';
import { HiCalendarDays, HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import moment from 'moment';

const NewsFeed = () => {
    const [blogs] = useBlog();

    const [show , setShow] = useState(false)

    const [segments, setSegments] = useState("all")

    const [subSegments, setSubSegments] = useState(segments)

    const [AllBlog, setAllBlog] = useState([])

    const [featuredBlog , setFeaturedBlog] = useState([]);

    const [latestBlog , setLatestBlog] = useState([]);


    useEffect(()=>{
        const featured = blogs.filter(blog=>blog.category === "featured")
        setFeaturedBlog(featured)
            },[blogs])
        
            useEffect(()=>{
        const latest = blogs.filter(blog=>blog.category === "latest")
        setLatestBlog(latest)
            },[blogs])

    useEffect(() => {
        if (segments === "all") {
            fetch("data.json")
                .then(res => res.json())
                .then(data => {
                    const filteredData = data.slice(0, 15).map(blg => blg)
                    setAllBlog(filteredData)
                })
        }

        else{
            const filtered = blogs.filter(blog => blog.subSegments === subSegments)
            setAllBlog(filtered)
        }
    }, [subSegments ,segments, blogs])




    return (
        <section className='my-14'>
            <div className='tabs flex items-center justify-center'>
                <button className={`${segments === "all" ? "activeTab" : "tabBtn"}`} onClick={() => setSegments("all")}>All</button>


                <button className={`dropdown dropdown-hover ${segments === "Programming Languages" ? "activeTab" : "tabBtn"}`} onClick={() => setSegments("Programming Languages")}>Programming Languages <HiOutlineChevronDoubleDown className='h-5 w-5' />
                    <ul className="p-2 shadow menu dropdown-content bg-accent bg-opacity-90 top-0 right-0 rounded-box w-52 z-50">
                        <button onClick={() => setSubSegments("Python")} className={`${subSegments === "Python" ? "activeSubTab" : "subTabBtn"}`}>Python</button>

                        <button onClick={() => setSubSegments("JavaScript")} className={`${subSegments === "JavaScript" ? "activeSubTab" : "subTabBtn"}`}>JavaScript</button>

                        <button onClick={() => setSubSegments("Java")} className={`${subSegments === "Java" ? "activeSubTab" : "subTabBtn"}`}>Java</button>

                        <button onClick={() => setSubSegments("C#")} className={`${subSegments === "C#" ? "activeSubTab" : "subTabBtn"}`}>C#</button>

                        <button onClick={() => setSubSegments("Ruby")} className={`${subSegments === "Ruby" ? "activeSubTab" : "subTabBtn"}`}>Ruby</button>
                    </ul>
                </button>


                <button className={`dropdown dropdown-hover ${segments === "Web Development" ? "activeTab" : "tabBtn"}`} onClick={() => setSegments("Web Development")}>Web Development <HiOutlineChevronDoubleDown className='h-5 w-5' />
                    <ul className="p-2 shadow menu dropdown-content bg-accent bg-opacity-90 top-0 right-0 rounded-box w-52 z-50">
                        <button onClick={() => setSubSegments("Front-End Development")} className={`${subSegments === "Front-End Development" ? "activeSubTab" : "subTabBtn"}`}>Front-End</button>

                        <button onClick={() => setSubSegments("Back-End Development")} className={`${subSegments === "Back-End Development" ? "activeSubTab" : "subTabBtn"}`}>Back-End</button>

                        <button onClick={() => setSubSegments("Full-Stack Development")} className={`${subSegments === "Full-Stack Development" ? "activeSubTab" : "subTabBtn"}`}>Full-Stack</button>

                        <button onClick={() => setSubSegments("Web Frameworks")} className={`${subSegments === "Web Frameworks" ? "activeSubTab" : "subTabBtn"}`}>Frameworks</button>

                        <button onClick={() => setSubSegments("Web Security")} className={`${subSegments === "Web Security" ? "activeSubTab" : "subTabBtn"}`}>Security</button>
                    </ul>
                </button>


                <button className={`dropdown dropdown-hover ${segments === "Software Development" ? "activeTab" : "tabBtn"}`} onClick={() => setSegments("Software Development")}>Software Development <HiOutlineChevronDoubleDown className='h-5 w-5' />
                    <ul className="p-2 shadow menu dropdown-content bg-accent bg-opacity-90 top-0 right-0 rounded-box w-52 z-50">
                        <button onClick={() => setSubSegments("Agile Methodology")} className={`${subSegments === "Agile Methodology" ? "activeSubTab" : "subTabBtn"}`}>Agile Methodology</button>

                        <button onClick={() => setSubSegments("DevOps")} className={`${subSegments === "DevOps" ? "activeSubTab" : "subTabBtn"}`}>DevOps</button>

                        <button onClick={() => setSubSegments("Testing and QA")} className={`${subSegments === "Testing and QA" ? "activeSubTab" : "subTabBtn"}`}>Testing and QA</button>

                        <button onClick={() => setSubSegments("Version Control")} className={`${subSegments === "Version Control" ? "activeSubTab" : "subTabBtn"}`}>Version Control</button>

                        <button onClick={() => setSubSegments("Code Quality")} className={`${subSegments === "Code Quality" ? "activeSubTab" : "subTabBtn"}`}>Code Quality</button>
                    </ul>
                </button>



            </div>

            <div className="drawer lg:drawer-open my-14 ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10'>
    {
        AllBlog.map(singleBlog=><div key={singleBlog.id} className="hero shadow-md w-[350px] rounded-lg">
        <div className="hero-content flex-col gap-10 w-[320px]">
          <img src={singleBlog.image} className="w-[310px] h-[150px] rounded-lg shadow" />
          <div className='text-left relative'>
            <div>
            <h1 className="text-3xl mt-10 font-bold text-secondary">{singleBlog.title}</h1>
            <p className="py-6">{(singleBlog.content).slice(0,50)}...</p>
            </div>
            <div>
            <div className="badge badge-success badge-outline absolute top-0 font-semibold"><HiOutlineCode className='h-5 w-5 mr-1'/> {singleBlog.segment}</div>
            <div className='mt-3 inline-flex gap-10 items-center'>
    <p className='inline-flex items-center gap-2 text-sm font-medium'><HiCalendarDays className='h-6 w-6 text-gray-500'/> {moment(singleBlog.date).format('MMMM Do YYYY')}</p>
    
    <p className='inline-flex items-center gap-2 text-sm font-medium'><HiOutlineClock className='h-6 w-6 text-gray-500'/> {singleBlog.readTime}</p>
            </div>
            </div>
          </div>
        </div>
      </div>)
    }
    </div>
    {/* { !show && <div className='my-10'><button className='myBtn' onClick={()=>setShow(!show)}>Show All</button></div>} */}
    <label htmlFor="my-drawer-2" className="myBtn absolute top-0 left-2 drawer-button lg:hidden"><HiOutlineBars3CenterLeft className='h-7 w-7'/></label>
  
  </div> 
  <div className="drawer-side shadow-xl rounded-r-lg h-fit" >
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-100 text-base-content">
      {/* Sidebar content here */}
      <div className='my-5'>
<h1 className='text-primary font-bold text-2xl brand-title'>Featured Blogs</h1>
<div className='my-4'>
{
   featuredBlog.map(feature=><div key={feature.id} className='mt-10 flex items-center gap-6'>

<div>
<img src={feature.image} className="w-16 h-16 rounded-md" />
</div>

<div className='space-y-2'>

<h1 className="text-lg font-bold text-primary">{feature.title}</h1>

<p className='inline-flex items-center gap-2 text-sm font-medium'><HiOutlineClock className='h-6 w-6 text-gray-500'/> {feature.readTime}</p>   
</div>
   </div>)
}
</div>
      </div>

      <div className='my-5'>
      <h1 className='text-primary font-bold text-2xl brand-title'>Tags</h1>
      <div className='mt3'>
      <button onClick={() => setSubSegments("Python")} className={`${subSegments === "Python" ? "activeSubTab" : "subTabBtn"}`}>#Python</button>

      <button onClick={() => setSubSegments("Ruby")} className={`${subSegments === "Ruby" ? "activeSubTab" : "subTabBtn"}`}>#Ruby</button>


      <button onClick={() => setSubSegments("Front-End Development")} className={`${subSegments === "Front-End Development" ? "activeSubTab" : "subTabBtn"}`}>#Front-End</button>

                        <button onClick={() => setSubSegments("Web Frameworks")} className={`${subSegments === "Web Frameworks" ? "activeSubTab" : "subTabBtn"}`}>#Frameworks</button>

                        <button onClick={() => setSubSegments("Version Control")} className={`${subSegments === "Version Control" ? "activeSubTab" : "subTabBtn"}`}>#Version Control</button>

<button onClick={() => setSubSegments("Code Quality")} className={`${subSegments === "Code Quality" ? "activeSubTab" : "subTabBtn"}`}>#Code Quality</button>

      </div>
      </div>

      <div className='my-5'>
<h1 className='text-primary font-bold text-2xl brand-title'>Latest Blogs</h1>
<div className='my-4'>
{
   latestBlog.map(latest=><div key={latest.id} className='mt-5 flex items-center gap-6'>

<div>
<img src={latest.image} className="w-16 h-16 rounded-md" />
</div>

<div className='space-y-2'>

<h1 className="text-lg font-bold text-primary">{latest.title}</h1>

<p className='inline-flex items-center gap-2 text-sm font-medium'><HiOutlineClock className='h-6 w-6 text-gray-500'/> {latest.readTime}</p>   
</div>
   </div>)
}
</div>
      </div>

    </ul>
  
  </div>
</div>



        </section>
    );
};

export default NewsFeed;