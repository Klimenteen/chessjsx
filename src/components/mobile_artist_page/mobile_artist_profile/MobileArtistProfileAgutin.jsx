import React from "react";
import './mobile_artist_profile.scss'
import mphotoAgutin from '../../../assets/images/photos/Agutin-mobile.png'


function MobileArtistProfileAgutin() {

  return(

    <div className="mobileartistprofile">
      <div className="mobileartistprofile__img">
        <img src={mphotoAgutin} alt="" />
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
        Леонид Агутин
        </div>
        <div className="mobileartistprofile__description">
        Леонид Агутин - маэстро, который не нуждается в представлении. Один из главных музыкантов отечественной сцены, его песни живут в сердце каждого из нас. Приходите спеть любимую в прекрасном Саду “Эрмитаж”.

</div>
      </div>
    </div>

  );

};

export default MobileArtistProfileAgutin;