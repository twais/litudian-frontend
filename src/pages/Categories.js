import React, { Component } from 'react';
import Layout from './../layouts/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCategoryById } from './../store/actions/CategoryActions';
import { getMoqsByCategoryId } from './../store/actions/MoqActions';

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

                    <h1 className="text-tangerine font-bold uppercase">{category !== null && category.name}</h1>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-5">

                        {data.map((moq, i) => 
                        
                            <div key={i} className="flex flex-col shadow-md">

                                <div className="bg-white h-36 rounded-t-md"></div>

                                <div className="bg-tangerine text-white text-center rounded-b-md py-1 capitalize">{moq.supplier_currency} {moq.price}</div>

                            </div>
                        
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
