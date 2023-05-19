import React, {useState} from "react";
import {AppDispatch} from "../../store/store";
import {addFood, newFood} from "../../store/MenuSlice";
import MenuCard from "./MenuCard";
import {useDispatch} from "react-redux";


const Admin: React.FC = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [photo, setPhoto] = useState<any>("")

    const dispatch = useDispatch<AppDispatch>();


    const fileReader = new FileReader()
    fileReader.onloadend = () => {
        setPhoto(fileReader.result)
    }
    const handleChangePhoto = (e: React.ChangeEvent<any>) => {
        fileReader.readAsDataURL(e.target.files[0])
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newFood = {
            id: Date.now(),
            name,
            price: Number(price),
            photo: photo
        };
        dispatch(addFood(newFood));
        setName("");
        setPrice("");
        console.log(newFood)

    };

    return (
        <div className='admin bg-blue-200 py-10'>
            <h1 className='text-center text-4xl text-gray-700'>CREATE PRODUCT</h1>

            <form
                className='flex items-start justify-between px-30 py-26'
                onSubmit={handleSubmit}>

                <div className='form flex flex-col items-start'>
                    <input type="file"
                           className='inp w-[135px] ml-12 mb-6'
                           onChange={handleChangePhoto}/>
                    <input
                        type="text"
                        placeholder='food name'
                        className='inp border py-2 px-3 rounded w-[230px] mb-6'
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>

                    <input
                        type="number"
                        placeholder='price'
                        className='inp border py-2 px-3 rounded w-[230px] mb-6'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}/>

                    <button onClick={() => newFood}
                            type="submit"
                            className='button w-[80px] py-2 px-3 bg-orange-500 rounded text-xl text-white'
                    >create
                    </button>
                </div>

                <div>
                    {
                        photo ?
                            <MenuCard name={name} photo={photo} price={price}/>
                            :
                            <div
                                className='w-[800px] pt-8 rounded-[10px] h-[550px] bg-gray-100'>
                                <h1 className='text-3xl text-center text-bold text-gray-800'>
                                    place for a photo</h1>
                            </div>
                    }
                </div>
            </form>
        </div>
    );
};

export default Admin;