import React, {Component} from 'react'

import PeopleList from './PeopleList'
import fetch from 'isomorphic-fetch'

const url = "https://randomuser.me/api?results=10"


const DataComponent = (ComposedComponent, url) =>
    class DataComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: [],
                loading: false,
                loaded: false
            }
        }
        componentWillMount() {
            this.setState({loading:true})
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({
                    loaded: true,
                    loading: false,
                    data
                }))
        }
        render() {
            return (
                <div className="data-component">
                    {(this.state.loading) ?
                        <div>Loading...</div> :
                        <ComposedComponent {...this.state}
                                           {...this.props} />}
                </div>
            )
        }
    }




const RandomMeUser = DataComponent(PeopleList,url)
export default RandomMeUser