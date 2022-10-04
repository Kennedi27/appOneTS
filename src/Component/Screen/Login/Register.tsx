import { View, Text, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Styles } from './Styles';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonCustom from '../../Button/ButtonCustom';
import { StackNavigatorProps, Navigations } from '../../../Navigation/Navigations';
import TextInputForm, {TextInputFormIcon} from '../../Form/TextInputForm';
import { Config } from '../../Config/Config';


const {width} = Dimensions.get('window');
const Register = ({navigation}: StackNavigatorProps<Navigations, 'Register'>) => {
    const [showPassword, setShowPassword] = useState(true);
    const [showPassword2, setShowPassword2] = useState(true);

    const [dataForm, setDataForm] = useState({
        email: null,
        password: null,
        confirmPassword: null,
    });

    const handleformValue = (name: string, value: string) => {
        setDataForm({...dataForm, [name]: value});
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleCreatePassword = () => {
        if (dataForm.password === dataForm.confirmPassword){
            console.log(dataForm);
        } else {
            console.log('Password not match');
        }
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
                <View style={Styles.bottomLayoutLogin}>
                    <View style={Styles.formInput} >
                        <TextInputForm
                            placeholder="Enter your email"
                            secureText={false}
                            width={width - 30}
                            onChangeText={(val) => handleformValue('email', val)}
                        />
                        <TextInputFormIcon
                            placeholder="Enter your password"
                            secureText={showPassword}
                            width={width - 80}
                            icon={ showPassword ? 'eye-slash' : 'eye' }
                            size={20}
                            color={Config.colors.primary}
                            onPress={() => handleShowPassword()}
                            onChangeText={(val) => handleformValue('password', val)}
                        />
                        <TextInputFormIcon
                            placeholder="Confirm your password"
                            secureText={showPassword2}
                            width={width - 80}
                            icon={ showPassword2 ? 'eye-slash' : 'eye' }
                            size={20}
                            color={Config.colors.primary}
                            onPress={() => setShowPassword2(!showPassword2)}
                            onChangeText={(val) => handleformValue('confirmPassword', val)}
                        />
                    </View>
                    <View style={{ height: 35 }} />
                    <ButtonCustom variant="primary" label="Create your account!" onPress={() => handleCreatePassword()} />
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
                        <View style={Styles.footerQuestion}>
                            <Text style={Styles.defaultFont}>Already have an account! </Text>
                            <Text style={[Styles.defaultFont, Styles.colorActive]}>Login</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </View>
    );
};

export default Register;
