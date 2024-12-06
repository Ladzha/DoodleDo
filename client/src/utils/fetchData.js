// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function getData() {
//     console.log("TEST");
    
//     const BASE_API_URL = "http://localhost:3000/api"
    
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get(`${BASE_API_URL}/categories`);
//             setData(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             setLoading(false);
//         }
//     };
//     useEffect(() => {
//         fetchData();
//     }, []);

//     if (loading) return <div>Loading...</div>;

// }