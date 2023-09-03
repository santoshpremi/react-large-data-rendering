import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

const fetchData = async () => {
    try {
        const response = await fetch('https://restcountries.com/v2/all');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

const Row = ({ index, style, data }) => (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
       {index}.  {data[index].name}
    </div>
);

const Country = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData().then((fetchedData) => {
            setData(fetchedData);
        });
    }, []);

    return (
        <List
            className="List"
            height={300}
            width={800}
            itemCount={data.length}
            itemSize={50}
            itemData={data}
        >
            {Row}
        </List>
    );
};

export default Country;
