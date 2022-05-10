import axios from "axios";
import { allProducts } from '../Redux/productSlice'
const useAPI = () => {

    const getProducts = (dispatch) => {
        axios.get('https://api.spacexdata.com/v3/launches').then(res => {
            dispatch(allProducts(res.data))
        }).catch(err => {
            console.log('Error: ', err.message)
        })
    }
    return { getProducts }
}
export default useAPI;