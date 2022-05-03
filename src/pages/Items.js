import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from './../layouts/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCategories } from './../store/actions/CategoryActions';
import { getMoqs } from './../store/actions/MoqActions';
import CategoryMOQsCard from './../components/CategoryMOQsCard';
import Currency from 'react-currency-formatter';

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

                        {moqs.map((moq, i) => <Link to={`/products/${moq?.id}`}>
                
                            <div key={i} className="flex flex-col">

                                <div className="relative bg-gray-100 h-36 rounded-t-md">

                                    <img className='h-36 object-contain w-full' src={moq?.product[0]?.images[0] || "https://via.placeholder.com/300"} alt={moq.id} onError={(e) => { e.target.src = "https://via.placeholder.com/300" }} />

                                    <div className='absolute top-0 h-36 w-full bg-black bg-opacity-30 p-2'>

                                        <h5 className='text-white absolute bottom-2 font-extrabold uppercase'>{moq?.product[0]?.name}</h5>

                                    </div>

                                </div>

                                <div className="bg-tangerine text-white text-center rounded-b-md py-1 capitalize">{typeof moq.price === "number" ? <Currency quantity={moq.price} currency="KES" /> : moq.price}</div>

                            </div>

                        </Link>)}

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
