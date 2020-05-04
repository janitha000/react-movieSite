import React from 'react'
import { Line } from 'react-chartjs-2';


const LineBar = ({ data, width, height }) => {

    return (
        <Line data={data} width={width} height={height}
            options={{
                maintainAspectRatio: false
            }}
        />
    )
}

export default LineBar;