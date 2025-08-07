import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home';
import AddFoodRecipe from './pages/AddFoodRecipe';
import MainNavigation from '../components/MainNavigation';
import axios, { all } from 'axios'
import EditRecipe from './pages/EditRecipe';


const getAllRecipes= async() => {
  let allRecipes =[]
  await  axios.get('https://mern-food-blog-ved9.onrender.com/recipe').then(res=> {
    allRecipes=res.data
  })
  return allRecipes
}

const getMyRecipe=async()=>{
  let user= JSON.parse(localStorage.getItem("user"))
  let allRecipes=await getAllRecipes()
  return allRecipes.filter(item=>item.createdBy === user._id)
}

const getFavRecipes=()=>{
  return JSON.parse(localStorage.getItem("fav"))
}

const router=createBrowserRouter([
  {path: "/",element:<MainNavigation/>,children:[
    {path:"/", element:<Home/>, loader:getAllRecipes},
    {path:"/myRecipe", element:<Home/>,loader:getMyRecipe},
    {path:"/favRecipe", element:<Home/>,loader:getFavRecipes},
    {path:"/addRecipe", element:<AddFoodRecipe/>},
    {path:"/editRecipe/:id", element:<EditRecipe/>},
  ]}
])

export default function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

