import React, { useState } from 'react'
import DropDown from './Dropdown'
import Convert from './Convert'

const options = [
    { label: 'Africans', value: 'af' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Hindi', value: 'hi' },
]

const Translate = () => {


    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('hi there');
    return (
        <div className='ui form'>
            <div className='field'>
                <label>Enter Text</label>
                <input value={text}
                    onChange={(e) => setText(e.target.value)} />

            </div>

            <DropDown options={options}
                selected={language}
                label="Select a Language"
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className='ui header'>Output</h3>

            <Convert text={text} language={language} />
        </div>
    )
}

export default Translate