import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Button from '@material-ui/core/Button'
import { login } from '../../redux/auth-reducer'
import './login.css'
import { connect } from 'react-redux'

const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
}
const savedValues = {
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
}
const onSubmit = (values, props) => {
    login(values.email, values.password, values.rememberMe)
}

const signUpSchema = Yup.object().shape({
    email: Yup.string().email('Неверный email').required('Поле не заполнено'),
    password: Yup.string()
        .min(6, 'Пароль должен содержать минимум 6 символов ')
        .max(50, 'Пароль слишком длинный')
        .required('Поле не заполнено'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Пароли не совпадают')
        .required('Поле не заполнено'),
})

const Login = (props) => {
    const [form, setForm] = useState(null)

    return (
        <Formik
            initialValues={form || initialValues}
            validateOnBlur={true}
            validationSchema={signUpSchema}
            onSubmit={onSubmit}
            enableReinitialize>
            <Form className={'login__form'}>
                <label htmlFor="email">Email Address</label>
                <Field placeholder={'samurai@gmail.com'} name={'email'} type={'email'} />

                <ErrorMessage className={'login__error'} component={'div'} name={'email'} />
                <label htmlFor="password">password</label>
                <Field name={'password'} type={'password'} />
                <ErrorMessage className={'login__error'} component={'div'} name={'password'} />

                {/* <label htmlFor="confirmPassword">Confirm your password</label>
                <Field name={'confirmPassword'} type={'password'} />
                <ErrorMessage
                    className={'login__error'}
                    component={'div'}
                    name={'confirmPassword'}
                /> */}
                <p>
                    <label>
                        <Field name={'rememberMe'} type="checkbox" />
                        <span>Запомнить</span>
                    </label>
                </p>

                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={!props.isValid && !props.dirty && props.email}
                    onClick={() => setForm(savedValues)}>
                    Submit
                </Button>
            </Form>
        </Formik>
    )
}

export default connect(null, { login })(Login)
