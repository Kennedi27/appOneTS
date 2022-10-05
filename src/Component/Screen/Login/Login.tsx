import { View, Text, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Styles } from './Styles';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonCustom from '../../Button/ButtonCustom';
import { StackNavigatorProps, Navigations } from '../../../Navigation/Navigations';
import { TextInputForm, TextInputFormIcon, LoginSchema } from '../../Form/Index';
import { Config } from '../../Config/Config';
import {Formik} from 'formik';

const {width} = Dimensions.get('window');

const Login = ({navigation}: StackNavigatorProps<Navigations, 'Login'> ) => {
    const [showPassword, setShowPassword] = useState<boolean>(true);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={Styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.topLayoutLogin}>
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
                        <Text style={Styles.title}>Login Now</Text>
                        <Text style={Styles.descrtiption}>Please enter the details below to continue.</Text>
                    </View>
                </View>
                <Formik
                    validationSchema={LoginSchema}
                    initialValues={{ email: '', password: '' }}
                    onSubmit={() => navigation.navigate('Homescreen')}
                >
                    {({ handleChange, handleBlur, handleSubmit, errors, touched }) => (
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
                                    size={18}
                                    color={Config.colors.primary}
                                    onPress={() => handleShowPassword()}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                />
                                {
                                    !touched.password ? null : errors.password && touched.password ? <Text style={Styles.errorMsg}>{errors.password}</Text> : null
                                }
                            </View>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('ForgotPassword')}>
                                <Text style={[Styles.defaultFont,  Styles.colorActive, Styles.forgotPassword]}>Forgot Password?</Text>
                            </TouchableWithoutFeedback>
                            <ButtonCustom variant="primary" label="Login into your account" onPress={() => handleSubmit()} />
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Register')}>
                                <View style={Styles.footerQuestion}>
                                    <Text style={Styles.defaultFont}>Don't have an account! </Text>
                                    <Text style={[Styles.defaultFont, Styles.colorActive]}>Register</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                    )}
                </Formik>
            </ScrollView>
        </View>
    );
};

export default Login;
