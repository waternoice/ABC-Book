import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex,
    Button
} from '@chakra-ui/react';
import Bookmodal from '../components/bookmodal/Bookmodal';
import { fetchUsers } from '../store/users';
import Useraction from '../components/cardButton/Useraction';
let isinitial = true;
const Users = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isinitial) {
            dispatch(fetchUsers());
            isinitial = false;
        }
    }, [dispatch]);

    const usersItems = useAppSelector((state) => state.user.users);

    return (
        <Flex justifyContent="center" alignSelf="center">
            <TableContainer>
                <Bookmodal isAdd={true} id={usersItems.length + 1} />
                <Table variant="striped" colorScheme="teal" size="md">
                    <TableCaption fontSize="2xl" placement="top">
                        User List
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Username</Th>
                            <Th>Role</Th>
                            <Th>Date Joined</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {usersItems.map((user) => (
                            <Tr key={user.id}>
                                <Td>{user.username}</Td>
                                <Td>{user.role}</Td>
                                <Td>{user.dateJoined}</Td>
                                <Td>
                                    <Useraction
                                        user={{
                                            id: user.id,
                                            username: user.username,
                                            role: user.role,
                                            dateJoined: user.dateJoined,
                                            email: user.email,
                                            password: user.password
                                        }}
                                    />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    );
};

export default Users;
