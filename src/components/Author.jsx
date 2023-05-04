import React from 'react';

const Author = ({data}) => {
    return (
        <div className='author-container'>           
                <h3>Author: {data.author}</h3>
            
        </div>
    );
};

export default Author;