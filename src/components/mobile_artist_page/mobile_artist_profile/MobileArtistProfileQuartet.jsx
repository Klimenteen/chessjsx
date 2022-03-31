import React from "react";
import './mobile_artist_profile.scss'
import mphotoQuartet from '../../../assets/images/photos/portico-quartet.jpg'


function MobileArtistProfileQuartet() {

  return(

    <div className="mobileartistprofile">
      <div className="mobileartistprofile__img">
        <img src={mphotoQuartet} alt="" />
      </div>
      <div className="mobileartistprofile__card">
        <div className="mobileartistprofile__date-wrapper">
          <span className="mobileartistprofile__date">
            30 июля 2022
          </span>
          <span className="mobileartistprofile__time">
         Времмени нет в ворд файле
          </span>
        </div>
        <div className="mobileartistprofile__name">
        Portico Quartet
        </div>
        <div className="mobileartistprofile__description">
        Portico Quartet —  долгожданный джазовый квартет из Лондона. В 2007 вышел дебютный альбом «Knee-deep in the North Sea». Он попал в номинанты на Mercury Music Prize в 2008 году, а журнал Time Out и вовсе назвал его лучшим джазовым альбомом года.
В целом, сугубо джазовым квартет и не назовешь. Лондонцы мешают в один котел джаз, эмбиент и другие поджанры электроники. В 2021 году группа выпустила полноценный альбом “Monument”, а затем порадовала поклонников мини-альбомом “Next Stop”. Эту музыку стоит хоть раз услышать живьем!

</div>
      </div>
    </div>

  );

};

export default MobileArtistProfileQuartet;