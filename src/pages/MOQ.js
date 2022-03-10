import React, { useEffect } from 'react';
import Layout from './../layouts/Main';
import Product from '../components/Product';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMoqById } from './../store/actions/MoqActions';

const MOQ = ({ match, getMoqById, moqs: { moq } }) => {

    useEffect(() => {

        async function fetchMoqById () {

            await getMoqById(match?.params?.id);

        };

        fetchMoqById();

    }, [getMoqById, match?.params?.id]);

    // console.log(moq);

    return (

        <Layout>
            
            <Product moq={moq} />

        </Layout>

    )

};

const mapStateToProps = (state) => {

    return {

        moqs: state.moqs

    }

};

const mapDispatchToProps = (dispatch)  => { 

    return bindActionCreators({ getMoqById }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(MOQ);
