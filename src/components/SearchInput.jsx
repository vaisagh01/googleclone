
import {React, useEffect, useState} from 'react'
import {Search, ScanSearch, Mic} from 'lucide-react'
import { useNavigate } from 'react-router';
import './SearchInput.css'


function SearchInput({hidebutton, query, setQuery}) {
    const [input, setInput] = useState("");
    const nav = useNavigate();
    const search = (e) => {
      e.preventDefault();
      nav('/Search')
      setQuery(input);
    }
    
    return (
        <form>
            <div className="search-field">
                <Search className='search-icon'/>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" className='search-input' />
                <Mic className='search-mic' />
                <ScanSearch className='search-scan' />
            </div>
            {!hidebutton ? <div className="buttons">
                <button type='submit' onClick={search} variant="outlined">Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div> : <button style={{display:'none'}} type='submit' onClick={search} variant="outlined">Google Search</button>}
        </form>
    )
}

export default SearchInput
