import React, {useState} from 'react'
import {View, Text, Image, SafeAreaView, TouchableOpacity} from "react-native";
import {Ionicons, SimpleLineIcons} from "@expo/vector-icons";
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
                <View >

                </View>
            </View>
        </View>
    )
}

export default ProductDetail