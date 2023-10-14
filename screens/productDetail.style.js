import {StyleSheet} from "react-native";
import {COLORS, SIZES, SHADOWS} from "../constants/index";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: SIZES.xxLarge,
        zIndex: 999,
        width: SIZES.width - 44
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    details: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    titleRow: {
        marginHorizontal:  20,
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: SIZES.width - 44,
        top: 20
    },
    ratingRow: {
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: SIZES.width - 10,
        top: 5
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.large
    },
    rating: {
        top: SIZES.large,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: SIZES.large,
    },
    ratingText:{
       color: COLORS.gray,
       fontFamily: 'medium',
    },
    count:{
       color: COLORS.gray,
       fontFamily: 'medium',
        marginHorizontal:5
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    price: {
        paddingHorizontal: 10,
        fontFamily: "semiBold",
        fontSize: SIZES.large
    }
})

export default styles