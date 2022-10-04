import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ padding: 10 }}>Interface List:</Text>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("BAI2")}>
                    <View style={{ padding: 10, backgroundColor: '#4baef8', paddingHorizontal: 30, borderRadius: 5, marginBottom: 10 }}>
                        <Text style={{ color: 'white' }}>
                            Bai 2
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => navigation.navigate("INTERFACE2")}>
                    <View style={{ padding: 10, backgroundColor: '#4baef8', paddingHorizontal: 30, borderRadius: 5, marginBottom: 10 }}>
                        <Text style={{ color: 'white' }}>
                            Interface 2
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("INTERFACE3")}>
                    <View style={{ padding: 10, backgroundColor: '#4baef8', paddingHorizontal: 30, borderRadius: 5, marginBottom: 10 }}>
                        <Text style={{ color: 'white' }}>
                            Interface 3
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("INTERFACE4")}>
                    <View style={{ padding: 10, backgroundColor: '#4baef8', paddingHorizontal: 30, borderRadius: 5, marginBottom: 10 }}>
                        <Text style={{ color: 'white' }}>
                            Interface 4
                        </Text>
                    </View>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
