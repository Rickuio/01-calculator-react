import { StyleSheet } from "react-native";

export const colors = {
    darkGray: '#2D2D2D',
    lightGray: '#9B9B9B',
    orange: '#FF9427',
    lightGreen: '#CDE27C',
    darkGreen: '#009528',
    textPrimary: 'white',
    textSecondary: '#666666',
    background: '#000000'
}

export const styles = StyleSheet.create({
    backgroud: {
        flex: 1,
        backgroundColor: colors.background
    },
    calculatorContainer:{
        flex: 1,
        padding: 40,
        justifyContent: 'flex-end'
    },
    calculatorPadd: {
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    mainResult: {
        color: colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '400'
    },
    subResult: {
        color: colors.textSecondary,
        fontSize: 40,
        marginBottom: 50,
        textAlign: 'right',
        fontWeight: '300'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: colors.darkGray,
        borderRadius: 40,
        marginHorizontal: 8,
        justifyContent: 'center'
    },
    buttonText: {
        color: '#EEEEEE',
        fontSize: 30,
        fontWeight: '300',
        padding: 5,
        textAlign: 'center'
    },
    buttonTextMini: {
        color: '#EEEEEE',
        fontSize: 12,
        textAlign: 'center'
    }
})