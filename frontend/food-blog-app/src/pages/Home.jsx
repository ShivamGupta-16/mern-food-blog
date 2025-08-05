import React from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Recipeitems from '../../components/Recipeitems'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
        <section className='home'>
                <div className='left'>
                    <h1>Food Recipe</h1>
                    <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h5>
                    <button onClick={()=>navigate("/addRecipe")}>Share your recipe</button>
                </div>
                <div className='right'>
                    <img src={foodRecipe} width="320px" height="300px"></img>
                </div>
            </section>
            <div className='bg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,218.7C384,245,480,267,576,240C672,213,768,139,864,96C960,53,1056,43,1152,58.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>

            <div className="recipe">
              <Recipeitems/>
            </div>
    </>
  )
}
