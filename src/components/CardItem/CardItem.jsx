import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import './carditem.css'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import InfoIcon from '@mui/icons-material/Info';

const CardItem = ({card}) => { 
    
    const {id, name, asset_contract, token_id, collection, permalink, image_url,  } = card

    return (
        <div className='card__item'>
            {/* Сама карточка */}
            <Link to={`/nft-card/${asset_contract.address}/${token_id}`} title="Подробнее...">
                <Card sx={{ maxWidth: 350 }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={image_url}
                        alt={collection.name}
                    />
                    <CardContent>
                        <Typography gutterBottom component="div">
                            {/* <Link to="/singlecard" title='Подробнее'><InfoIcon /></Link> - вариант с иконкой,
                            с кнопой смотрелось не очень, по этому оставил просто карточку, по которой можно
                            перейти на странницу подробнее */}
                            <h3>{name}</h3>
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
};

export default CardItem;