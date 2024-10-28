import React, { useCallback, useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View,
    Image,
    Text,
    Alert,
} from 'react-native';
import CustomButton from '../Component/customButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const places = [
    {
        id: 1,
        img: 'https://arabgt.com/wp-content/uploads/2020/05/%D8%A8%D9%8A-%D8%A7%D9%85-%D8%AF%D8%A8%D9%84%D9%8A%D9%88-%D8%A7%D9%84%D9%81%D8%A6%D8%A9-%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3%D8%A9-2021-1.jpg',
        name: 'BMW M5, 2021',
        dates: 'Apr 23 - May 5',
        price: 200,
        rating: 4.45,
        reviews: 124,
    },
    {
        id: 2,
        img: 'https://www.sayarat.org/wp-content/uploads/2023/08/porche-taycan-Turbo.webp',
        name: 'Porche, ',
        dates: 'Apr 25 - May 5',
        price: 320,
        rating: 4.81,
        reviews: 409,
    },
    {
        id: 3,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Blue_silver_Scaglietti.jpg/1200px-Blue_silver_Scaglietti.jpg',
        name: 'Ferrari 612, ',
        dates: 'Apr 22 - May 4',
        price: 695,
        rating: 4.3,
        reviews: 72,
    },
];

export default function Sportcard() {

    const order = () => {

        Alert.alert('The request has been received.', 'We will contact you soon', [

            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    }

    const [saved, setSaved] = useState([]);

    const handleSave = useCallback(
        id => {
            if (saved.includes(id)) {
                // remove listing id from the `saved` array
                setSaved(saved.filter(val => val !== id));
            } else {
                // add listing id to the `saved` array
                setSaved([...saved, id]);
            }
        },
        [saved],
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={styles.headerAction} />

                    <View style={styles.headerAction}>
                        <TouchableOpacity
                            onPress={() => {
                                // handle onPress
                            }}>

                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.headerTitle}>SPORT CARS</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {places.map(
                    ({ id, img, name, dates, price, rating, reviews }, index) => {
                        const isSaved = saved.includes(id);

                        return (
                            <TouchableOpacity
                                key={id}
                                onPress={() => {
                                    // handle onPress
                                }}>
                                <View style={styles.card}>
                                    <View style={styles.cardLikeWrapper}>
                                        <TouchableOpacity onPress={() => handleSave(id)}>
                                            <View style={styles.cardLike}>
                                                <FontAwesome
                                                    color={isSaved ? '#ea266d' : '#222'}
                                                    name="heart"
                                                    solid={isSaved}
                                                    size={20} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.cardTop}>
                                        <Image
                                            alt=""
                                            resizeMode="cover"
                                            style={styles.cardImg}
                                            source={{ uri: img }} />
                                    </View>

                                    <View style={styles.cardBody}>
                                        <View style={styles.cardHeader}>
                                            <Text style={styles.cardTitle}>{name}</Text>

                                            <FontAwesome
                                                color="#5C3E91"
                                                name="star"
                                                solid={true}
                                                size={12}
                                                style={{ marginBottom: 2 }} />

                                            <Text style={styles.cardStars}>{rating}</Text>

                                            <Text style={{ color: '#595a63' }}>
                                                ({reviews} reviews)
                                            </Text>

                                        </View>
                                        <View style={styles.cardHeader}>

                                            <Text style={styles.cardDates}>{dates}</Text>

                                            <Text style={styles.cardPrice}>
                                                <Text style={{ fontWeight: '600' }}>${price} </Text>/
                                                Day
                                            </Text>
                                            <CustomButton text="request" type='Request' onPress={order} />

                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    },
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 8,
        paddingHorizontal: 16,
    },
    /** Header */
    header: {
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    headerTop: {
        marginHorizontal: -6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerAction: {
        width: 40,
        height: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
    },
    /** Card */
    card: {
        position: 'relative',
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cardLikeWrapper: {
        position: 'absolute',
        zIndex: 1,
        top: 12,
        right: 12,
    },
    cardLike: {
        width: 40,
        height: 40,
        borderRadius: 9999,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTop: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardImg: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardBody: {
        padding: 12,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#232425',
        marginRight: 'auto',
    },
    cardStars: {
        marginLeft: 2,
        marginRight: 4,
        fontSize: 15,
        fontWeight: '500',
        color: '#232425',
    },
    cardDates: {
        marginTop: 4,
        fontSize: 16,
        color: '#595a63',
    },
    cardPrice: {
        marginTop: 6,
        fontSize: 16,
        color: '#232425',
    },
});