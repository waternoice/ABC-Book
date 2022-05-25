import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

import { useTable, useFilters, useSortBy, usePagination } from 'react-table';

const User = () => {
    const columns = [
        {
            Header: 'User List',
            columns: [
                {
                    Header: 'Role',
                    accessor: 'role'
                },
                {
                    Header: 'Username',
                    accessor: 'username'
                },
                {
                    Header: 'Date Joined',
                    accessor: 'datejoined'
                },
                {
                    Header: 'Actions',
                    accessor: 'action'
                }
            ]
        }
    ];

    const data = [
        {
            id: '1',
            role: 'admin',
            username: 'Jack',
            datejoined: '2020-12-12',
            email: 'adminjack@email.com',
            password: 'password'
        },
        {
            id: '2',
            role: 'editor',
            username: 'Mary',
            datejoined: '2021-12-12',
            email: 'editormary@email.com',
            password: 'password'
        },
        {
            id: '3',
            role: 'member',
            username: 'Jack',
            datejoined: '2020-09-12',
            email: 'memberjack@email.com',
            password: 'password'
        },
        {
            id: '4',
            role: 'member',
            username: 'John',
            datejoined: '2022-01-12',
            email: 'memberjohn@email.com',
            password: 'password'
        },
        {
            id: '5',
            role: 'member',
            username: 'Amber',
            datejoined: '2021-12-06',
            email: 'memberamber@email.com',
            password: 'password'
        },
        {
            id: '6',
            role: 'member',
            username: 'Alex',
            datejoined: '2019-03-12',
            email: 'memberalex@email.com',
            password: 'password'
        }
    ];

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data
        },
        useFilters,
        useSortBy,
        usePagination
    );

    return (
        <div>
            {/* <input
                className="form-control form-control-solid"
                placeholder="Search Employees"
                onChange={(e) => setFilter('name', e.target.value)}
            /> */}
            <TableContainer>
                <Table {...getTableProps()} variant="striped" colorScheme="teal" size="lg">
                    <Thead>
                        {headerGroups.map((headerGroup) => (
                            <Tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row);
                            return (
                                <Tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                                        );
                                    })}
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default User;
