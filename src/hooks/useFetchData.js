import axios from "axios";
import { useEffect, useState } from "react"

// const useFetchData = (url) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios.get(url)
//             .then(response => {
//                 setData(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error);
//                 setLoading(false);
//             });
//     }, [url]);

//     return [data, loading, error];
// }

export const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await axios.get(url);
                console.log(result.data);
                setData(result.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return [data, loading, error];
}