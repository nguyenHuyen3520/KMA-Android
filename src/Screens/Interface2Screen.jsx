import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Interface2Screen = ({ navigation }) => {
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
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Nhập tham số đường cong
                        </Text>
                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text>
                                    a
                                </Text>
                            </View>
                            <View style={{ width: '70%' }}>
                                <TextInput
                                    placeholder={"Enter Number"}
                                    value={"-2"}
                                    style={{ borderWidth: 1, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 8, borderColor: "#3881f7" }}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text>
                                    b
                                </Text>
                            </View>
                            <View style={{ width: '70%' }}>
                                <TextInput
                                    placeholder={"Enter Number"}
                                    value={"3"}
                                    style={{ borderWidth: 1, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 8, borderColor: "#3881f7" }}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text>
                                    n
                                </Text>
                            </View>
                            <View style={{ width: '70%' }}>
                                <TextInput
                                    placeholder={"Enter Number"}
                                    value={"137"}
                                    style={{ borderWidth: 1, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 8, borderColor: "#3881f7" }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 50 }}>
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

export default Interface2Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
});