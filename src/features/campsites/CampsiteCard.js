import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = (props) => {
    const { id, image, name } = props.campsite;
    return (
        <Link to={`/directory/${id}`}>
            <Card>
                <CardImg 
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
};

export default CampsiteCard;