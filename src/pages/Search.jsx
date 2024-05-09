import React, { useEffect } from 'react'
import { useState } from 'react'
import './Search.css'
import SearchInput from '../components/SearchInput'
import {LayoutGrid} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SearchResults from '../components/SearchResult'
import useGoogleSearch from '../useGoogle'
import GoogleApps from '../components/GoogleApps'

function Search() {
  const [query, setQuery] = useState("");
  const {data} = useGoogleSearch(query);

  return (
    <div className='main'>

      <section>
        <div>
          <a href="/"><img className="google-icon-2" src="google_logo.png" alt="google" /></a>
          <SearchInput hidebutton query={query} setQuery={setQuery}/>
        </div> 
        <div className="home-icons">
            <GoogleApps />
            <img className='avatar' src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png" alt="" />
        </div>
      </section>

      <div className="search-tabs">
        <ul>          {/*Can be refracted*/}
          <NavLink>All</NavLink>
          <NavLink>Images</NavLink>
          <NavLink>Videos</NavLink>
          <NavLink>Shopping</NavLink>
          <NavLink>News</NavLink>
          <NavLink>More</NavLink>
        </ul>
        <ul>
          <NavLink href="">Tools</NavLink>
        </ul>
        <ul>
          <li>Safe Search</li>
        </ul>
      </div>

      {/* Searched Results Appear here */}
      {
        term &&
        <div className='results'>
          <p className='search-information'>About {data?.searchInformation.formattedTotalResults} results in ({data?.searchInformation.formattedSearchTime}s) for {term}</p>
          {
            data?.items.map((item) => {
              return <SearchResults item={item} />
            })
          }
        </div>
      }
      
    </div>
  )
}

export default Search
