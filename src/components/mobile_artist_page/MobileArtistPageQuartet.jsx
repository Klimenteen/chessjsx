import React from "react";
import './mobile_artist_page.scss'
import MobileArtistPageBtns from "./mobile_artist_page_btns/MobileArtistPageBtns";
import MobileArtistProfileQuartet from "./mobile_artist_profile/MobileArtistProfileQuartet";
import MobileHeader from "./mobile_header/MobileHeader";

function MobileArtistPageQuartet() {

  return(

    <div className="mobileartistpage">
      <MobileHeader />
      <MobileArtistProfileQuartet />
      <MobileArtistPageBtns />
    </div>

  );

};

export default MobileArtistPageQuartet;