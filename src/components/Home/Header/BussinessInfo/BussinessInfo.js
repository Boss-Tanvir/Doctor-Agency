import { faClock, faPhoneVolume, faStreetView } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './BussinessInfo.css';
const BussinessInfo = () => {

  let infoData = 
   [
      {
      title : 'Opening Hours',
      description : 'Everyday - 10am to 5pm',
      icon : faClock,
      background : 'primary'
      },
      {
        title : 'Visit Our Location',
        description : 'Narayangonj, Dhaka, Bangladesh',
        icon : faStreetView,
        background : 'dark'
        },
        {
          title : 'Contact Us',
          description : '+8801754408026',
          icon : faPhoneVolume,
          background : 'primary'
          },
  ]
  
  
    return (
          <section className="row w-75 m-auto info_data">
                  {
                    infoData.map(info => <InfoCard info={info}/>)
                  }
          </section>
    );
};

export default BussinessInfo;