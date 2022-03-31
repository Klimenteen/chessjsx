import React from "react";
import './mobile_artist_page.scss'
import MobileArtistPageBtns from "./mobile_artist_page_btns/MobileArtistPageBtns";
import MobileArtistProfileAgutin from "./mobile_artist_profile/MobileArtistProfileAgutin.jsx";
import MobileHeader from "./mobile_header/MobileHeader";

function MobileArtistPageAgutin() {

  return(

    <div className="mobileartistpage">
      <MobileHeader />
      <MobileArtistProfileAgutin />
      <MobileArtistPageBtns />
    </div>

  );

};

export default MobileArtistPageAgutin;