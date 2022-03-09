import {useState} from 'react'
import logo from "../assets/images/logo.png"


function Header({qt,setL}) {
  const [changeText, setChangeText] = useState("ورود")
  const changeT=()=>{
    if(changeText=="ورود"){
      setChangeText("خروج")
      setL()
    }else{
      setChangeText("ورود")
      setL()
    }

  }
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
          <div className="bag mb-3"><span ><i class="bi bi-handbag fs-4 "></i></span> {qt}</div>
          <div className="login"><span className="ms-3"><i class="bi bi-person-plus-fill fs-4"></i></span><button type="button" class="btn btn-success rounded-pill" onClick={changeT}>{changeText}</button></div>
          </div>
         </nav>
    </div>
  )
}

export default Header