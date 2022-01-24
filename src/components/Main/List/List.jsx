import React from 'react';

// material ui
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

// styles
import useStyles from './styles'

const List = () => {
    const { list, avatarIncome, avatarExpense } = useStyles()

    const transactions = [
        {
            id: 1,
            type: "Income",
            category: "Salary",
            amount: 50,
            date: "Wed Dec 16"
        },
        {
            id: 2,
            type: "Expense",
            category: "Pets",
            amount: 50,
            date: "Wed Dec 17"
        },
        {
            id: 3,
            type: "Income",
            category: "Business",
            amount: 150,
            date: "Wed Dec 18"
        },
    ]

    return (
        <MUIList dense={false} className={list}>
            {transactions.map((transaction) => (
                <Slide key={transaction.id} direction='down' in mountOnEnter unmountOnExit>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? avatarIncome : avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label='delete' onClick="">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
};

export default List;
