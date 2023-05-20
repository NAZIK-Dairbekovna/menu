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
        <div className='bg-blue-200 py-16'>
            <div className = "container">
                <h1 className='text-center text-4xl text-gray-700 mb-20'>CREATE PRODUCT</h1>
                <form
                    className='flex items-start justify-between px-30 py-26'
                    onSubmit={handleSubmit}>

                    <div className='flex flex-col items-start'>
                        <input type="file"
                               className='w-[130px] h-[50px] mb-6'
                               onChange={handleChangePhoto}/>
                        <input
                            type="text"
                            placeholder='food name'
                            className='border py-2 px-3 rounded-xl w-[430px] h-[50px] mb-9'
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>

                        <input
                            type="number"
                            placeholder='price'
                            className='border py-2 px-3 rounded-xl w-[430px] h-[50px] mb-9'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}/>

                        <button onClick={() => newFood}
                                type="submit"
                                className='w-[130px] py-2 px-3 bg-yellow-500 rounded-xl text-center text-xl text-white'
                        >create
                        </button>
                    </div>

                    <div>
                        {
                            photo ?
                                <MenuCard name={name} photo={photo} price={price}/>
                                :
                                <div
                                    className='w-[500px] flex items-center justify-center rounded-[10px] h-[300px] bg-gray-100'>
                                    <h1 className='text-4xl text-center text-bolder text-black'>
                                        place for a photo</h1>
                                </div>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Admin;