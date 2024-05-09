import React from 'react'
import './SearchResults.css'

function SearchResult({item}) {
    
  return (
    <div className='site-content'>
        <section>
          {
            item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
              <img className='site-img' src={item.pagemap?.cse_image[0]?.src} alt="" />
            )
          }
            <a href={item.link} className='links'>
                <p className='site-title '>{item.title}</p>
                <a className='site-link'>{item.displayLink}</a>
            </a>
        </section>
        <p>{item.snippet}</p>
    </div>
  )
}

export default SearchResult
