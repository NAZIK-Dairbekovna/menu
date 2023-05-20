import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import {decreaseFood, increaseFood, removeFood} from "../../store/MenuSlice";
import {NavLink} from "react-router-dom";

const Orders = () => {
    const {orders} = useSelector((state: RootState) => state.menu)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className='py-16 px-10 bg-blue-200'>
            <div className='container'>
                <h1 className='text-center text-4xl text-gray-700 mb-20'>MY ORDERS</h1>
                <ul className="w-[400px] rounded-[10px] h-[150px]">
                    {
                        orders.map(food => (
                            <li className=' bg-gray-200 py-4 px-4 rounded-[8px] my-2'>
                                {
                                    <div className='flex items-center justify-evenly '>
                                        <img width={140} src={food.photo} alt=""/>
                                        <div>
                                            <h1 className='text-black ml-2 mb-4 text-xl text-bold'>{food.name}</h1>
                                            <h2 className='ml-2 text-xl text-bold text-green'>{food.price * food.quantity}$</h2>
                                        </div>

                                        <div>
                                            <button type="button"
                                                    onClick={() => dispatch(removeFood(food))}
                                                    className="focus:outline-none text-white
                                             bg-red-700 hover:bg-red-800 focus:ring-4
                                             focus:ring-red-300 font-medium rounded-lg
                                             text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600
                                             dark:hover:bg-red-700 dark:focus:ring-red-900"
                                            >delete order
                                            </button>
                                            <div className='flex items-center w-[60px] justify-between'>
                                                <button
                                                    onClick={() => dispatch(increaseFood(food.quantity))}
                                                    className='w-[120px] py-2 px-3 bg-yellow-500 rounded-xl text-center text-xl text-white'
                                                >+</button>
                                                {food.quantity}x
                                                <button
                                                    onClick={() => dispatch(decreaseFood(food.quantity))}
                                                    className='w-[140px] py-2 px-3 bg-yellow-500 rounded-xl text-center text-xl text-white'
                                                >-</button>
                                            </div>


                                        </div>
                                    </div>
                                }
                            </li>
                        ))
                    }
                </ul>

                <div>
                    <NavLink to={'/'}>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r
                    from-green-400 via-green-500 to-green-600
                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                    focus:ring-green-300 dark:focus:ring-green-800 shadow-lg
                    shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >to order
                        </button>
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default Orders;