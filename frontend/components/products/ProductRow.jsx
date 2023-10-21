import {ActivityIndicator, FlatList, Text, View} from 'react-native'
import React from 'react'
import {COLORS, SIZES} from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from "./productRow.style";
import useFetch from "../../hook/useFetch";
const ProductRow = () => {
    const { data, isLoading, error, refetch } = useFetch()
    console.log(data)
    return (
        <View style={styles.container}>
            {isLoading ? <><ActivityIndicator size={SIZES.large} color={COLORS.primary} /></>
                : error ? <Text>Something went wrong.</Text>:
                    <FlatList //render array of data from backend
                data={data}
                key={(item) => {item._id}}
                renderItem={({item}) => (<ProductCardView item={item}/>)}
                horizontal
                contentContainerStyle={{columnGap:SIZES.medium}}
            />}
        </View>
    )
}
export default ProductRow

