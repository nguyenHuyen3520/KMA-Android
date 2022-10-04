import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather, FontAwesome, FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'

const bai2 = () => {

    const [selected, setSelected] = useState('tabbar1');
    const tabBar = [
        {
            name: 'tabbar1',
            icon: <MaterialCommunityIcons name="table" size={24} color={selected === 'tabbar1' ? '#2870ff' : 'black'} />
        },
        {
            name: 'tabbar2',
            icon: <FontAwesome5 name="user-friends" size={24} olor={selected === 'tabbar2' ? '#2870ff' : 'black'} />
        },
        {
            name: 'tabbar3',
            icon: <Feather name="message-square" size={24} color={selected === 'tabbar3' ? '#2870ff' : 'black'} />
        },
        {
            name: 'tabbar4',
            icon: <Fontisto name="world" size={24} color={selected === 'tabbar4' ? '#2870ff' : 'black'} />
        },
        {
            name: 'tabbar5',
            icon: <Feather name="search" size={24} color={selected === 'tabbar5' ? '#2870ff' : 'black'} />
        },
    ]
    const tabBar2 = [
        {
            name: 'Like',
            icon: <AntDesign name="like2" size={18} color="black" />
        },
        {
            name: 'Comment',
            icon: <FontAwesome5 name="comment-alt" size={18} color="black" />
        },
        {
            name: 'Share',
            icon: <FontAwesome name="share" size={18} color="black" />
        },
    ]
    return (
        <View>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', height: 50, flexDirection: 'row', paddingHorizontal: 10, backgroundColor: '#2870ff' }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>
                        New Feed
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 20 }}>
                        <Feather name="search" size={24} color="white" />
                    </View>
                    <View>
                        <Feather name="menu" size={24} color="white" />
                    </View>
                </View>
            </View>
            <View style={{ height: 50, backgroundColor: 'white', flexDirection: 'row' }}>
                {
                    tabBar?.map((item, index) => (
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 5, borderBottomColor: selected === item.name ? '#2870ff' : 'white' }}>
                            {item?.icon}
                        </View>
                    ))
                }
            </View>
            <View style={{ marginTop: 10, backgroundColor: 'white', height: 400 }}>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#e0e0e0' }}>


                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ height: 50, flexDirection: 'row' }}>
                            <Image
                                style={{ height: 50, width: 50, borderRadius: 99 }}
                                source={{ uri: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg' }}
                            />
                            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                                <Text>
                                    Nguyen Van Huyen
                                </Text>
                                <Text>
                                    3 hours ago
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text>
                            Bai tap 2
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={{ height: 240, width: '100%' }}
                            source={{ uri: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg' }}
                        />
                    </View>
                </View>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', height: 50 }}>
                    {
                        tabBar2?.map((item, index) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '33%' }}>
                                <View style={{ marginRight: 5 }}>
                                    {item?.icon}
                                </View>
                                <Text>
                                    {item?.name}
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </View>
            <View style={{ marginTop: 10, backgroundColor: 'white', height: 400 }}>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#e0e0e0' }}>


                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ height: 50, flexDirection: 'row' }}>
                            <Image
                                style={{ height: 50, width: 50, borderRadius: 99 }}
                                source={{ uri: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg' }}
                            />
                            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                                <Text>
                                    Nguyen Van Huyen
                                </Text>
                                <Text>
                                    3 hours ago
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text>
                            Bai tap 2
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={{ height: 240, width: '100%' }}
                            source={{ uri: 'https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg' }}
                        />
                    </View>
                </View>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', height: 50 }}>
                    {
                        tabBar2?.map((item, index) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '33%' }}>
                                <View style={{ marginRight: 5 }}>
                                    {item?.icon}
                                </View>
                                <Text>
                                    {item?.name}
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

export default bai2