import React from "react"


class searchBar extends React.Component {

    state = { term : "" }

    onFormSubmit = (e) => {
        e.preventDefault();
        // "this called on undefined" can be fixed by arrow functions with babel or with this.bind on the constructor
        this.props.whenSubmitting(this.state.term);
    }
    render()  { 
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                    <input value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} type="text"></input>
                    </div>
                </form>
            </div>
        )
    }
}


export default searchBar;