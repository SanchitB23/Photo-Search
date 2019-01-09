import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ''
        }
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term)
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            onChange={(e) => { this.setState({ term: e.target.value }) }}
                            value={this.state.term}
                            placeholder="Search Here" />
                    </div>
                </form>
            </div>
        )
    }
}
