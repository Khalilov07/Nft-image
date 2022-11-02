import axios from 'axios'
import { useParams } from 'react-router-dom'
const URL_CARDS = 'https://api.opensea.io/api/v1/assets?format=json'
const URL_CARD = 'https://api.opensea.io/api/v1/asset'

// https://api.opensea.io/api/v1/asset/{contract_address}/{token_id}/

const getCards = () => {
    return axios.get(URL_CARDS)
}

const getCard = (contract_id, token_id) => {
    return axios.get(`${URL_CARD}/${contract_id}/${token_id}`)
}

export default {getCards, getCard}