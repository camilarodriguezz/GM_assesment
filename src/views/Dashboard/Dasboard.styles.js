
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    wraper: {
        alignItems: 'center',
        textAlign: 'center'
    },
    title: {
        color: '#D4AF37',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        padding: 10,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        marginBottom: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    searchBox: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        width: 210,
        backgroundColor: 'black',
        borderRadius: 10,
        marginRight: 10,
        borderColor: '#fff',
        borderWidth: 2,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        width: 140,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    recordsContainer: {
        padding: 5,
        margin: 5,
    },
    recordsData: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        alignSelf: 'center',
    }
})

export default styles;