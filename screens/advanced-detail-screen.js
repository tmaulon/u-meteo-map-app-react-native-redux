import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { getForecastWeatherByCity } from '../actions'

export class AdvancedDetailScreen extends Component {

    componentDidMount() {
        const city = this.props.navigation.getParam("city");
        this.props.getForecastWeatherByCity(city)
    }

    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
                <Text> Advanced Detail Screen </Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = {
    getForecastWeatherByCity
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedDetailScreen);
