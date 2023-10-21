import React, {useState} from 'react'
import { useRoute } from '@react-navigation/native'
import {View, Text, Image, SafeAreaView, TouchableOpacity} from "react-native";
import {Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import styles from './productDetail.style'
import {COLORS} from "../constants";
const ProductDetail = ({navigation}) => {
    const [count, setCount] = useState(1)
    const route = useRoute();
    const {item} = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                    <Ionicons name='chevron-back-circle' size={30}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name='heart' size={30} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
            <Image
                source={{uri: item.imageUrl}}
                style={styles.image}
            />

            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                </View>

                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {[1,2,3,4,5].map((index) => (
                            <Ionicons
                                name='star'
                                key={index}
                                color='gold'
                                size={24}
                            />    //if you use { instead of ( it wont work. watch out for the syntax here
                        ))}

                        <Text style={styles.ratingText}>(4.9)</Text>
                    </View>

                    <View style={styles.rating}>
                        <TouchableOpacity onPress={() => {setCount(count + 1)}}>
                            <SimpleLineIcons
                                name='plus'
                                size={24}
                            />
                        </TouchableOpacity>

                        <Text style={styles.count}> {count}</Text>

                        <TouchableOpacity onPress={() => {
                            if(count>1){
                                setCount(count - 1)
                            }
                        }}>
                            <SimpleLineIcons
                                name='minus'
                                size={24}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>
                        Description
                    </Text>
                    <Text style={styles.descText}>
                        {item.description}
                    </Text>

                </View>
                <View style={styles.locationContainer}>
                    <View style={styles.location}>
                        <View style={styles.locationDetails}>
                            <Ionicons name='locate-outline' size={24} />
                            <Text>{item.product_location}</Text>
                        </View>
                        <View style={styles.locationDetails}>
                            <MaterialCommunityIcons name='truck-delivery-outline' size={24} />
                            <Text>   Free shipping   </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
                        <Text style={styles.cartTitle}>
                            BUY NOW
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={styles.addToCart}>
                        <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite}/>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default ProductDetail