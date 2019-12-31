import React from 'react';
import { Calendar, Badge } from 'antd';
import basePageHOC from '../hoc/basePageHOC';

const fakeData = {
    '2019': {
        '5': [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
        ],
        '10': [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
            { type: 'error', content: 'This is error event.' },
        ],
        '15': [
            { type: 'warning', content: 'This is warning event' },
            { type: 'success', content: 'This is very long usual event。。....' },
            { type: 'error', content: 'This is error event 1.' },
            { type: 'error', content: 'This is error event 2.' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' },
        ]
    },
    '2018': {
        '3': [
            { type: 'warning', content: 'This is warning event' },
            { type: 'success', content: 'This is very long usual event。。....' },
            { type: 'error', content: 'This is error event 1.' },
            { type: 'error', content: 'This is error event 2.' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' },
        ]
    }
};

function getListData( value) {
    const date = new Date(),
        year = date.getFullYear();

    return fakeData[year][value.date()] || [];
}

function dateCellRender (value) {
    const listData = getListData(value);
    return (
        <ul className="events">
            {listData.map(item => (
                <li key={item.content}>
                    <Badge status={item.type} text={item.content} />
                </li>
            ))}
        </ul>
    );
}

function getMonthData (value) {
    if (value.month() === 8) {
        return 1394;
    }
}

function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
        <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
        </div>
    ) : null;
}

const CalendarPage = () => (
    <div className="date-pick">
        <h1>this is date pick page~</h1>
        <Calendar
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
            onPanelChange={(date, mode) => {
                console.log('date: %o, mode: %o',
                    date, mode);

                const d = date._d;
                console.log(d.getFullYear());
                console.log(d.getMonth() + 1);

            }}
        />
    </div>
);

export default basePageHOC(CalendarPage);
