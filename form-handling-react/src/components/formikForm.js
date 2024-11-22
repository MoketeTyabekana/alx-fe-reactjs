import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
});


const FormikForm = () => (
    <Formik
        initialValues={{ name: '', email: '',password:'' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values);
        }}
    ></Formik>



);