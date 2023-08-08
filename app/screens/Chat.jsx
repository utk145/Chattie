import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { GiftedChat } from "react-native-gifted-chat";
import api from '../util/api';
export default function Chat() {
    // const paramValue = useRoute().params; // We use this to accept the value/parameters passed to this screen

    // This useEffect was just to check if avatar is being passed correctly   
    // useEffect(() => {
    //     console.log(paramValue.selectedAvatar);
    // }, []);



    // https://github.com/FaridSafi/react-native-gifted-chat

    const paramValue = useRoute().params;
    const [selectedAvatar, setSelectedAvatar] = useState();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setSelectedAvatar(paramValue.selectedAvatar);
        setMessages([
            {
                _id: 1,
                text: 'Heyya bud, I am ' + paramValue.selectedAvatar?.name,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: paramValue.selectedAvatar?.image,
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        setLoading(true);
        if (messages[0].text) {
            apiResponse(messages[0].text)
        }
    }, []);


    const apiResponse = (msg) => {
        api.getApiEndpoint(msg)
            .then(resp => {
                // console.log(resp);
                if (resp.data.resp[1].content) {
                    const chatAIResp = {
                        _id: Math.random() * (9999999 - 1),
                        text: resp.data.resp[1].content,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'React Native',
                            avatar: paramValue.selectedAvatar?.image,

                        }
                    }
                    setMessages(previousMessages => GiftedChat.append(previousMessages, chatAIResp))
                    setLoading(false);
                } else {
                    setLoading(false);
                    const chatAIResp = {
                        _id: Math.random() * (9999999 - 1),
                        text: "Sorry, I can't help you with that. :)",
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'React Native',
                            avatar: paramValue.selectedAvatar?.image,
                            
                        }
                    }
                    setMessages(previousMessages => GiftedChat.append(previousMessages, chatAIResp))
                }
            })

    }

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <GiftedChat
                messages={messages}
                isTyping={loading}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
    )
}

