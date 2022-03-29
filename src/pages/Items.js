import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from './../layouts/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCategories } from './../store/actions/CategoryActions';
import { getMoqs } from './../store/actions/MoqActions';
import CategoryMOQsCard from './../components/CategoryMOQsCard';

class Items extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }

    componentDidMount = async () => {

        await this.props.getCategories();

        await this.props.getMoqs();

    }

    render() {

        let { categories: { data }, moqs: { moqs } } = this.props;

        return (

            <Layout>

                <div className="flex flex-row gap-x-3">

                    <Link to="/items/in-stock" className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1 uppercase">In Stock</Link>

                    <Link to="/items/in-transit" className="bg-litudian-orange text-gray-50 font-bold px-4 rounded-lg text-xs py-1 uppercase">In Transit</Link>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">

                    {data.splice(0, 2).map((category, i) => <CategoryMOQsCard key={i} category={category} />)}

                </div>

                <div className="flex flex-col">

                    <h1 className="text-tangerine font-bold uppercase">Other Products</h1>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-5">

                        {moqs.map((moq, i) => <div key={i} className="flex flex-col shadow-md">

                            <div className="bg-white h-36 rounded-t-md">

                                <img className='h-36 object-contain w-full' src={moq?.product[0]?.images[0]} alt={moq.id} />
                                
                            </div>

                            <div className="bg-tangerine text-white text-center rounded-b-md py-1">Ksh {moq.price}</div>

                        </div>)}

                    </div>

                </div>
                
            </Layout>

        )

    }

};

const mapStateToProps = (state) => {

    return {

        categories: state.categories,

        moqs: state.moqs

    }

};

const mapDispatchToProps = (dispatch)  => { 

    return bindActionCreators({ getCategories, getMoqs }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
