import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Interface3Screen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            {/* <View style={{ marginBottom: 10, justifyContent: 'center' }}>
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
                        <View>
                            <View style={{ paddingLeft: 10, paddingBottom: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    Nhập bản rõ
                                </Text>
                            </View>
                            <TextInput
                                placeholder={"Enter Value"}
                                value={"Khánh Hòa"}
                                style={{ borderWidth: 1, paddingVertical: 5, paddingHorizontal: 10 }}
                            />
                        </View>
                    </View>
                    <View stye={{ paddingVertical: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Thông tin khóa
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text>
                                Khóa n=
                            </Text>
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <TextInput
                                style={{ padding: 2, paddingHorizontal: 10, width: 70, borderWidth: 1 }}
                                placeholder={"Enter N"}
                                value={"7"}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                            <Text>
                                y
                            </Text>
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <TextInput
                                style={{ padding: 2, paddingHorizontal: 10, width: 70, borderWidth: 1 }}
                                placeholder={"Enter N"}
                                value={"23"}
                            />
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

export default Interface3Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
});