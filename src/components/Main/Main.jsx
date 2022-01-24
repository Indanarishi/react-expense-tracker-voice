import React from 'react';

// material ui
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

// styles
import useStyles from './styles'

// components
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const { root, cardContent } = useStyles()

    return (
        <Card className={root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align='center' variant='h5'>Total Balance $100</Typography>
                <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    {/* InfoCard */}
                    Try saying: Add income for $100 in Category Salary for Monday ...
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};

export default Main;
