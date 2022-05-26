import { Button } from '@chakra-ui/react';
import { booksActions } from '../../store/books';
import { useAppDispatch } from '../../store/hooks';
import Bookmodal from '../bookmodal/Bookmodal';

const Bookaction = (props: any) => {
    const { id, title, description, genre, author, published, availability, lastBorrower } =
        props.book;
    const dispatch = useAppDispatch();
    const username = sessionStorage.getItem('user');
    let attr1: number = id;
    let attr2: any = username;

    type User = {
        id: number;
        username: any;
    };
    let borrower: User = {
        id: attr1,
        username: attr2
    };
    const deleteBookHandler = () => {
        dispatch(booksActions.deleteBook(id));
    };
    const borrowBookHandler = () => {
        dispatch(booksActions.borrowBook(borrower));
    };
    const returnBookHandler = () => {
        dispatch(booksActions.returnBook(id));
    };
    return (
        <div>
            <Button onClick={deleteBookHandler}>delete</Button>
            <Bookmodal
                isAdd={false}
                id={id}
                title={title}
                description={description}
                genre={genre}
                author={author}
                yearPublished={published}
                lastBorrower={lastBorrower}
                availability={availability}
            />
            <Button onClick={borrowBookHandler}>borrow</Button>
            <Button onClick={returnBookHandler}>return</Button>
        </div>
    );
};

export default Bookaction;
