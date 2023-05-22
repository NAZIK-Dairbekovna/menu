import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import {decreaseOrder, Order, removeFood} from "../../store/MenuSlice";
import {NavLink} from "react-router-dom";

const Orders = () => {
    const {orders} = useSelector((state: RootState) => state.menu)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className='w-[1350px] h-[500px] bg-blue-200'>
            <div className='container'>

                    <h1 className='text-center text-4xl text-gray-700 mb-20'>MY ORDERS</h1>
                    <div className='flex justify-center'>
                        <ul className="w-[600px] rounded-[10px] h-[150px]">
                            {
                                orders.map(food => (
                                    <li className='bg-gray-100 py-4 px-4 rounded-[8px] my-2'>
                                        {
                                            <div className='flex items-center\ justify-between'>
                                                <div>
                                                    <img width={140} src={food.photo} alt=""/>
                                                </div>
                                                <div>
                                                    <h1 className='text-black ml-2 mb-4 text-xl text-bold'>{food.name}</h1>
                                                    <h2 className='ml-2 text-xl text-bold text-green'>{food.price * food.quantity}$</h2>
                                                </div>

                                                <div className="flex flex-col">
                                                    <button type="button"
                                                            onClick={() => dispatch(removeFood(food))}
                                                            className="focus:outline-none text-white
                                             bg-red-700 hover:bg-red-800 focus:ring-4
                                             focus:ring-red-300 font-medium rounded-lg
                                             text-sm px-7 py-2 mr-2 mb-2 dark:bg-red-600
                                             dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                    >delete order
                                                    </button>
                                                    <div className='flex items-center w-[60px] justify-between'>
                                                        <button
                                                            onClick={() => dispatch(Order(food))}
                                                            className='w-[120px] py-0.5 px-3.5 bg-yellow-500 rounded-xl text-center text-xl text-white'
                                                        >+
                                                        </button>
                                                        <div className='p-3'>
                                                            {food.quantity}x
                                                        </div>
                                                        <button
                                                            onClick={() => dispatch(decreaseOrder(food))}
                                                            className='w-[140px] py-0.5 px-4 bg-yellow-500 rounded-xl text-center text-xl text-white'
                                                        >-</button>
                                                    </div>


                                                </div>
                                            </div>
                                        }
                                    </li>
                                ))
                            }
                            <div className="flex items-end justify-end mt-10">
                                <NavLink to={'/'}>
                                    <button
                                        type="button"
                                        className="text-white bg-gradient-to-r
                    from-green-400 via-green-500 to-green-600
                    hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                    focus:ring-green-300 dark:focus:ring-green-800 shadow-lg
                    shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80
                    font-medium rounded-lg text-xl px-10 py-2.5 text-center mr-2 mb-2"
                                    >to order
                                    </button>
                                </NavLink>

                            </div>

                        </ul>
                    </div>

            </div>
        </div>
    );
};

export default Orders;