import React from 'react';

import BigCalendar from 'react-big-calendar';
import { Container } from 'reactstrap';
import moment from 'moment';
import events from '../events';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Rendering.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const Rendering = props => {


    function Event({ event }) {
        return (
            <div>
                <span>
                    <strong>{event.title}</strong>
                    {event.desc && ':  ' + event.desc}
                </span>
            </div>
        )
    }

    const customDayPropGetter = date => {
        if (date.getDate() === 7 || date.getDate() === 15)
            return {
                className: 'special-day',
                style: {
                    border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
                },
            };
        else return {}
    };

    const customSlotPropGetter = date => {
        if (date.getDate() === 7 || date.getDate() === 15)
            return {
                className: 'special-day',
            }
        else return {}
    };

    const customEventPropGetter = () => {
        return {
            className: 'special-event',
            style: {
                backgroundColor: '#faa',
            }
        }
    };

    return (
        <Container className="calendar">
            <BigCalendar
                events={events}
                localizer={localizer}
                defaultDate={new Date(2015, 3, 1)}
                defaultView={BigCalendar.Views.MONTH}
                dayPropGetter={customDayPropGetter}
                slotPropGetter={customSlotPropGetter}
                eventPropGetter={customEventPropGetter}
                components={{
                    event: Event,
                    agenda: {
                        //event: EventAgenda,
                    },
                }}
            />
        </Container>

    );
};

export default Rendering;
