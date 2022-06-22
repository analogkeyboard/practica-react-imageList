import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput.js';
import ImagesList from './ImagesList.js';


//import axios from 'axios';

/* const App = () =>{
	return(
		<div className='ui container' style={{marginTop : '30px'}}>
			<SearchInput />
		</div>
		)
} */

class App extends React.Component {

    state={
        image:[]
    }
     onSearchSubmit= async(entry)=>{
        const response= await axios.get(`https://pixabay.com/api/?key=26648737-0f0fd31f8647db34223629d50&q=${entry}&image_type=photo&pretty=true`);
        
console.log(response.data.hits)
        this.setState({image:response.data.hits})
    }

    render() {
        return (
<div>
    
                <div className='ui container' >
                    <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                    <h1>
                        We have {this.state.image.length} images.
                        <ImagesList images={this.state.image}/>
                    </h1>
		      </div>
                       
                            
                        
              
</div>
        );
    }
}

export default App;