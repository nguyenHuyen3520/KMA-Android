import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const data1 = [
    "00000", "10000", "20000", "00001", "10001", "200001", "00002", "10002", "20002", "00001", "10010", "20010", "20010", "00011", "10011", "20011",
]

export default function Interface1Screen({ navigation }) {

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            {/* <View style={{ marginBottom: 10 }}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View> */}
            <View style={{ borderWidth: 1, padding: 10 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    HỆ MẬT MÃ ĐƯỜNG CONG ELLIPIC - AECC
                </Text>
            </View>
            <View>
                <View style={{ padding: 10 }}>
                    <View>
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
                            <View style={{ width: '80%' }}>
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
                            <View style={{ width: '80%' }}>
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
                            <View style={{ width: '80%' }}>
                                <TextInput
                                    placeholder={"Enter Number"}
                                    value={"137"}
                                    style={{ borderWidth: 1, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 8, borderColor: "#3881f7" }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, marginBottom: 10 }}>
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
                <View style={{ paddingHorizontal: 10 }}>
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ backgroundColor: "#4baef8", padding: 10, minWidth: 100, borderRadius: 5 }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>
                                Tạo chuỗi
                            </Text>
                        </View>
                        <View style={{ backgroundColor: "#4baef8", padding: 10, minWidth: 100, borderRadius: 5 }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>
                                Mã hóa
                            </Text>
                        </View>
                        <View style={{ backgroundColor: "#4baef8", padding: 10, minWidth: 100, borderRadius: 5 }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>
                                Giải mã
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
});
