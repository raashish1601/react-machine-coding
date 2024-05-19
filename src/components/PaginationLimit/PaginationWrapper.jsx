import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaginationLimit from './PaginationLimit';

const PaginationLimitWrapper = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2); // You can change the number of items per page here

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setData(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(data);

    // Calculate total pages
    const totalPages = Math.ceil(data?.data?.limit / itemsPerPage);

    // Get current items
    const currentItems = data?.data?.products?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div>
            <ul>
                {currentItems?.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <PaginationLimit
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                pageLimit={3} // Set the desired page limit here
            />
        </div>
    );
};

export default PaginationLimitWrapper;
