import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput} from "react-native";
import React from "react";
import styles from "../components/home/welcome.style";
import {Feather, Ionicons} from "@expo/vector-icons";
import {COLORS, SIZES} from "../constants";

const Search = () => {
    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather name="search" size={24} style={styles.searchIcon}/>
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value =''
                        onPressIn={()=>{navigation.navigate()}}
                        placeholder='Search...'
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite}/>
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
    )
}

export default Search