import React from "react";
import './artist_profile.scss'
import photoAgutin from '../../../assets/images/photos/127A15224 — копия.jpg'


function ArtistProfileAgutin() {

  return (

    <div className="artistprofile">
      <div className="artistprofile__card">
        <div className="artistprofile__date-wrapper">
          <span className="artistprofile__date">
            30 июля 2022
          </span>
          <span  className="artistprofile__time" >
           Не нашел время в ворд документе
          </span>
        </div>
        <div className="artistprofile__name">
        Леонид Агутин
        </div>
        <div className="artistprofile__description">
        Леонид Агутин - маэстро, который не нуждается в представлении. Один из главных музыкантов отечественной сцены, его песни живут в сердце каждого из нас. Приходите спеть любимую в прекрасном Саду “Эрмитаж”.
        </div>
        <div className=""></div>
      </div>
      <div className="artistprofile__img">
        <img src={photoAgutin} alt="" />
      </div>
    </div>

  );

};

export default ArtistProfileAgutin;