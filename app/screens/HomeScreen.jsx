import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Avatar from '../util/Avatar';
import { useNavigation } from '@react-navigation/native';
export default function HomeScreen() {
    const [avatarData, setAvatarData] = useState();
    // const [selectedAvatar, setSelectedAvatar] = useState();
    const [selectedAvatar, setSelectedAvatar] = useState(Avatar[0]);
    useEffect(() => {
        setAvatarData(Avatar);
        setSelectedAvatar(Avatar[0]);
    }, [])

    const changeAvatar = (item) => {
        setSelectedAvatar(item);
    };

    const nav = useNavigation();

    return (
        <View style={{ alignItems: "center", paddingTop: 40, marginTop: 80 }}>
            {/* <View>
                {selectedAvatar && (
                    <Text style={{ color: selectedAvatar.primary }}>Howdy,</Text>
                )}
                <Text>I am {selectedAvatar && selectedAvatar.name}</Text>
            </View> 
            
            The error  error "cannot read property 'primary' of undefined" occurs because you're trying to access the primary property of selectedAvatar before it has been set. During the initial rendering, selectedAvatar is still undefined. To handle this, you can provide a default value for selectedAvatar or use optional chaining and nullish coalescing operators in your JSX.
            */}


            <Text style={{ color: selectedAvatar.primary, fontSize: 30, fontWeight: "bold" }}>Howdy,</Text>
            <Text style={{ color: selectedAvatar.primary, fontSize: 30 }}>I am {selectedAvatar.name}</Text>
            <Image source={{ uri: selectedAvatar.image }} style={{ width: 150, height: 150, marginTop: 30 }} />
            <Text style={{ fontSize: 25, fontWeight: "500", marginTop: 30 }}>How can I assist you?</Text>
            <View style={{ marginTop: 20, marginBottom: 20, backgroundColor: "#edebeb", alignItems: "center", height: 120, padding: 10, borderRadius: 10 }}>
                <FlatList data={avatarData} horizontal renderItem={({ item }) => selectedAvatar.id != item.id && (
                    <TouchableOpacity style={{ margin: 15 }} onPress={() => changeAvatar(item)}>
                        <Image source={{ uri: item.image }} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                )} />
                <Text style={{ fontSize: 17, color: "#B0B0B0" }}>Choose your Fav Chattie</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor:selectedAvatar.primary,padding:17,width:Dimensions.get('screen').width*0.4,borderRadius:100,alignItems:"center"}} onPress={()=>nav.navigate("chat",{selectedAvatar:selectedAvatar})}>
                <Text style={{ fontSize: 16, color: "#fff" }}>Let's chat!</Text>
            </TouchableOpacity>
        </View>
    )
}

