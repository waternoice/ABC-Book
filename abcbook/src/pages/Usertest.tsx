import Usercard from '../components/card/Usercard';
import classes from './Usertest.module.css';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { fetchUsers } from '../store/users';
import Usermodal from '../components/usermodal/Usermodal';

let isinitial = true;
const Usertest = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isinitial) {
            dispatch(fetchUsers());
            isinitial = false;
        }
    }, [dispatch]);

    const userItems = useAppSelector((state) => state.user.users);
    const isAddUserButton = true;
    const length = userItems.length - 1;
    return (
        <div>
            <div className={classes.userContainer}>
                <Usermodal isAdd={isAddUserButton} id={length} />
                <div className={classes.addUserButton}></div>
                {userItems.map((user, index) => (
                    <Usercard
                        key={index}
                        id={length}
                        user={{
                            id: user.id,
                            role: user.role,
                            username: user.username,
                            dateJoined: user.dateJoined
                        }}
                    ></Usercard>
                ))}
            </div>
        </div>
    );
};

export default Usertest;
