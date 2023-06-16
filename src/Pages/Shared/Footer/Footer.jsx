import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo/write.png"
import twitter from "../../../assets/icons/twitter.png"
import facebook from "../../../assets/icons/facebook.png"
import linkedin from "../../../assets/icons/linkedin.png"
const Footer = () => {
    return (
<footer className='mt-14'>
<footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <span className="footer-title">Services</span> 
    <Link to="/"  className="link link-hover">Blogs</Link> 
    <Link to="/"  className="link link-hover">News</Link> 
    <Link to="/"  className="link link-hover">Tech Update</Link> 
    <Link to="/"  className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title">Quick Links</span> 
    <Link to="/"  className="link link-hover">About us</Link> 
    <Link to="/"  className="link link-hover">Contact</Link> 
    <Link to="/"  className="link link-hover">Resources</Link> 
    <Link to="/"  className="link link-hover">Community</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link to="/"  className="link link-hover">Terms of use</Link> 
    <Link to="/"  className="link link-hover">Privacy policy</Link> 
    <Link to="/"  className="link link-hover">Cookie policy</Link>
  </div> 
  <div>
    <span className="footer-title"> Our Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Subscribe Our Newsletter To Get Update Fast</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
<footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
  <div className="items-center grid-flow-col">
  <Link to="/" className='inline-flex gap-1 items-center'>
    <img src={logo} alt="Logo" className='w-10'/>
<h1 className='font-extrabold text-xl text-primary brand-title'>ByteBeats</h1>
</Link>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <img src={twitter} alt="" />
      <img src={facebook} alt="" />
      <img src={linkedin} alt="" />
    </div>
  </div>
</footer>
</footer>
    );
};

export default Footer;