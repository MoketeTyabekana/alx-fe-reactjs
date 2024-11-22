import { useQuery } from 'react-query';

export default function PostsComponent(){

    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        return res.json();
    };

        const { data, error, isLoading } = useQuery('fetchData', fetchData);

               // Handle loading state
   if (isLoading) return <div>Loading...</div>;
   // Handle error state
   if (error) return <div>Error loading data</div>;
   // Render the fetched data
   return (
       <div>
           {data.map(item => (
               <div key={item.id}>{item.name}</div>
           ))}
       </div>
   );
    
}