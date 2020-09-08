import React from 'react'
import unsplash from './api/unsplash'
import SearchBar from './SearchBar'
import ImageLIst from './ImageList'
// const App = ()=>{
//     return <div className='ui container' style={{marginTop:'10px'}}>
//         <SearchBar/></div>
// }

class App extends React.Component {


    state = { images: [] }

    onSearchSubmit = async (term) => {

        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        })

        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageLIst images = {this.state.images}/>
                {/* Found : {this.state.images.length} images */}
            </div>
        )
    }

}

export default App