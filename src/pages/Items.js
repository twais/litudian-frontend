import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Layout from './../layouts/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCategories } from './../store/actions/CategoryActions';
import { getMoqs } from './../store/actions/MoqActions';
import { getUserBids } from './../store/actions/BidActions';
import CategoryMOQsCard from './../components/CategoryMOQsCard';
import Bid from '../components/Bid';

class Items extends Component {

    constructor(props) {

        super(props);
    
        this.state = {
             
        }

    }

    componentDidMount = async () => {

        await this.props.getCategories();

        await this.props.getMoqs();

        await this.props.getUserBids();

    }

    render() {

        let { categories: { data }, bids: { data: bids } } = this.props;

        return (

            <Layout>

                <div className="flex flex-row gap-x-3">

                    <Link to="/items/in-stock" className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1 uppercase">In Stock</Link>

                    <Link to="/items/in-transit" className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1 uppercase">In Transit</Link>

                </div>

                <div className="flex flex-col mt-5">

                    <h1 className="text-tangerine font-bold uppercase">My Items</h1>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-5">

                        {bids && bids.length > 0 && bids.map((bid, i) => <Bid key={i} bid={bid} />)}

                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">

                    {data.splice(0, 2).map((category, i) => <CategoryMOQsCard key={i} category={category} />)}

                </div>
                
            </Layout>

        )

    }

};

const mapStateToProps = (state) => {

    return {

        categories: state.categories,

        moqs: state.moqs,

        bids:  state.bids

    }

};

const mapDispatchToProps = (dispatch)  => { 

    return bindActionCreators({ getCategories, getMoqs, getUserBids }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
