import React from 'react'
import LineBar from '../Charts/LineBar'


const CountryCumTotal = ({ countryData }) => {

    const Chart = () => {
        let body = 'Loading';

        let data = getTableData(countryData);

        body = <LineBar data={data} width={100} height={100}
            options={{
                maintainAspectRatio: false
            }}
        />

        return body;
    }

    const getTableData = (items) => {
        const data = {
            labels: [],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: []
                }
            ]
        };
        let countryData = items;
        
        countryData.forEach(element => {
            data.labels.push(element.Date);
            data.datasets[0].data.push(element.Cases)
        });

        return data;

    }

    return (<Chart />)

}

export default CountryCumTotal;