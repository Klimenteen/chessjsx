import React from "react";
import './artist_page.scss';
import Sidebar from "../menu/sidebar/Sidebar";
import ArtistProfileQuartet from "./artist_profile/ArtistProfileQuartet";
import RightSidebar from "./right_sidebar/RightSidebar";

function ArtistPageQuartet() {

  return (

    <div className="artistpage">
      <div className="container">
        <div className="artistpage__wrapper">
          <Sidebar />
          <ArtistProfileQuartet />
          <RightSidebar />
        </div>
      </div>
    </div>

  );

};

export default ArtistPageQuartet;