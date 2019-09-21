import React from "react" 
import SearchBar from "./searchBar" 
import Unsplash from "./unsplash"
import ImageList from "./imagelist"


class app extends React.Component {

    state = { images : []}

    onSearchSubmit = async (term) =>  {
        const response = await Unsplash.get("/search/photos", { 
            params: { query : term }, 
        })
        
        this.setState({images : response.data.results})
    }

    render() { 
        
        return (
        <div className="ui container" style={{marginTop : "10px"}}>
            <SearchBar whenSubmitting={this.onSearchSubmit}/> 
            <ImageList listImages={this.state.images}/>
        </div>
        )
    }
}


export default app