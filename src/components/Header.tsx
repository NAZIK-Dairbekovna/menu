import React from 'react';
import logo from '../img/image 2.svg'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";


const Header = () => {
    const quantityOrders = useSelector((state: RootState) => state.menu.orders)
    const quantityFoods = useSelector((state: RootState) => state.menu.foods)

    return (
        <header id='header'>
            <div className="bg-white flex items-center justify-between py-4 px-8">
                <div>
                    <img src={logo} alt=""/>
                </div>

                <nav className='flex mr-10 '>
                    <div className='relative'>
                        <NavLink to={'/'} className='mx-4'>Menu</NavLink>

                        <span className='absolute right-[0] text-white font-bold
                        top-[-3px] bg-orange-400 rounded-[50%] px-1 text-[10px]'
                        >{quantityFoods.length > 0 ? quantityFoods.length : ''}</span>

                    </div>

                    <div className='relative'>
                        <NavLink
                            to={'/orders'}
                            className='mx-4'
                            >Orders</NavLink>
                        <span className='absolute right-[0] text-white font-bold
                        top-[-3px] bg-orange-400 rounded-[50%] px-1 text-[10px]'
                        >{quantityOrders.length > 0 ? quantityOrders.length : ''}</span>
                    </div>
                    <NavLink
                        to={'/admin'}
                        className='mx-4'
                        >Admin</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;