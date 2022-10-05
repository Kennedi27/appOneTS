import { StyleSheet, Dimensions } from 'react-native';
import { Config } from '../../Config/Config';

const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  Config.colors.white,
        paddingHorizontal: Config.spacing.md,
        height: height,
    },
    // Login Style
    topLayoutLogin: {
        flex: 1,
        height: height * 0.50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    topLayoutRegister: {
        flex: 1,
        height: height * 0.45,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    bottomLayoutLogin: {
        flex: 1,
    },
    modelSmall: {
        width: 50,
        height: 80,
        backgroundColor: 'rgba(44, 185, 128, 0.9)',
        justifyContent: 'center',
        borderRadius: 25,
        ...StyleSheet.absoluteFillObject,
        zIndex: 2,
        transform: [{
            translateY: 65,
        }],
        left: -25,
    },
    modelText: {
        textAlign: 'center',
        color: Config.colors.white,
        fontWeight: 'bold',
        fontSize: 17,
    },
    modelLarge: {
        width: 120,
        height: 190,
        justifyContent: 'center',
        borderRadius: 60,
    },
    box1: {
        backgroundColor: 'transparent',
    },
    box2: {
        backgroundColor: '#CCC',
        ...StyleSheet.absoluteFillObject,
        transform: [{
            translateX: 70,
        }],
        top: 80,
        zIndex: 3,
    },
    pictures: {
        width: 120,
        height: 180,
        resizeMode: 'center',
        overflow: 'hidden',
        borderRadius: 60,
        marginTop: 10,
        ...StyleSheet.absoluteFillObject,
    },
    containerModel: {
        height: 270,
        transform: [{
            translateX: -30,
        }],
    },
    containerHeader: {
        paddingTop: Config.spacing.md,
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: Config.colors.title,
    },
    descrtiption: {
        textAlign: 'center',
        color: Config.colors.description,
    },
    formInput: {
        flexDirection: 'column',
    },
    inputText: {
        backgroundColor: Config.colors.grey,
        marginTop: Config.spacing.lg,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontWeight: '500',
    },
    footerQuestion: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    forgotPassword: {
        marginVertical: 25,
        textAlign: 'right',
        height: 30,
    },
    defaultFont: {
        fontSize: 15,
        fontWeight: '500',
    },
    colorActive: {
        color: Config.colors.primary,
    },
    // End Login Style
    errorMsg: {
        color: Config.colors.danger,
        fontSize: 13,
    },
});
