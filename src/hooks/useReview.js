import { useQuery } from "react-query";

const useReview = () => {

    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch(`https://teatree-server.onrender.com/reviews`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()));

    return [reviews, refetch, isLoading];

}

export default useReview;