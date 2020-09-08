import React, { useState } from 'react';
import Accordion from './Component/Accordion'
import Search from './Component/Search'
import DropDown from './Component/Dropdown'
import Translate from './Component/Translate'
import Route from './Component/Route'
import Header from './Component/Header'



const items = [
    { title: 'What is React ? ', content: "React is frontend js framework" },
    { title: 'why use React ?', content: "React is a favorite js library among Enginners" },
    { title: "How to use React ?", content: "You use React by Creating Components" }

]

const options = [
    { label: 'The color Red', value: 'red' },
    { label: 'The color Blue', value: 'blue' },
    { label: 'The color Green', value: 'green' },
]

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} />
    }
}

const showList = () => {
    if (window.location.pathname === '/list') {
        return <DropDown />
    }
}

const showSearch = () => {
    if (window.location.pathname === '/search') {
        return <Search />
    }
}




export default () => {

    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)


    return (
        <div>
            <Header/>
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
            <Route path='/dropdown'>
                <DropDown selected={selected}
                    onSelectedChange={setSelected}
                    options={options} />

            </Route>

            {/* <button onClick={()=>setShowDropdown(!showDropdown)}>
        Toggle Button
        </button>
            { showDropdown ?

                <DropDown  selected={selected}
                onSelectedChange={setSelected}
                options={options} />
                : null
            } */}

            {/* <Translate/> */}
        </div>
    )
};