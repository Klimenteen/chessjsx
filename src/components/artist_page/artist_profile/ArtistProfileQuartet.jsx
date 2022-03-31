import React from "react";
import './artist_profile.scss'
import photoQuartet from '../../../assets/images/photos/portico-quartet.jpg'


function ArtistProfileQuartet() {

  return (

    <div className="artistprofile">
      <div className="artistprofile__card">
        <div className="artistprofile__date-wrapper">
          <span className="artistprofile__date">
          31 июля 2022
          </span>
          <span  className="artistprofile__time" >
           Не нашел время в ворд документе
          </span>
        </div>
        <div className="artistprofile__name">
        Portico Quartet
        </div>
        <div className="artistprofile__description">
        Portico Quartet —  долгожданный джазовый квартет из Лондона. В 2007 вышел дебютный альбом «Knee-deep in the North Sea». Он попал в номинанты на Mercury Music Prize в 2008 году, а журнал Time Out и вовсе назвал его лучшим джазовым альбомом года.
В целом, сугубо джазовым квартет и не назовешь. Лондонцы мешают в один котел джаз, эмбиент и другие поджанры электроники. В 2021 году группа выпустила полноценный альбом “Monument”, а затем порадовала поклонников мини-альбомом “Next Stop”. Эту музыку стоит хоть раз услышать живьем!

        </div>
        <div className=""></div>
      </div>
      <div className="artistprofile__img">
        <img src={photoQuartet} alt="" />
      </div>
    </div>

  );

};

export default ArtistProfileQuartet;