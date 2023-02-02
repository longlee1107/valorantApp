import React, { useEffect, useRef, useState } from "react";
import { View, Image, Text, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { FlatGrid } from "react-native-super-grid";
import { LinearGradient } from 'expo-linear-gradient';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  Entypo,
  FontAwesome,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import { seasonsService } from "../../../services/seasonsService";
import AgentsCarousel from "../../../components/mainCarousel/Carousel";
import MapsCarousel from "../../../components/mainCarousel/mapsCarousel";
import WeaponsCarousel from "../../../components/mainCarousel/weaponsCarousel";

export default function HomeScreen({ navigation }, { item, index }, parallaxProps) {
  const [seasons, setSeasons] = useState([]);
  const carouselRef = useRef(null);
  const getAllSeasonsRequest = async () => {
    try {
      const resp = await seasonsService.getAllSeasonsRequest();
      setSeasons(resp.data)
      console.log(
        "resp",
        resp.data
      );
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    getAllSeasonsRequest()
    const reloadPage = navigation.addListener("focus", () => {
      return () => {
        reloadPage
      }
    });
  }, [navigation])
  return (
    <SafeAreaView className="bg-[#1d262f] h-screen">
      {/* <HeaderHome navigation={navigation} /> */}
      <View className="h-full">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          style={{
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <View
            className="bg-transparent h-[231px] w-full mx-auto mb-6"
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              className="w-full h-full mx-auto object-cover"
              source={require('../../../assets/valorantBackground.jpg')}
            />
            <Image
              className="w-full absolute z-1 h-full object-cover"
              source={require('../../../assets/Full_Color/Logotype&Mark/V_Logomark_Red.png')}
            />
            <Image
              className=" absolute top-[40%] left-3 w-full h-full z-1 object-cover"
              source={require('../../../assets/valorantBackground_removebg.png')}
            />
          </View>
          <View className="w-full items-center mt-[25%]">
            <Text className="text-center text-white w-2/3 text-xl">A 5v5 character-based tactical shooter</Text>
            <TouchableOpacity className="w-full my-4">
              <LinearGradient className="p-4 " colors={['#ff4655', '#bd343f', '#aa2b35']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <Text className="uppercase text-center text-white font-extrabold text-lg">
                  Learn the game
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View className="border-t border-gray-200 my-8">
            <View className=" bg-[#1d262f] w-1/3 translate-x-2 px-3 -translate-y-5">
              <Text className="text-[#ff4655] font-extrabold text-xl uppercase">
                Agents
              </Text>
            </View>
            <AgentsCarousel />
          </View>
          <View className="border-t border-gray-200 mt-8">
            <View className=" bg-[#1d262f] w-1/4 translate-x-2 px-3 -translate-y-5">
              <Text className="text-[#ff4655] font-extrabold text-xl uppercase">
                Maps
              </Text>
            </View>
            <MapsCarousel/>
          </View>
          <View className="border-t border-gray-200">
            <View className=" bg-[#1d262f] w-[40%] translate-x-2 px-3 -translate-y-5">
              <Text className="text-[#ff4655] font-extrabold text-xl uppercase">
                Weapons
              </Text>
            </View>
            <WeaponsCarousel/>
          </View>
        </ScrollView>
      </View >
    </SafeAreaView >
  );
}
