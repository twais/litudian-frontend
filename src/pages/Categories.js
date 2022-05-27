import React, { Component } from 'react';
import Layout from './../layouts/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCategoryById } from './../store/actions/CategoryActions';
import { getMoqsByCategoryId } from './../store/actions/MoqActions';
import Carousel from './../components/Slider';
import MOQ from './../components/MOQ';

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

                        {data.map((moq, i) => <MOQ key={i} moq={moq} />)}

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
