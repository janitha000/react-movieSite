import React, { useState, useEffect } from 'react'
import CovidService from '../CovidService'
import HorizontalBar from '../Charts/HorizantalBar'
import { Icon, Table, Grid } from 'semantic-ui-react'
import SummaryCard from './SummaryCard'


const CovidSummary = () => {
    const [covidSummary, setCovidSummary] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [globalData, setGlobalData] = useState({});



    useEffect(() => {
        CovidService.getSummary()
            .then(result => {
                if (result.Error) {
                    console.log('Error set')
                    // setIsError(true);
                }
                console.log(result.Countries)
                setCovidSummary(result);
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
            })
    }, [isLoading])

    const Chart = () => {
        let body = 'Loading';
        if (!isLoading) {
            let data = getTableData(covidSummary);

            body = <HorizontalBar data={data} width={100} height={200}
                options={{
                    maintainAspectRatio: true
                }}
            />
        }
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
        let countries = items.Countries;
        countries.forEach(element => {
            data.labels.push(element.Country);
            data.datasets[0].data.push(element.TotalConfirmed)
        });

        return data;

    }

    const TableData = () => {

        let tableRows = [];
        if (covidSummary) {
            
            setGlobalData(covidSummary.Global)
            let countries = covidSummary.Countries;
            countries.forEach(data => {


                tableRows.push(<Table.Row>
                    <Table.Cell>{data.Country}</Table.Cell>
                    {(data.NewConfirmed > 1000)
                        ? <Table.Cell negative> {data.NewConfirmed}</Table.Cell>
                        : <Table.Cell>{data.NewConfirmed}</Table.Cell>}
                    {(data.TotalConfirmed > 100000)
                        ? <Table.Cell negative>{data.TotalConfirmed}</Table.Cell>
                        : <Table.Cell>{data.TotalConfirmed}</Table.Cell>
                    }
                    {(data.TotalDeaths > 1000)
                        ? <Table.Cell negative>{data.TotalDeaths}</Table.Cell>
                        : <Table.Cell>{data.TotalDeaths}</Table.Cell>
                    }

                </Table.Row>)


            });
        }


        return (tableRows);
    }

    const CovidTable = () => {
        let table = (isLoading)
            ? 'Loading'
            : <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Country</Table.HeaderCell>
                        <Table.HeaderCell>New Confirmed</Table.HeaderCell>
                        <Table.HeaderCell>Total Confirmed</Table.HeaderCell>
                        <Table.HeaderCell>Total Deaths</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <TableData />
                </Table.Body>
            </Table>

        return (<div style={{ marginLeft: '15px', marginBottom: '15px', marginTop: '15px', marginRight: '15px' }}>{table}</div>);
    }

    const SummaryCardData = () => {
        let data = (globalData.NewConfirmed != undefined)
            ? <div style={{ marginTop: '15px' }}>
                <SummaryCard label={'Total Confirmed'} value={globalData.TotalConfirmed} />
                <SummaryCard label={'Total Deaths'} value={globalData.TotalDeaths} />
                <SummaryCard label={'Total Recovered'} value={globalData.TotalRecovered} />
            </div>
            : 'Loading'

        return data;
    }

    return (
        //    <Chart />
        <Grid>
            <Grid.Column width={8}>
                <CovidTable />
            </Grid.Column>
            <Grid.Column width={8}>
                <Grid.Row >
                    <Grid.Column width={2} >
                        <SummaryCardData />
               </Grid.Column>

                    <Grid.Column width={2} >

                </Grid.Column>
                </Grid.Row>

            </Grid.Column>
        </Grid>

    )
}


export default CovidSummary