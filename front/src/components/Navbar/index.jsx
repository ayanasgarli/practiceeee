import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./index.scss";


const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-3">
             <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
            </div>
            <div className="col-6 links">
              <Link className="sections" to="/">
                Home
              </Link>
              <Link className="sections" to="/Shop">
                Shop
              </Link>
              <Link className="sections" to="/About">
                About
              </Link>
              <Link className="sections" to="/Latest">
                Latest
              </Link>
              <Link className="sections" to="/Blog">
                Blog
              </Link>
              <Link className="sections" to="/add">
                Add
              </Link>
              <Link className="sections" to="/wishlist">
                Wishlist
              </Link>
            </div>
            <div className="col-3 icons">
                <span><SearchIcon/></span>
                <span><Person2OutlinedIcon/></span>
                <span><ShoppingCartOutlinedIcon/></span>
                
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
