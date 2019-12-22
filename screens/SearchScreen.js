import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { SearchBar } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

const DEFAULT_COORDS = {
    lat: 48.859268,
    lng: 2.347060
};

export default class SearchScreen extends React.Component {
    state = {
        search: ""
    }
    updateSearch = search => {
        this.setState({ search })
    }
    submitSearch = () => {
        console.log('====================================');
        console.log(this.state.search);
        console.log('====================================');
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    region={{
                        latitude: DEFAULT_COORDS.lat, longitude: DEFAULT_COORDS.lng, latitudeDelta: 0.2000, longitudeDelta: 0.1000
                    }}
                    scrollEnabled={false}
                    liteMode={true}
                    style={styles.mapStyle} />
                <SearchBar
                    lightTheme
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                    onSubmitEditing={this.submitSearch}
                    placeholder="Type your city..."
                    containerStyle={{
                        position: "absolute",
                        bottom: hp("50%"),
                        left: wp("5%"),
                        width: wp("90%")
                    }} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});