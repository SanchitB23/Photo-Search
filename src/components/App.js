import React, { Component } from 'react'

import UnSplashAPI from '../api/UnSplashAPI';
import SearchBar from './SearchBar';
import ImageList from './ImageList'
export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: []
        }
    }

    async onSearchSubmit(term) {
        const response = await UnSplashAPI.get('/search/photos', {
            params: {
                query: term,
                per_page: 30
            }
        });
        this.setState({ images: response.data.results });
    }
    render() {
        return (
            <div className="ui container" style={{ margin: '20px' }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit.bind(this)} />
                {
                    this.state.images.length
                        ? <div><hr />Found: {this.state.images.length} images<hr /></div>
                        : false
                }
                <ImageList images={this.state.images} />
            </div>
        )
    }
}
