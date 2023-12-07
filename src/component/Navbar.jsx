import { FaMoneyBill, FaMoneyCheckAlt } from "react-icons/fa"



const Navbar = () => {
  return (

    <>
    

    <nav className="navbar ">
  <div className="container-fluid">
    <a className="navbar-brand">
    <span className="moneylog"><FaMoneyCheckAlt/></span>

    </a>
    
   <h3>CURRENCY <span className="text-white fw-bolder bg-warning p-3"> CONVERTER</span></h3>

    
  </div>
</nav>
    </>
  )
}

export default Navbar