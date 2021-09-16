import React from 'react';
import react from 'react';

class SearchBar extends React.Component{

    state={term:''};
    onFormSubmit=(e)=>{
        e.preventDefault();
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }
    onInputChange=(event)=>{
        // console.log(event.target.value);
        this.setState({term:event.target.value});

    }
    render(){

        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video-Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} />
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBar;