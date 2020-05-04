import VerticalBar from '../Charts/VeticalBar'
import React, { useState, useEffect, Fragment } from 'react'
import CovidService from '../CovidService'
import CovidCumTotal from '../ByCountry/CountryCumTotal'
import CountryDay from '../ByCountry/CountryDay'

const CovidCountry = () => {
    const [country, setCountry] = useState({})
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        CovidService.getByCountry()
            .then(result => {
                if (result.Error) {
                    console.log('Error set')
                    // setIsError(true);
                }
                console.log(result.Countries)
                setCountry(result);
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
            })
    }, [isLoading])




    return (
        <Fragment>
            {(isLoading)
                ? 'Loading'
                : <Fragment>
                    <div style={{height : '600px' , width : '800px'}}>
                    <CovidCumTotal countryData={country} />

                    </div>
                    <div style={{height : '600px' , width : '800px'}}>
                    <CountryDay countryData={country} />

                    </div>
                </Fragment>
            }
        </Fragment>


    )
}

export default CovidCountry;