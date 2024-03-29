import React from 'react';

const Service = ({service}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100">
            <figure className="px-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" style={{height: '86%'}} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-[25px] font-semibold">{service.name}</h2>
                <p className='text-[18px]'>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;