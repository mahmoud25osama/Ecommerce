import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useAllProduct() {

    function fetchProducts() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/products');
    }

    const res = useQuery({
    queryKey: ['allProducts'],
    queryFn: fetchProducts ,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    });
    return res;
}
