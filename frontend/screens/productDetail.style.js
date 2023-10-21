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
        paddingHorizontal: 5
    },
    descriptionWrapper: {
        marginTop: SIZES.large +2,
        marginHorizontal: SIZES.large
    },
    description: {
        fontFamily: "medium",
        fontSize: SIZES.large -2
    },
    descText: {
        fontFamily: "regular",
        textAlign: "justify",
        fontSize: SIZES.small +1 ,
        marginBottom: SIZES.small
    },
    locationContainer: {
        marginBottom: SIZES.small
    },
    location: {
        marginHorizontal: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        padding: 5,
        borderRadius: SIZES.large
    },
    count:{
       color: COLORS.gray,
       fontFamily: 'medium',
       paddingHorizontal: SIZES.xSmall,
    },
    locationDetails:{
       flexDirection: 'row'
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    price: {
        paddingHorizontal: 10,
        fontFamily: "semiBold",
        fontSize: SIZES.large
    },
    cartRow: {
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: SIZES.width - 10,
    },
    cartBtn:{
        width: SIZES.width*0.5,
        backgroundColor: COLORS.black,
        padding: SIZES.small/2,
        borderRadius: SIZES.large,
        marginLeft: 12,
        alignItems: 'center',
    },
    cartTitle: {
        fontFamily: "bold",
        fontSize: SIZES.medium,
        color: COLORS.lightWhite,

    },
    addToCart: {
        width: 37,
        height: 37,
        borderRadius: 50,
        margin: SIZES.small,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles