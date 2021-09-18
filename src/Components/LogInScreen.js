import React from 'react';
import Banner from './LogInScreen/Banner';
import Stream from './LogInScreen/Stream';
import Groupwatch from './LogInScreen/Groupwatch';
import BlackPanther from './LogInScreen/BlackPanther';
import DownloadNow from './LogInScreen/DownloadNow';
import GridTheme from './LogInScreen/GridTheme';
import Advertise from './LogInScreen/Advertise';
import Devices from './LogInScreen/Devices';
const LogInScreen = () => {
    return (
        <>
            <Banner/>
            <Stream/>
            <Groupwatch/>
            <BlackPanther/>
            <GridTheme/>
            <DownloadNow/>
            <Advertise/>
            <Devices/>
        </>
    );
};

export default LogInScreen;
