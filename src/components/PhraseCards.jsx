import React from 'react';



const PhraseCards = ({data}) => {
    return (
        <div className='phrase-container'>
            
           <h2>{data.phrase}</h2>                        
           
            
        </div>
    );
};

export default PhraseCards;