import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const data1 = [
    "00000", "10000", "20000", "00001", "10001", "200001", "00002", "10002", "20002", "00001", "10010", "20010", "20010", "00011", "10011", "20011",
]
const Interface4Screen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            {/* <View style={{ marginBottom: 10 }}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View> */}
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />
                <View style={{ padding: 10 }}>
                    <View style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            HỆ MẬT MÃ ĐƯỜNG CONG ELLIPIC - AECC
                        </Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Tạo chuỗi dữ liệu
                        </Text>
                        <View style={{ width: '100%', height: 'auto', marginTop: 10, borderWidth: 1, padding: 10, flexWrap: 'wrap', flexDirection: 'row' }}>
                            {
                                data1?.map((item, index) => (
                                    <Text key={index} style={{ marginRight: 5 }}>
                                        [{item}],
                                    </Text>
                                ))
                            }
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>
                                Chuỗi mã hóa
                            </Text>
                        </View>
                        <View style={{ width: '100%', height: 'auto', marginTop: 10, borderWidth: 1, padding: 10 }}>
                            <Text>
                                200000000000000000001000000000111000000000000000000010101010101000
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>
                                chuỗi giải mã
                            </Text>
                        </View>
                        <View style={{ width: '100%', height: 'auto', marginTop: 10, borderWidth: 1, padding: 10 }}>
                            <Text>
                                Khánh Hòa
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, marginTop: 10 }}>
                        <View style={{ backgroundColor: "#4baef8", padding: 10, minWidth: 100, borderRadius: 5 }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>
                                Tiếp theo
                            </Text>
                        </View>
                        <View style={{ backgroundColor: "#4baef8", padding: 10, minWidth: 100, borderRadius: 5 }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>
                                Thoát
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Interface4Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
});