import React from 'react';

import BigCalendar from 'react-big-calendar';
import { Container, Button, ButtonGroup } from 'reactstrap';
import moment from 'moment';
import events from '../events';

import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class CustomToolbar extends React.Component {

    render() {
        let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

        const CustomToolbar = (toolbar) => {

            const goToBack = () => {
                toolbar.onNavigate(BigCalendar.Navigate.PREVIOUS);
            };

            const goToNext = () => {
                toolbar.onNavigate(BigCalendar.Navigate.NEXT);
            };

            const goToCurrent = () => {
                toolbar.onNavigate(BigCalendar.Navigate.TODAY);
            };

            const goToWeekView = () => {
                toolbar.onView(BigCalendar.Views.WEEK)
            };

            const goToMonthView = () => {
                toolbar.onView(BigCalendar.Views.MONTH)
            };

            const goToDayView = () => {
                toolbar.onView(BigCalendar.Views.DAY)
            };

            const label = () => {
                console.log();
                return (
                    <span>{toolbar.label}</span>
                );
            };

            return(
                <div className="mb-3 d-flex justify-content-between">
                    <div className="d-flex flex-column align-items-center">
                        <ButtonGroup size="sm">
                            <Button outline color="primary" onClick={goToBack}>&#8249;</Button>
                            <Button outline color="primary" onClick={goToCurrent}>today</Button>
                            <Button outline color="primary" onClick={goToNext}>&#8250;</Button>
                        </ButtonGroup>
                    </div>
                    <div className="d-flex flex-row align-items-center text-primary lead">
                        {label()}
                    </div>
                    <div className="d-flex flex-column justify-content-end">
                        <ButtonGroup size="sm">
                            <Button outline color="primary" onClick={goToMonthView}>Month</Button>
                            <Button outline color="primary" onClick={goToWeekView}>Week</Button>
                            <Button outline color="primary" onClick={goToDayView}>Day</Button>
                        </ButtonGroup>
                    </div>
                </div>
            );
        };

        return (
            <Container className="calendar">
                <BigCalendar
                    events={events}
                    step={60}
                    showMultiDayTimes
                    defaultDate={new Date(2015, 3, 1)}
                    localizer={localizer}
                    components={{
                        toolbar: CustomToolbar
                    }}
                />
            </Container>
        );
    };
}

export default CustomToolbar;
