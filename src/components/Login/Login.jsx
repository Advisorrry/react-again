import React from 'react'
import {useFormik} from 'formik'
import Button from '@material-ui/core/Button';
import l from './login.module.css'


export const Login = (props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={l.login__form}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <label htmlFor="password">password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <p>
                <label>
                    <input type="checkbox" checked="unchecked" />
                    <span>Запомнить</span>
                </label>
            </p>

            <Button variant="contained" color="primary" type="submit">Submit</Button>
        </form>
    );
};