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
import { agentsService } from '../../services/agentsService';
const { width: screenWidth } = Dimensions.get('window');

const AgentsCarousel = (props) => {
    const [agentsList, setAgentsList] = useState([]);
    const carouselRef = useRef(null);

    const goForward = () => {
        carouselRef.current.snapToNext();
    };
    const getAllAgents = async () => {
        try {
            const resp = await agentsService.getAllAgents();
            setAgentsList(resp.data.data)
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getAllAgents()
        // const reloadPage = navigation.addListener("focus", () => {
        //     return () => {
        //         reloadPage
        //     }
        // });
    }, [])

    const renderItem = ({ item, index }, parallaxProps) => {
        const backgroundGradientColors = item.backgroundGradientColors.map(color => { return "#" + color })
        return (
            <View style={styles.item}>
                <LinearGradient className="p-4 h-full relative rounded-xl" colors={backgroundGradientColors} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                    <ParallaxImage
                        source={{ uri: item.background }}
                        containerStyle={styles.imageContainerBackground}
                        style={styles.imageBackground}
                        parallaxFactor={0.4}
                        {...parallaxProps}
                    />
                    <ParallaxImage
                        source={{ uri: item.fullPortraitV2 }}
                        containerStyle={styles.imageContainer}
                        style={styles.image}
                        parallaxFactor={0.4}
                        {...parallaxProps}
                    />
                </LinearGradient>
                        <Text className="absolute text-white top-[36.5%] left-[25%] w-[190%] text-6xl font-extrabold rotate-90 uppercase" numberOfLines={2}>
                            {item.displayName}
                        </Text>
                <Text className="absolute top-[33.4%] left-[70%] w-[160%] text-xl rotate-90 font-semibold text-[#ff4655]" numberOfLines={2}>
                    {item.role.displayName}
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
                itemWidth={screenWidth - 60}
                data={agentsList}
                renderItem={renderItem}
                hasParallaxImages={true}
            />
        </View>
    );
};

export default AgentsCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 10
    },
    item: {
        width: screenWidth - 210,
        height: screenWidth,
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
        height: '100%',
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