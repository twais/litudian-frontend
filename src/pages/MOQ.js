import React, { useEffect } from 'react';
import Layout from './../layouts/Main';
import Product from '../components/Product';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMoqById } from './../store/actions/MoqActions';
import { getReviewsById } from './../store/actions/ReviewActions';

const MOQ = ({ match, getMoqById, moqs: { moq }, getReviewsById, reviews: { data: reviews } }) => {

    useEffect(() => {

        async function fetchMoqById () {

            let result = await getMoqById(match?.params?.id);

            if (result && result?.product_id) {

                await getReviewsById(result?.product_id);

            }

        };

        fetchMoqById();

    }, [getMoqById, getReviewsById, match?.params?.id]);

    console.log(reviews);

    return (

        <Layout>
            
            <Product moq={moq} reviews={reviews} />

        </Layout>

    )

};

const mapStateToProps = (state) => {

    return {

        moqs: state.moqs,

        reviews: state.reviews

    }

};

const mapDispatchToProps = (dispatch)  => { 

    return bindActionCreators({ getMoqById, getReviewsById }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(MOQ);
