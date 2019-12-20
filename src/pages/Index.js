import React from 'react';
import basePageHOC from '../hoc/basePageHOC';

const Index = () => (
    <div className="index-page">
        <h1>this is index page</h1>
    </div>
);

export default basePageHOC(Index);
