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
import { LinearGradient } from 'expo-linear-gradient';
import { mapsService } from '../../services/mapsService';
const { width: screenWidth } = Dimensions.get('window');

const MapsCarousel = (props) => {
    const [mapsList, setMapsList] = useState([]);
    const carouselRef = useRef(null);

    const goForward = () => {
        carouselRef.current.snapToNext();
    };
    const getAllMap = async () => {
        try {
            const resp = await mapsService.getAllMap();
            setMapsList(resp.data.data)
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getAllMap()
        // const reloadPage = navigation.addListener("focus", () => {
        //     return () => {
        //         reloadPage
        //     }
        // });
    }, [])

    const renderItem = ({ item, index }, parallaxProps) => {
        // const backgroundGradientColors = item.backgroundGradientColors.map(color => { return "#" + color })
        return (
            <View style={styles.item}>
                {/* <LinearGradient className="p-4 h-full relative rounded-xl" colors={backgroundGradientColors} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}> */}
                <ParallaxImage
                    source={{ uri: item.splash }}
                    containerStyle={styles.imageContainerBackground}
                    style={styles.imageBackground}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                {/* <ParallaxImage
                        source={{ uri: item.fullPortraitV2 }}
                        containerStyle={styles.imageContainer}
                        style={styles.image}
                        parallaxFactor={0.4}
                        {...parallaxProps}
                    /> */}
                {/* </LinearGradient> */}
                <Text className="absolute z-10 text-white top-[40%] left-2 w-[190%] text-6xl font-extrabold uppercase" numberOfLines={2}>
                    {item.displayName}
                </Text>
                <Text className="absolute top-[65%] left-3 w-[160%] text-md z-10 font-semibold text-[#ff4655]" numberOfLines={2}>
                    {item.coordinates}
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

export default MapsCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 10,
    },
    item: {
        width: screenWidth - 40,
        height: screenWidth - 130,
    },
    imageContainer: {
        zIndex: 50,
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    imageContainerBackground: {
        position: 'absolute',
        height: '70%',
        width: '100%',
        top: 15,
        left: 0,
        right: 0,
        zIndex: 1,
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        borderRadius: 8,
    },
    imageBackground: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    textStyle: {
        position: 'absolute',
        top: 0,
    }
});