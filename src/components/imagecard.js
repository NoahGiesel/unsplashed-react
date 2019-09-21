import React from "react" 

class imagecard extends React.Component { 

    constructor(props){
        super(props)

        this.state = {spans : 0 }

        this.imageRef = React.createRef();
    }

        //called after rendered
    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans);
    }


    setSpans = ()  => { 
        const height = this.imageRef.current.height;

        const spans = Math.ceil( height / 10 + 1);

        this.setState({spans})
    }


    render() {
        const {description, urls } = this.props.immagines
        return (
            <div style={{gridRowEnd : `span ${this.state.spans}`}}> 
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        )
    }
}


export default imagecard;