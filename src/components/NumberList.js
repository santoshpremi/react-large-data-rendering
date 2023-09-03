import React from 'react';
import { FixedSizeList as List } from 'react-window';

function Number() {
    const Row = ({ index, style }) => (
        <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
            Row {index}
        </div>
    );
    return (
        <div className="App">
            <div>
                <List
                    className="List"
                    height={200}
                    itemCount={800}
                    itemSize={50}
                    width={800}
                >
                    {Row}
                </List>
            </div>
        </div>
    );
}

export default Number;
