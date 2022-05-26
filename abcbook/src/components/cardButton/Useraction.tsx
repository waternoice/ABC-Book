import { Button } from '@chakra-ui/react';
import { usersActions } from '../../store/users';
import { useAppDispatch } from '../../store/hooks';
import Usermodal from '../usermodal/Usermodal';

const Useraction = (props: any) => {
    const { id, role, username, dateJoined, email, password } = props.user;
    const dispatch = useAppDispatch();

    const deleteUserHandler = () => {
        dispatch(usersActions.deleteUser(id));
    };
    return (
        <div>
            <Button onClick={deleteUserHandler}>delete</Button>
            <Usermodal
                isAdd={false}
                id={id}
                role={role}
                username={username}
                dateJoined={dateJoined}
                email={email}
                password={password}
            />
        </div>
    );
};

export default Useraction;
