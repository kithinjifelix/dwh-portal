import React, { useCallback, useEffect, useState } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { useSelector } from 'react-redux';
import * as covidAdultPLHIVVaccinatedByPartnerSelectors
    from '../../../selectors/CT/Covid/covidAdultPLHIVVaccinatedByPartner';

const COVIDAdultPLHIVVaccinatedByPartner = () => {
    const [covidVaccinatedByPartner, setCovidVaccinatedByPartner] = useState({});
    const partnersVaccinated = useSelector(covidAdultPLHIVVaccinatedByPartnerSelectors.getAdultPLHIVVaccinatedByPartner);

    const loadVaccinatedByPartner = useCallback(async () => {
        setCovidVaccinatedByPartner({
            title: { text: '' },
            plotOptions: { column: { stacking: 'normal' } },
            xAxis: [{ categories: partnersVaccinated.partners, crosshair: true }],
            yAxis: [{ title: { text: 'Number of Patients' }}],
            tooltip: { shared: true },
            legend: { align: 'left', reversed: true, verticalAlign: 'top', y: 0, x: 80 },
            series: [
                { name: 'PARTIALLY VACCINATED', data: partnersVaccinated.partiallyVaccinated.map(obj => obj.text), type: 'column', color: "#F08532" },
                { name: 'FULLY VACCINATED', data: partnersVaccinated.fullyVaccinated.map(obj => obj.text), type: 'column', color: "#69B34C" },
            ]
        });
    }, [partnersVaccinated]);

    useEffect(() => {
        loadVaccinatedByPartner();
    }, [loadVaccinatedByPartner]);

    return (
        <Card className="trends-card">
            <CardHeader className="trends-header" style={{textTransform: 'none'}}>
                ADULT PLHIV VACCINATED AGAINIST COVID-19 BY PARTNER
            </CardHeader>
            <CardBody className="trends-body">
                <div className="col-12">
                    <HighchartsReact highcharts={Highcharts} options={covidVaccinatedByPartner} />
                </div>
            </CardBody>
        </Card>
    );
};

export default COVIDAdultPLHIVVaccinatedByPartner;

