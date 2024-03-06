import React from 'react';
import {faqs} from '../../assets/data/faqs'
import FaqCard from './FaqCard';

const FaqList = () => {
    return (
        <div className='mt-[30px]'>
            {faqs.map((item,index)=><FaqCard item={item} key={index}/>)}
        </div>
    );
};

export default FaqList;