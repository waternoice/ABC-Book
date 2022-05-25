import { Button } from '@chakra-ui/react';
import React from 'react';
import classes from './Usercard.module.css';
import { useAppDispatch } from '../../store/hooks';
import { usersActions } from '../../store/users';
import Usermodal from '../usermodal/Usermodal';

const Usercard = (props: any) => {
    const dispatch = useAppDispatch();

    const { username, role, dateJoined, id, password, email } = props.user;

    const deleteUserHandler = () => {
        dispatch(usersActions.deleteUser(id));
    };

    const isAddUserButton = false;

    return (
        <div className={classes.userCard}>
            <div>
                <h1>{username}</h1>
                <p>{role}</p>
                <p>Date Join: {dateJoined}</p>
            </div>
            <div className={classes.buttonGroup}>
                <Usermodal
                    isAdd={isAddUserButton}
                    id={props.id}
                    username={username}
                    role={role}
                    dataJoined={dateJoined}
                    password={password}
                    email={email}
                />
                <Button ml="2" onClick={deleteUserHandler}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default Usercard;
