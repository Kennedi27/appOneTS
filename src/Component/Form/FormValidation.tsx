import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email:  Yup.string()
            .email('Invalid email*')
            .required('Required*'),
    password: Yup.string()
            .min(6, 'Too Short!*')
            .max(50, 'Too Long!*')
            .required('Required*'),
});

export const RegisterSchema = Yup.object().shape({
    email:  Yup.string()
        .email('Invalid email*')
        .required('Required*'),
    password: Yup.string()
        .min(6, 'Too Short!*')
        .max(50, 'Too Long!*')
        .required('Required*'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Your passwords do not match.*'),
});

export const ResetPasswordSchema = Yup.object().shape({
    email:  Yup.string()
        .email('Invalid email*')
        .required('Required*'),
});

export default LoginSchema;
