import React from 'react'
import { Card, Icon, Statistic } from 'semantic-ui-react'


const SummaryCard = ({label, value}) => {
    return (
        <Card>
            <Card.Content >
                <Statistic >
                    <Statistic.Label>{label}</Statistic.Label>
                    <Statistic.Value>{value}</Statistic.Value>
                </Statistic>
            </Card.Content>
        </Card>
    )


}

export default SummaryCard;