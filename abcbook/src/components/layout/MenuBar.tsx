import { Tabs, TabList, Tab } from '@chakra-ui/react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const MenuBar = () => {
    let isAdmin = false;
    let isEditor = false;
    let isMember = false;
    const userType = useSelector((state: RootState) => state.login.role);
    if (userType === 'admin') {
        isAdmin = true;
    }
    if (userType === 'editor') {
        isEditor = true;
    }
    if (userType === 'member') {
        isMember = true;
    }
    return (
        <div>
            <Tabs isFitted variant="enclosed">
                <TabList>
                    <Tab>
                        <Link to="/books" className={classes.headerLinks}>
                            Books
                        </Link>
                    </Tab>
                    {(isAdmin || isEditor) && (
                        <Tab>
                            <Link to="/users" className={classes.headerLinks}>
                                User
                            </Link>
                        </Tab>
                    )}
                    <Tab>
                        <Link to="/analyse" className={classes.headerLinks}>
                            Analyse
                        </Link>
                    </Tab>
                </TabList>
            </Tabs>
        </div>
    );
};

export default MenuBar;
