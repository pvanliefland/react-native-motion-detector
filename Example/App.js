import React, {Component} from 'react';
import {StyleSheet, Text, View, DeviceEventEmitter} from 'react-native';
import {MotionDetector} from 'react-native-motion-detector';

export default class Example extends Component {
    constructor(props) {
        super(props);

        this.motionListener = null;
        this.state = {
            roll: null,
            pitch: null,
            yaw: null
        }
    }

    componentWillMount() {
        this.motionListener = DeviceEventEmitter.addListener('attitude', this.onAttitudeChange.bind(this));
        MotionDetector.start();
    }

    componentWillUnmount() {
        this.motionListener.remove();
        MotionDetector.stop();
    }

    onAttitudeChange(attitudeData) {
        this.setState({...attitudeData});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.data}>Roll: {this.state.roll}</Text>
                <Text style={styles.data}>Pitch: {this.state.pitch}</Text>
                <Text style={styles.data}>Yaw: {this.state.yaw}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    data: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});