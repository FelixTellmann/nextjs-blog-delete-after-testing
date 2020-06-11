import React, { useState } from 'react';
import './index.scss';
import { Hero, LogoBanner, Portfolio } from 'components/sections';

console.log('asd'); /*?*/

function Index(ctx) {

    return (
        <>
            <Hero />
            <LogoBanner />
            <Portfolio />
            {/*<Hero />*/}
        </>

    );
}

export default Index;