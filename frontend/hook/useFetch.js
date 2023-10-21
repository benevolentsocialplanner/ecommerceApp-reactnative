import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get('http://localhost:3000/api/products');
            console.log(` ,,,,,,,,,, ${response}`);
            setData(response.data); // Assuming the response is an object with a 'data' property
            setIsLoading(false);
        } catch (err) {
            setError(err);
            console.log(err);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data on component mount
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData(); // Call fetchData to refetch the data
    };

    console.log(`daksmdlfl : ${data}`);

    return { data, isLoading, error, refetch };
};

export default useFetch;
