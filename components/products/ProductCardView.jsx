import {Text, TouchableOpacity, View, Image} from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import {COLORS, SIZES} from "../../constants";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
const ProductCardView = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => {navigation.navigate('ProductDetails')}}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                    source={{uri: 'https://d326fntlu7tb1e.cloudfront.net/uploads/b1f6d96d-3297-4270-ba65-657dc2bc0236-fn2.jpg'}}
                    style={styles.image}
                    />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>
                        Product
                    </Text>
                    <Text style={styles.supplier} numberOfLines={1}>
                        Product
                    </Text>
                    <Text style={styles.price} numberOfLines={1}>
                        Product
                    </Text>
                </View>
                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name='add-circle' size={35} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
export default ProductCardView

