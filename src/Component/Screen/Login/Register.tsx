import { View, Text, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Styles } from './Styles';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonCustom from '../../Button/ButtonCustom';
import { StackNavigatorProps, Navigations } from '../../../Navigation/Navigations';
import { TextInputForm, TextInputFormIcon, RegisterSchema } from '../../Form/Index';
import { Config } from '../../Config/Config';
import { Formik } from 'formik';

interface dataForm {
    email: string;
    password: string;
    confirmPassword: string;
}

const {width} = Dimensions.get('window');
const Register = ({navigation}: StackNavigatorProps<Navigations, 'Register'>) => {
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const [showPassword2, setShowPassword2] = useState<boolean>(true);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={Styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.topLayoutRegister}>
                    <View style={Styles.containerModel}>
                        <View style={Styles.modelSmall}>
                            <Text style={Styles.modelText}>Now</Text>
                        </View>
                        <View style={[Styles.modelLarge, Styles.box1]}>
                            <Image source={require('../../../Assets/img/mLogin2.png')} style={Styles.pictures} />
                        </View>
                        <View style={[Styles.modelLarge, Styles.box2]}>
                            <Image source={require('../../../Assets/img/mLogin1_c.png')} style={Styles.pictures} />
                        </View>
                    </View>
                    <View style={Styles.containerHeader}>
                        <Text style={Styles.title}>Register Now</Text>
                        <Text style={Styles.descrtiption}>Please enter the details below to create new account.</Text>
                    </View>
                </View>
                <Formik
                    validationSchema={RegisterSchema}
                    initialValues={{ email: '', password: '', confirmPassword: '' }}
                    onSubmit={(values) => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, touched, errors }) => (
                        <View style={Styles.bottomLayoutLogin}>
                            <View style={Styles.formInput} >
                                <TextInputForm
                                    placeholder="Enter your email"
                                    secureText={false}
                                    width={width - 30}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                />
                                {
                                    !touched.email ? null : errors.email && touched.email ? <Text style={Styles.errorMsg}>{errors.email}</Text> : null
                                }
                                <TextInputFormIcon
                                    placeholder="Enter your password"
                                    secureText={showPassword}
                                    width={width - 80}
                                    icon={ showPassword ? 'eye-slash' : 'eye' }
                                    size={20}
                                    color={Config.colors.primary}
                                    onPress={() => handleShowPassword()}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                />
                                {
                                    !touched.password ? null : errors.password && touched.password ? <Text style={Styles.errorMsg}>{errors.password}</Text> : null
                                }
                                <TextInputFormIcon
                                    placeholder="Confirm your password"
                                    secureText={showPassword2}
                                    width={width - 80}
                                    icon={ showPassword2 ? 'eye-slash' : 'eye' }
                                    size={20}
                                    color={Config.colors.primary}
                                    onPress={() => setShowPassword2(!showPassword2)}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                />
                                {
                                    !touched.confirmPassword ? null : errors.confirmPassword && touched.confirmPassword ? <Text style={Styles.errorMsg}>{errors.confirmPassword}</Text> : null
                                }
                            </View>
                            <View style={{ height: 35 }} />
                            <ButtonCustom variant="primary" label="Create your account!" onPress={() => handleSubmit()} />
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
                                <View style={Styles.footerQuestion}>
                                    <Text style={Styles.defaultFont}>Already have an account! </Text>
                                    <Text style={[Styles.defaultFont, Styles.colorActive]}>Login</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </View>
    );
};

export default Register;
