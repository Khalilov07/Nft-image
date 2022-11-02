import React, { useState, useEffect } from 'react';
import './singlecard.css'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FadeLoader from "react-spinners/FadeLoader";
import { Link, useParams } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import cardService from '../../services/getCard'

const SingleCard = () => {
    // получить contract address, token_id
    // https://api.opensea.io/api/v1/asset/{contract_address}/{token_id}/

    const { id, contract_id, token_id } = useParams()

    const [cardNft, setCardNft] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        cardService.getCard(contract_id, token_id)
            .then(({ data }) => setCardNft(data))
    }, [])

    useEffect(() => {

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [])






    return (
        <div className='singleCard__container'>
            {/* Карточка на странице подробнее */}
            <Link to="/">
                <Button
                    variant="outlined"
                    style={{ border: "1px solid black", color: "black", margin: "10px 30px", }}>
                    домой
                </Button>
            </Link>
            {loading ?
                <div className='loader'>
                    <FadeLoader
                        color={"#000"}
                        loading={loading}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
                :
                <div className='single__card'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            alt={``}
                            height="300"
                            component="img"
                            object-fit="contain"
                            image={cardNft.image_url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                <h4>{cardNft.name}</h4>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p>{cardNft.description}</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                }
        </div>
    );
};

export default SingleCard;