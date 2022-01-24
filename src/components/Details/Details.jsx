import React from 'react';

// material ui
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

// chart js
import { Doughnut } from 'react-chartjs-2';

// styles
import useStyles from './styles'

const Details = ({ title }) => {
    const { income, expense } = useStyles()

    return (
        <Card className={title === 'Income' ? income : expense }>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant='h5'>$50</Typography>
                {/* <Doughnut data="Data"/> */}
            </CardContent>
        </Card>
    )
};

export default Details;
