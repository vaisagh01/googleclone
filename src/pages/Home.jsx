import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './Home.css'
import SearchInput from '../components/SearchInput'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Search, Mic, ScanSearch} from 'lucide-react'
import useGoogleSearch from '../useGoogle'

function Home() {
  const [term, setTerm] = useState(""); //search term/query
  const {data} = useGoogleSearch(term); //main data from google api

    return (
    <div className='container'>

      <Header/> 

      <div className='home-main'>

        <img className="google-icon" src="google_logo.png" alt="google" />

        <SearchInput term={term} setTerm={setTerm}/>

        <p><span>New!</span> Learn more about the <a href="">Google AI Essentials</a> course, zero experience required</p>

        <section>

            <p>Google offered in:</p>
            <ul>
                <li><a href="">English</a></li>
                <li><a href="">Hindi</a></li>
                <li><a href="">Tamil</a></li>
                
            </ul>
        </section>
      </div>

      <Footer />

    </div>
  )
}

export default Home
