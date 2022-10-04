import { StyleSheet } from 'react-native';
import { SLIDE_HEIGHT } from '../../Onboarding/Slide';
import { Config } from '../../Config/Config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Config.colors.white,
    },
    topLayout: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: Config.borderRadius.md,
        // backgroundColor: 'red',
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    pictures: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    },
    bottomLayout: {
        flex: 1,
    },
    bottonLayoutContent: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
        borderTopLeftRadius: Config.borderRadius.md,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingTop: 25,
        paddingHorizontal: Config.spacing.xl,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Config.colors.black,
    },
    description: {
        fontSize: 13,
        color: Config.colors.description,
        textAlign: 'center',
        marginVertical: 10,
    },
});
