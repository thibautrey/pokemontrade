import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RedditList } from './';
import * as actions from './redux/actions';
var pokemonData = require('../common/pokemonData');

export class DefaultPage extends Component {
    static propTypes = {
        home: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    };

    render() {
        const { count, fetchRedditReactjsListPending, redditReactjsList, fetchRedditReactjsListError } = this.props.home;
        const { counterPlusOne, counterMinusOne, resetCounter, fetchRedditReactjsList } = this.props.actions;
        return (
            <div className="row" id="tradingAds">
                <div className="adsColumn col-xs-12 col-md-6">
                    <SellColumn/>
                </div>
                <div className="adsColumn col-xs-12 col-md-6">

                </div>
            </div>
        );
    }
}

class SellColumn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ads: [{
                pokemon: "pikachu",
                player: 1,
                date: new Date()
            }, {
                pokemon: "bulbasaur",
                player: 2,
                date: new Date()
            }, {
                pokemon: "venusaur",
                player: 3,
                date: new Date()
            }]
        };
    }

    render(){
        return (
            <div id="SellColumn">
                <div><h3>Sell pokemon</h3></div>
                <div className="adRowContainer table-responsive">
                    <table className="table table-striped table-hover">
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Player</th>
                                <th>Date</th>
                                <th>Location</th>
                            </tr>

                            {this.state.ads.map((row, i)=>{
                                return (<SellRow key={"SellRow"+i} data={row}/>);
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

class SellRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    componentDidMount(){
        var _this = this;
        pokemonData.forms(this.props.data.pokemon).then((data)=>{
            _this.setState({
                name: data.name
            })
        });
    }

    render(){
        return (
            <tr>
                <td><PokemonImage pokemon={this.props.data.pokemon}/></td>
                <td>{this.state.name.capitalize()}</td>
                <td>Player name</td>
                <td>{this.props.data.date.getDate()+"/"+this.props.data.date.getMonth()}</td>
                <td>Location</td>
            </tr>
        );
    }
}

class PokemonImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: ""
        }
    }

    componentDidMount(){
        this.init();
    }

    init(){
        var _this = this;
        pokemonData.forms(this.props.pokemon).then((data)=>{
            _this.setState({
                url: data.sprites.front_default
            })
        });
    }

    render(){
        return (
            <img src={this.state.url} style={{width: "50px", height: "50px"}}/>
        );
    }
}

/* istanbul ignore next */
function mapStateToProps(state) {
    return {
        home: state.home,
    };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...actions }, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DefaultPage);
