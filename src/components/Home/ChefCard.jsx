import React, { useEffect, useState } from 'react';
import Card from './Card';

const ChefCard = () => {
    const [chefData, setChefData] = useState([]);
    useEffect(()=>{
        fetch('https://food-wise-server-sagorislam1318-gmailcom.vercel.app/chefdata/')
        .then(res => res.json())
        .then(data => setChefData(data))
    },[])

    return (
        <div className="lg:py-5 lg:px-36 mx-6">
            <h2 className='text-3xl mb-16 lg:text-5xl text-center font-bold text-[#383838]'>Indian best chef here</h2>
            <div className='grid lg:grid-cols-3 gap-6 my-10'>
                {
                    chefData.map(chef => <Card
                    key={chef.id}
                    chef={chef}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default ChefCard;