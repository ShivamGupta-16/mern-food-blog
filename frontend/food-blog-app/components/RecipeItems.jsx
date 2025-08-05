import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../src/assets/food2.jpg'
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";

export default function Recipeitems() {
const allRecipes=useLoaderData()
console.log(allRecipes)
  return (
    <>
        <div className="card-container">
            {
                allRecipes?.map((item,index)=>{
                    return (
                        <div key={index} className='card'>
                            <img src={`http://localhost:5000/images/${item.coverImage}`} width='120px' height='100px' alt="" />
                            <div className="card-body">
                                <div className="title">{item.title}</div>
                                <div className="icons">
                                    <div className='timer'>
                                        <BsFillStopwatchFill />30min
                                    </div>
                                    <FaHeart />

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
