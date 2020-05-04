import React from 'react'
import VerticalBar from '../Charts/VeticalBar'


const CountryDay = ({ countryData }) => {

    const Chart = () => {
        let body = 'Loading';

        let data = getTableData(countryData);

        body = <VerticalBar data={data} width={100} height={200}
            options={{
                maintainAspectRatio: true
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
        for(let i=0;i<countryData.length; i++ ){
            let prevElement = countryData[i-1]
            let element = countryData[i];
            data.labels.push(element.Date);
            if(i ==0){
                data.datasets[0].data.push(element.Cases)
            }else{
                data.datasets[0].data.push(element.Cases - prevElement.Cases)

            }

        }


        return data;

    }

    return (<Chart />)

}

export default CountryDay;