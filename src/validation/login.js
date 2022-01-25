import * as yup from 'yup';

const schema = yup.object().shape({

    msisdn: yup.string().required(),

    password: yup.string().required()

});

export default schema;