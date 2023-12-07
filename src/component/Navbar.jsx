import { FaMoneyBill, FaMoneyCheckAlt } from "react-icons/fa"



const Navbar = () => {
  return (

    <>
    

    <nav className="navbar ">
  <div className="container-fluid">
    <a className="navbar-brand">
    <span className="moneylog"><FaMoneyCheckAlt/></span>

    </a>
    
   <h3>CURRENCY <span className="text-danger fw-bolder"> CONVERT</span></h3>

    
  </div>
</nav>
    </>
  )
}

export default Navbar