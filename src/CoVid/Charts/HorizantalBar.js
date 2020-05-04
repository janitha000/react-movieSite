import React from 'react'
import { HorizontalBar } from 'react-chartjs-2';


const HorizantalBar = ({ data, width, height }) => {

    return (
        <HorizontalBar data={data} width={width} height={height}
            options={{
                maintainAspectRatio: false
            }}
        />
    )
}

export default HorizantalBar;