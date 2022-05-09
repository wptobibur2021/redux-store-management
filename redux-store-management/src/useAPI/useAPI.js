import axios from "axios";
const useAPI = () => {

    const getProducts = (setProducts) => {
        axios.get('https://api.spacexdata.com/v3/launches').then(res => {
            setProducts(res.data)
        }).catch(err => {
            console.log('Error: ', err.message)
        })
    }
    return { getProducts }
}
export default useAPI;