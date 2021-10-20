import React from 'react';
import ReactDom from 'react-dom';
import Unsplash from '../api/Unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
    
    state = {images: []};

    onSearchSubmit = async (term) => {
        console.log("search term "+ term);

         const response = await Unsplash.get('/search/photos', {
        
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }

    render(){
     return (
        <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onFormSubmit={this.onSearchSubmit}/> 
        <ImageList imagesList= {this.state.images}/>
        </div>
        
    );
    }
}

export default App;