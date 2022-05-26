import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { fetchBooks } from '../store/books';
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
import Bookaction from '../components/bookButton/Bookaction';
import Bookmodal from '../components/bookmodal/Bookmodal';
let isinitial = true;
const Books = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isinitial) {
            dispatch(fetchBooks());
            isinitial = false;
        }
    }, [dispatch]);

    const booksItems = useAppSelector((state) => state.book.books);

    return (
        <Flex justifyContent="center" alignSelf="center">
            <TableContainer>
                <Bookmodal isAdd={true} id={booksItems.length + 1} />
                <Table variant="striped" colorScheme="teal" size="md">
                    <TableCaption fontSize="2xl" placement="top">
                        Book List
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Description</Th>
                            <Th>Genre</Th>
                            <Th>Author</Th>
                            <Th>Published</Th>
                            <Th>Availability</Th>
                            <Th>Last Borrower</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {booksItems.map((book) => (
                            <Tr key={book.id}>
                                <Td>{book.title}</Td>
                                <Td>{book.description}</Td>
                                <Td>{book.genre}</Td>
                                <Td>{book.author}</Td>
                                <Td>{book.published}</Td>
                                <Td>{book.availability}</Td>
                                <Td>{book.lastBorrower}</Td>
                                <Td>
                                    <Bookaction
                                        book={{
                                            id: book.id,
                                            title: book.title,
                                            description: book.description,
                                            genre: book.genre,
                                            author: book.author,
                                            published: book.published,
                                            availability: book.availability,
                                            lastBorrower: book.lastBorrower
                                        }}
                                    ></Bookaction>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    );
};

export default Books;
