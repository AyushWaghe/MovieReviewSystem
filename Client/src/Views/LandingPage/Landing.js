import React from 'react'
import "./landingPage.css"
import People from "../../assets/images/People.jpg"
const LandingPage = () => {
  const imageurl="https://drive.google.com/drive/u/2/folders/1xVwosuxQMOGIeZXZkLc4myE1QZ6C8iZf";
  return (
    <div className="MasterContainer">

      <div className="HomeDiv">


        <div className="DarkOverlay">
          <div className="TopBar">
            <div className="LOGO">
              NAME
            </div>

            <div className="GuestButtonDiv">
              <button className="GuestButton">Guest</button>
            </div>
          </div>

          <div className="TagLines">
            <h3 style={{ margin: "0px" }}>Hello! Welocome to Movie Mania</h3>
            <h1 style={{ margin: "10px" }}>Your Personalized Movie Journey Begins Here!</h1>
          </div>

          <div className="ButtonDiv">
            <button className="SignUpButton">Sign up</button>
            <button className="SignInButton">Sign in</button>
          </div>
        </div>
      </div>

      <div className="ComponentContainer">
        <div className="ComponentTaglineContent">
          <h3 style={{ margin: "0px" }}>Discover Your Next Favorite: </h3>
          <p>Discover curated movie suggestions tailored uniquely to your taste with our Personalized Movie Recommendations service.</p>
        </div>
        <div className="ComponentImage">
          <div>
            <img src={People} className="imageCSS" />
          </div>
        </div>
      </div>

      <div className="ComponentContainer">

        <div className="ComponentImage">
          <div>
            <img src={People} className="imageCSS2" />
          </div>
        </div>

        <div className="ComponentTaglineContent2">
          <h3 style={{ margin: "0px" }}>Discover Your Next Favorite: </h3>
          <p>Discover curated movie suggestions tailored uniquely to your taste with our Personalized Movie Recommendations service.</p>
        </div>

      </div>

      <div className="ComponentContainer">
        <div className="ComponentTaglineContent">
          <h3 style={{ margin: "0px" }}>Discover Your Next Favorite: </h3>
          <p>Discover curated movie suggestions tailored uniquely to your taste with our Personalized Movie Recommendations service.</p>
        </div>
        <div className="ComponentImage">
          <div>
            <img src={People} className="imageCSS" />
          </div>
        </div>
      </div>

      <div className="ComponentContainer">

        <div className="ComponentImage">
          <div>
            <img src={People} className="imageCSS2" />
          </div>
        </div>

        <div className="ComponentTaglineContent2">
          <h3 style={{ margin: "0px" }}>Discover Your Next Favorite: </h3>
          <p>Discover curated movie suggestions tailored uniquely to your taste with our Personalized Movie Recommendations service.</p>
        </div>

      </div>


    </div>
  )
}

export default LandingPage;
