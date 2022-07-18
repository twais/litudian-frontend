import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMoqsByCategoryId } from './../store/actions/MoqActions';
import instance from './../utils/instance';
import { Link } from 'react-router-dom';
import MOQ from './MOQ';

const CategoryMOQsCard = (props) => {

    const { category } = props;

    const [list, setList] = useState([]);

    useEffect(() => {

        async function getMoqs () {

            try {

                const response = await instance.get(`moq/category/${category.id}`);

                let data = [];

                if(response.data.moqs) {

                    data = response.data.moqs;

                    setList(data.splice(0, 4));

                }
                
            } catch (error) {

                console.log(error);
                
            }

        }

        getMoqs()

    }, [category]);

    return (

        <div className="bg-white rounded w-full flex flex-col px-4 py-5 shadow-sm">

            <div className="flex flex-row justify-between">

                <h1 className="text-tangerine font-bold uppercase text-sm">{category.name}</h1>

                <Link to={`/categories/${category.id}`}>
                
                    <h1 className="text-black font-bold">see more</h1>

                </Link>

            </div>

            <div className="grid grid-cols-4 gap-2 py-5">

                {list.map((moq, i) => <MOQ key={i} moq={moq} />)}

            </div>

        </div>

    );

};

const mapStateToProps = (state) => {

    return {

        moqs: state.moqs

    }

};

const mapDispatchToProps = (dispatch)  => { 

    return bindActionCreators({ getMoqsByCategoryId }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMOQsCard);
