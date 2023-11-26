import React from "react";
import IndexPhoto from "./../img/IndexPhoto.jpg";

function Header(){
  return (
    <React.Fragment>
    <div style={{ display: 'inline-block' }}>
      &#x1F480;
    </div>
    <h1 style={{ display: 'inline-block', margin: '0 10px' }}>You'll be Dying for a Cup!</h1>
    <div style={{ display: 'inline-block' }}>
      &#x1F480;
    </div>
    <br></br>
    <img src={IndexPhoto} alt="An pic of the coffee shop" />
    </React.Fragment>
  );
}


export default Header;