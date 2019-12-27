import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

export class AdvancedDetailScreen extends Component {
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
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedDetailScreen);
