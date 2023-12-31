import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to ="/">
      <img
        className="header__logo"
        src={require("./images/amazon-logo.png")}
        alt=""
      />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <img className="header__searchIcon" src={require("./images/search-btn.png")} alt=""/>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">& sing In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

      
      <Link to='./checkout'>
      <div className="header__optionBasket">
      <img className="header__basket" src={require("./images/basket.png")} alt=""/>
      <span className="header__optionLineTwo header__basketCount">
        {basket.length}
      </span>
    </div>
    </Link>
    </div>
    </div>
  );
}

export default header;
