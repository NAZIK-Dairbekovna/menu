import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import {Order} from "../../store/MenuSlice";

const Menu = () => {
    const {foods} = useSelector((state: RootState) => state.menu)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className='bg-blue-200 py-16 px-6 '>

           <div className='container'>
               <h1 className='text-center text-4xl text-gray-700 mb-20'>MENU</h1>
               <ul className='flex wrap'>
                   {
                       foods.map(food => (
                           <li
                               key={food.id}
                               className='w-[260px] h-[230px] py-2 px-2
                            bg-gray-100 rounded-[10px] mx-4'>
                               {
                                   <div className='p-2'>
                                       <div>
                                           <img src={food.photo} alt=""/>
                                           <h1 className='mt-2 font-medium'>{food.name}</h1>
                                       </div>

                                       <div className='flex items-center justify-between'>
                                           <h1 className='mt-2 font-medium'>{food.price}$</h1>
                                           <button onClick={() => {
                                               dispatch(Order(food))}}
                                                   className='bg-yellow-400 text-amber-50 rounded-xl py-2 px-8'>
                                               {'to order'}
                                           </button>
                                       </div>

                                   </div>
                               }
                           </li>
                       ))
                   }
               </ul>
           </div>
        </div>
    );
};

export default Menu;