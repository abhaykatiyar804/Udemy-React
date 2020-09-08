import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {

    const [term, setTerm] = useState('programming');

    const [debounceTerm , setDebounceTerm] = useState(term)

    const [result, setResults] = useState([])


    console.log(result)

useEffect(()=>{
    const timeerId = setTimeout(()=>{
        setDebounceTerm(term)
    },1000);

    return ()=>{
        clearTimeout(timeerId)
    }
},[term])


useEffect(()=>{

    const search = async () => {

        const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: debounceTerm
            }
        })

        setResults(data.query.search)
    }
search()

},[debounceTerm])

    // useEffect(() => {

       

    //     if (term && !result.length) {
    //         search()
    //     }
    //     else {
    //         const timeoutID = setTimeout(() => {
    //             if (term) {
    //                 search()
    //             }
    //         }, 500);

    //         return () => {
    //             clearTimeout(timeoutID)
    //         }

    //     }


    // }, [term])




    const renderedResults = result.map(item => {

        return (

            <div className='item' key={item.pageid}>
                <div className='right floated content'>
                     < a className='ui button'
                        href={`https://en.wikipedia.org?curid=${item.pageid}`
                        }
                    >Go</a>

                </div>
                <div className='content'>
                    <div className='header'>
                        {item.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
                </div>
            </div>
        )
    })


    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input className='input'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}

                    />
                </div>
            </div>

            <div className='ui celled list'>
                {renderedResults}

            </div>
        </div>
    )

}

export default Search