import React from 'react';

const ServiceInfo = ({Sdata}) => {
    return (
       <div className="col-md-4 text-center">
           <img src={Sdata.img} alt="" />
           <h4 className="mt-3">{Sdata.title}</h4>
           <p className="text-muted">{Sdata.description}</p>
       </div>
    );
};

export default ServiceInfo;