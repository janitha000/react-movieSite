import React from 'react'
import { Bar } from 'react-chartjs-2';


const VerticalBar = ({ data, width, height }) => {

    return (
        <Bar data={data} width={width} height={height}
            options={{
                maintainAspectRatio: false
            }}
        />
    )
}

export default VerticalBar;