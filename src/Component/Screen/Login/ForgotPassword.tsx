import { View, Text, TouchableWithoutFeedback, Image, Dimensions, Alert } from 'react-native';
import React from 'react';
import { Styles } from './Styles';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonCustom from '../../Button/ButtonCustom';
import { StackNavigatorProps, Navigations } from '../../../Navigation/Navigations';
import { TextInputForm, ResetPasswordSchema } from '../../Form/Index';
import {Formik} from 'formik';

const {width} = Dimensions.get('window');

const ForgotPassword = ({navigation}: StackNavigatorProps<Navigations, 'ForgotPassword'>) => {
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
                <Text style={Styles.title}>Forget Password</Text>
                <Text style={Styles.descrtiption}>Please enter the details below to continue.</Text>
            </View>
        </View>
        <Formik
            validationSchema={ResetPasswordSchema}
            initialValues={{ email: '' }}
            onSubmit={(values) => {
              Alert.alert(
                'Success',
                `We just send link reset password to ${values.email}`,
                [
                  {
                    text: 'Oke',
                    onPress: () => console.log(values.email),
                  },
                ]
              );
            }}
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
                    </View>
                    <View style={{ marginVertical: 20 }} />
                    <ButtonCustom variant="primary" label="Reset password" onPress={() => handleSubmit()} />
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
                        <View style={Styles.footerQuestion}>
                            <Text style={Styles.defaultFont}>Don't have an account! </Text>
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

export default ForgotPassword;
