import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';
import {fetchCampsites} from '../features/campsites/campsitesSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
    }, [dispatch]);

    return (
        <Container>
             <SubHeader current='Home' />
            <DisplayList />
        </Container>
    );
};

export default HomePage;