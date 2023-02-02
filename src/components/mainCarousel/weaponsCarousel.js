import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform,
    ImageBackground,
} from 'react-native';
import {
  Entypo,
  FontAwesome,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { weaponsService } from '../../services/weaponsService';
import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
const { width: screenWidth } = Dimensions.get('window');

const WeaponsCarousel = (props) => {
    const [mapsList, setMapsList] = useState([]);
    const carouselRef = useRef(null);

    const goForward = () => {
        carouselRef.current.snapToNext();
    };
    const getAllWeapons = async () => {
        try {
            const resp = await weaponsService.getAllWeapons();
            setMapsList(resp.data.data)
            // console.log(
            //     "resp",
            //     resp.data
            // );
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getAllWeapons()
        // const reloadPage = navigation.addListener("focus", () => {
        //     return () => {
        //         reloadPage
        //     }
        // });
    }, [])

    const renderItem = ({ item, index }, parallaxProps) => {
        const category = item.category.substr(item.category.lastIndexOf(":")+1)
        return (
            <View style={styles.item}>
                    <ParallaxImage
                        source={{ uri: item.displayIcon }}
                        containerStyle={styles.imageContainerBackground}
                        style={styles.imageBackground}
                        parallaxFactor={0.4}
                        {...parallaxProps}
                    />
                    
                    <ParallaxImage
                        source={{ uri: item.killStreamIcon }}
                        containerStyle={styles.imageContainer}
                        style={styles.image}
                        parallaxFactor={0.4}
                        {...parallaxProps}
                    />
                        <Text className="absolute z-10 text-white top-[35%] left-2 w-[190%] text-6xl font-extrabold uppercase" numberOfLines={2}>
                            {item.displayName} <FontAwesome name="square" size={14} color="white" />
                        </Text>
                <Text className="absolute uppercase font-normal top-[47%] left-3 w-[160%] text-lg z-10 text-white" numberOfLines={2}>
                    <Text className="font-extrabold">Types // </Text>
                    {category}
                </Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth}
                data={mapsList}
                renderItem={renderItem}
                hasParallaxImages={true}
            />
        </View>
    );
};

export default WeaponsCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 10,
    },
    item: {
        width: screenWidth - 210,
        height: screenWidth,
    },
    imageContainer: {
        position: 'absolute',
        height: '50%',
        width: '189%',
        top: 15,
        left: 0,
        right: 0,
        zIndex: 1,
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        borderRadius: 8,
        opacity: 0.5,
        backgroundColor:'#ff4655'
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'repeat',
        margin: 10
    },
    imageContainerBackground: {
        position: 'absolute',
        height: '50%',
        width: '189%',
        top: 15,
        left: 0,
        right: 0,
        zIndex: 10,
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        borderRadius: 8,
    },
    imageBackground: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'repeat',
        marginRight: 100,
    },
    textStyle: {
        position: 'absolute',
        top: 0,
    }
});