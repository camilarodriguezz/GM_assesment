import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import styles from './Dasboard.styles';
import { fetchRecords } from '../../redux/actions';

const Dashboard = (props) => {
    console.log('Dashboard props =>', props)
    const [artist, setArtist] = useState('');
    const {records} = props
    const [spinner, setSpinner] = useState(false);

    const onSearchHandler = () => {
        setSpinner(true);
        props.onSearch(artist);
    };

    // const recordsByDate = (records) => {
    //     let organizedRecords = [];

    //     for (let i = 0; i < records.length; i++) {

    //     }
    // }

    // records.sort(function(a,b){
    //     // Turn your strings into dates, and then subtract them
    //     // to get a value that is either negative, positive, or zero.
    //     return new Date(b.releaseDate) - new Date(a.releaseDate);
    //   });
    

    useEffect(() => {
        records ?
            setTimeout(() => {
                setSpinner(false)
            }, 100) : null
    }, [records, spinner])

    return (
        <SafeAreaView style={styles.container}>
            <Spinner
                visible={spinner}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
            <View style={styles.wraper}>
                <Text style={styles.title}>
                    {artist ? "i" + artist : "iArtist"}
                </Text>
                {artist ? null :
                    <Text style={styles.text}>
                        Find the records of your favorite Artist!
                    </Text>
                }
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchBox}
                    placeholder="Type Music Artist Name"
                    placeholderTextColor="#fff"
                    onChangeText={text => setArtist(text)}
                    value={artist}
                    testID="textInput"
                />
                <TouchableOpacity
                    onPress={() => onSearchHandler()}
                    style={styles.buttonContainer}
                    testID="button"
                >
                    <Text style={styles.buttonText}>
                        Show Records
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View>
                    <Text>
                        Artist Name: {artist}
                    </Text>
                </View>
                {records ? records.map((el, index) => {
                    return (
                        <View style={styles.recordsContainer} key={index}>
                            {el.artistName ?
                                <Text style={styles.recordsData}>
                                    {el.artistName}
                                </Text> :
                                null
                            }
                            {el.trackName ?
                                <Text style={styles.recordsData}>
                                    Track: {el.trackName}
                                </Text> :
                                null
                            }
                            {el.releaseDate ?
                                <Text style={styles.recordsData}>
                                    Released: {el.releaseDate.substring(0, 10)}
                                </Text> :
                                null
                            }
                            {el.primaryGenreName ?
                                <Text style={styles.recordsData}>
                                    Genre: {el.primaryGenreName}
                                </Text> :
                                null
                            }
                            {el.trackPrice ?
                                <Text style={styles.recordsData}>
                                    Price: ${el.trackPrice}
                                </Text> :
                                null
                            }
                        </View>
                    )
                }) : null
                }
            </ScrollView>
        </SafeAreaView>
    );
};

function mapStateToProps(state) {
    console.log('mapStateToProps state =>', state)
    return {
        currentArtist: state.reducer.currentArtist,
        records: state.reducer.records,
        error: state.reducer.error,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onSearch: (artist) => {
            dispatch(fetchRecords(artist))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
