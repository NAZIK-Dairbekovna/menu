import React from 'react';

interface IPropsMenuItem {
    photo: any
    name: string
    price: string
}

const MenuCard: React.FC<IPropsMenuItem> = ({photo, name, price}) => {
    return (
        <div className='menu-card w-[300px] rounded-[10px] h-[240px]'>
            <img src={photo} alt=""/>
            <h2 className='text-center text-3xl text-black'>{name}</h2>
            <h3 className='text-center text-3xl text-black text-bold'>{price}$</h3>
            <button type="button"
                    className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80
                    focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center
                    inline-flex items-center dark:hover:bg-[#FF9119]/80
                    dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
                to order
            </button>
        </div>
    );
};

export default MenuCard;