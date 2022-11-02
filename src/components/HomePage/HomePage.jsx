import React, { useState, useEffect } from 'react';
import './homepage.css'
import { useSelector, useDispatch } from 'react-redux'
import cardService from '../../services/getCard'
import CardItem from '../CardItem/CardItem';
import FadeLoader from "react-spinners/FadeLoader";
import { collectionReceived } from '../../redux/features/collectionsSlice';

const HomePage = () => {
    const dispatch = useDispatch()
    const cards = useSelector((state) => state.collection.collection)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([{}])

    useEffect(() => {
        cardService
            .getCards()
            .then(({ data }) => {
                dispatch(collectionReceived(data.assets))
                setData(data)
                setLoading(false)
            })
    }, [])

    useEffect(() => {

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        })

    }, [])

    return (
        <>
        {
            loading ?
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
          <div className='home__page'>
                {!loading && cards.map((card) => (
                    <CardItem key={card.id} card={card} data={data} />
                ))}
            </div>
        }
        </>
    );
};

export default HomePage;