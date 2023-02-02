import React, { useState, useEffect, useRef } from 'react';
import { View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { components } from '../constants/components';
import {useRoute} from '@react-navigation/native';

const ShowLogo = ({ navigation }) => {
    const route = useRoute();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 4000);
    },[])
    const handlerTest = () => {
        navigation.navigate('Home')
    }
    return (
        <SafeAreaView  className="flex-1 flex items-center justify-center bg-[#1d1e22]">
            {/* <TouchableOpacity className="w-full flex items-center justify-center h-full" onPress={handlerTest}> */}
                <components.FadeInView  style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <View >
                        <View className="w-[300px] h-[200px] mx-auto mb-[60px] overflow-hidden m-auto">
                            <Image
                                className="w-full h-full object-cover"
                                source={require('../assets/Full_Color/Type_Lockup/V_Lockup_Vertical_Red.png')}
                            />
                        </View>
                    </View>
                </components.FadeInView>
            {/* </TouchableOpacity> */}
        </SafeAreaView>
    )
}

export default ShowLogo;