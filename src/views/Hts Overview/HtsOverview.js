import React, { useState } from 'react';
import HtsUptakeOverviewHeader from './HtsUptake/Overview/HtsUptakeOverviewHeader';
import HtsUptakeFilter from '../Shared/HtsUptakeFilter';
import NumberTestedAndPositivity from './HtsUptake/Overview/NumberTestedPositivity';
import HtsUptakeOverviewFooter from './HtsUptake/Overview/HtsUptakeOverviewFooter';
import HtsUptakeByAgeSex from './HtsUptake/Overview/HtsUptakeByAgeSex';
import HtsUptakeByPopulationType from './HtsUptake/Overview/HtsUptakeByPopulationType';
import HtsUptakeTestingStrategy from './HtsUptake/Overview/HtsUptakeTestingStrategy';
import HtsUptakeByCounty from './HtsUptake/Overview/HtsUptakeByCounty';
import HtsUptakeByPartner from './HtsUptake/Overview/HtsUptakeByPartner';
import HtsUptakeTypeAndSelfTest from './HtsUptake/Overview/HtsUptakeTypeAndSelfTest';
import HtsUptakeMonthsSinceLastTest from './HtsUptake/Overview/HtsUptakeMonthsSinceLastTest';
import HtsUptakeTBScreeningAndTBOutcome from './HtsUptake/Overview/HtsUptakeTBScreeningAndTBOutcome';

const HtsOverview = () => {
    const [globalFilter, setGlobalFilter] = useState({
        county: '',
        agency: '',
        partner: '',
        period:`${new Date().getFullYear()},${new Date().getMonth()}`
    });

    const updateGlobalFilter = (selection) => {
        setGlobalFilter(selection);
    };

    return (
        <div className="animated fadeIn">
            <div className="strip">&nbsp;</div>

            <HtsUptakeOverviewHeader/>

            <HtsUptakeFilter onFilterChange={updateGlobalFilter}>&nbsp;</HtsUptakeFilter>

            <NumberTestedAndPositivity>&nbsp;</NumberTestedAndPositivity>

            <hr />

            <HtsUptakeOverviewFooter>&nbsp;</HtsUptakeOverviewFooter>

            <hr />

            <div className="strip">&nbsp;</div>

            <p>&nbsp;</p>

            <HtsUptakeByAgeSex />

            <hr/>

            <HtsUptakeOverviewFooter/>

            <hr/>

            <div className="strip">&nbsp;</div>

            <p>&nbsp;</p>

            <HtsUptakeByPopulationType/>

            <hr/>

            <HtsUptakeOverviewFooter/>

            <hr/>

            <div className="strip">&nbsp;</div>

            <p>&nbsp;</p>

            <HtsUptakeTestingStrategy/>

            <hr/>

            <HtsUptakeOverviewFooter/>

            <hr/>

            <div className="strip">&nbsp;</div>

            <p>&nbsp;</p>

            <HtsUptakeByCounty/>

            <hr/>

            <HtsUptakeOverviewFooter/>

            <hr/>

            <div className="strip">&nbsp;</div>

            <p>&nbsp;</p>

            <HtsUptakeByPartner/>

            <hr/>

            <HtsUptakeOverviewFooter/>

            <hr/>

            <div className="strip">&nbsp;</div>

            <p>&nbsp;</p>

            <HtsUptakeTypeAndSelfTest/>

            <hr/>

            <HtsUptakeOverviewFooter/>

            <hr/>

            <div className="strip">&nbsp;</div>

            <p>&nbsp;</p>

            <HtsUptakeMonthsSinceLastTest/>

            <hr/>

            <HtsUptakeOverviewFooter/>

            <hr/>

            <div className="strip">&nbsp;</div>

            <p>&nbsp;</p>

            <HtsUptakeTBScreeningAndTBOutcome/>

            <hr/>

            <HtsUptakeOverviewFooter/>

            <hr/>

            <div className="strip">&nbsp;</div>

            <p>&nbsp;</p>
        </div>
    );
};

export default HtsOverview;