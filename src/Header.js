// import React from 'react'
import logo from "./assets/images/logo.png"

function Header() {
  return (
    <div>
        <nav className="navbar navbar-light bg-light ps-5 pe-5">
          <img className="logo  me-4 ms-5"  src={logo} alt=""></img>
         <div className="container-fluid  w-50 me-2">
         <form className=" w-100  d-flex me-4" >
           <input className="form-control " type="search" placeholder="کالای مورد نظر خود را جستجو کنید:" aria-label="Search"/>
           <button className="btn btn-outline-success" type="submit">Search</button>           
         </form>
          </div>
          <div className=" ms-5">
          <div className="bag mb-3"><span ><i class="bi bi-handbag"></i></span></div>
          <div className="login"><span className="ms-3"><i class="bi bi-person-plus-fill"></i></span><button type="button" class="btn btn-success rounded-pill">ورود/خروج</button></div>
          </div>
         </nav>
    </div>
  )
}

export default Header