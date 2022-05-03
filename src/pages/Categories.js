import React, { Component } from 'react';
import Layout from './../layouts/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCategoryById } from './../store/actions/CategoryActions';
import { getMoqsByCategoryId } from './../store/actions/MoqActions';
import Currency from 'react-currency-formatter';
import Carousel from './../components/Slider';
import { Link } from 'react-router-dom';

class Categories extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
            


        }

    }

    componentDidMount = async () => {

        const { match: { params: { id } } } = this.props;

        await this.props.getMoqsByCategoryId(id);

        await this.props.getCategoryById(id);

    }

    render() {

        const { moqs: { data }, categories: { category } } = this.props;

        return (

            <Layout>

                <div className="flex flex-col">

                    <Carousel />

                    <h1 className="text-tangerine font-bold uppercase mt-5">{category !== null && category.name}</h1>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-5">

                        {data.map((moq, i) => 
                        
                        <Link to={`/products/${moq?.id}`}>
                
                            <div key={i} className="flex flex-col">

                                <div className="relative bg-gray-100 h-36 rounded-t-md">

                                    <img className='h-36 object-contain w-full' src={moq?.product[0]?.images[0]} alt={moq.id} onError={(e) => { e.target.src = "https://via.placeholder.com/300" }} />

                                    <div className='absolute top-0 h-36 w-full bg-black bg-opacity-30 p-2'>

                                        <h5 className='text-white absolute bottom-2 font-extrabold uppercase'>{moq?.product[0]?.name}</h5>

                                    </div>

                                </div>

                                <div className="bg-tangerine text-white text-center rounded-b-md py-1 capitalize">{typeof moq.price === "number" ? <Currency quantity={moq.price} currency="KES" /> : moq.price}</div>

                            </div>

                        </Link>
                        
                        )}

                    </div>

                </div>

            </Layout>

        );

    }

}

const mapStateToProps = (state) => {

    return {

        moqs: state.moqs,

        categories: state.categories

    }

};

const mapDispatchToProps = (dispatch)  => { 

    return bindActionCreators({ getMoqsByCategoryId, getCategoryById }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
