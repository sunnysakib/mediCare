import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
        <div className='overflow-hidden'>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
            
        </div>
        </>
    );
};

export default Appointment;