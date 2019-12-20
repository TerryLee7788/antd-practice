import React from 'react';
import { DatePicker } from 'antd';
import basePageHOC from '../hoc/basePageHOC';

const DatepickPage = () => (
    <div className="date-pick">
        <h1>this is date pick page~</h1>
        <DatePicker/>
    </div>
);

export default basePageHOC(DatepickPage);
