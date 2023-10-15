import React, {useState} from 'react'
import {View, Text, Image, SafeAreaView, TouchableOpacity} from "react-native";
import {Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import styles from './productDetail.style'
import {COLORS} from "../constants";
const ProductDetail = ({navigation}) => {
    const [count, setCount] = useState(1)
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
                source={{uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/b1f6d96d-3297-4270-ba65-657dc2bc0236-fn2.jpg"}}
                style={styles.image}
            />

            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Couch</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>$333.33</Text>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>

                </View>
                <View style={styles.locationContainer}>
                    <View style={styles.location}>
                        <View style={styles.locationDetails}>
                            <Ionicons name='locate-outline' size={24} />
                            <Text>    YOZGAT    </Text>
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