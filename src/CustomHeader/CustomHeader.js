import React from 'react';

import BigCalendar from 'react-big-calendar';
import { Container } from 'reactstrap';
import moment from 'moment';
import events from '../events';
import './CustomHeader.css';

import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const CustomHeader = props => {

    let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

    let MyOtherNestedComponent = () => <div>NESTED COMPONENT</div>

    let MyCustomHeader = ({ label }) => (
        <div className="header">
            CUSTOM HEADER:
            <div>{label}</div>
            <MyOtherNestedComponent />
        </div>
    )

    return (
        <Container className="calendar">
            <BigCalendar
                events={events}
                views={allViews}
                step={60}
                showMultiDayTimes
                defaultDate={new Date(2015, 3, 1)}
                localizer={localizer}
                components={{
                    day: { header: MyCustomHeader },
                    week: { header: MyCustomHeader },
                    month: { header: MyCustomHeader },
                }}
            />
        </Container>

    );
};

export default CustomHeader;
