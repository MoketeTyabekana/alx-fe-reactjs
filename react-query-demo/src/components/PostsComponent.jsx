import { useQuery } from 'react-query';

export default function PostsComponent(){

    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        return res.json();
    };

        const { data, error, isLoading } = useQuery('fetchData', fetchData);
    
}