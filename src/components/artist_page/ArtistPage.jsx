import React from "react";
import './artist_page.scss';
import Sidebar from "../menu/sidebar/Sidebar";
import ArtistProfileAgutin from "./artist_profile/ArtistProfileAgutin";
import RightSidebar from "./right_sidebar/RightSidebar";

function ArtistPageAgutin () {

  return (

    <div className="artistpage">
      <div className="container">
        <div className="artistpage__wrapper">
          <Sidebar />
          <ArtistProfileAgutin />
          <RightSidebar />
        </div>
      </div>
    </div>

  );

};

export default ArtistPageAgutin ;