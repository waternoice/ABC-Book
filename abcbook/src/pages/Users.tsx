import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex
} from '@chakra-ui/react';
import classes from './Users.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect } from 'react';
import { fetchUsers, usersActions } from '../store/users';
const DUMMY_DATA = [
    {
        id: '1',
        role: 'admin',
        username: 'Jack',
        dataJoined: '2020-12-12',
        email: 'adminjack@email.com',
        password: 'password'
    },
    {
        id: '2',
        role: 'editor',
        username: 'Mary',
        dataJoined: '2021-12-12',
        email: 'editormary@email.com',
        password: 'password'
    },
    {
        id: '3',
        role: 'member',
        username: 'Jack',
        dataJoined: '2020-09-12',
        email: 'memberjack@email.com',
        password: 'password'
    },
    {
        id: '4',
        role: 'member',
        username: 'John',
        dataJoined: '2022-01-12',
        email: 'memberjohn@email.com',
        password: 'password'
    },
    {
        id: '5',
        role: 'member',
        username: 'Amber',
        dataJoined: '2021-12-06',
        email: 'memberamber@email.com',
        password: 'password'
    },
    {
        id: '6',
        role: 'member',
        username: 'Alex',
        dataJoined: '2019-03-12',
        email: 'memberalex@email.com',
        password: 'password'
    }
];
const Users = () => {
    return (
        <div className={classes.tableContainer}>
            <Flex justifyContent="center" alignSelf="center">
                <TableContainer>
                    <Table variant="striped" colorScheme="teal" size="lg">
                        <TableCaption fontSize="2xl" placement="top">
                            User List
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Role</Th>
                                <Th>Date Joined</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {DUMMY_DATA.map((user) => (
                                <Tr key={user.id}>
                                    <Td>{user.username}</Td>
                                    <Td>{user.role}</Td>
                                    <Td>{user.dataJoined}</Td>
                                    <Td>
                                        <p>delete</p>
                                        <p>edit</p>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
        </div>
    );
};

export default Users;
