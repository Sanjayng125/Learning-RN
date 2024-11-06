import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {addToCart, removeFromCart} from '../../redux/slices/cartSlice';

export default function Products() {
  const dispatch = useDispatch<AppDispatch>();
  const cartProducts = useSelector((state: RootState) => state.cart.products);

  const products: ProductProps[] = [
    {
      id: 1,
      name: 'Samsung Z Fold 4',
      color: 'black',
      price: 260000,
      image:
        'https://5.imimg.com/data5/SELLER/Default/2023/6/319092481/CM/AO/EW/161368508/samsung-mobile-phones.jpg',
    },
    {
      id: 2,
      name: 'Apple',
      color: 'white',
      price: 130000,
      image:
        'https://5.imimg.com/data5/SELLER/Default/2023/6/312836839/UK/XE/SQ/4630526/apple-iphone-14-pro-128gb-gold-mobile-phone-500x500.jpg',
    },
    {
      id: 3,
      name: 'Nokia',
      color: 'black',
      price: 25000,
      image:
        'https://images-cdn.ubuy.co.in/63565747aefbdb18346b9c22-nokia-x30-5g-smartphone-6gb-ram-128gb.jpg',
    },
    {
      id: 4,
      name: 'Samsung S25 Ultra',
      color: 'white',
      price: 135000,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHQYwJ8dZhyBvqZ-xOJVS0cAIDu0HTdp81A&s',
    },
  ];

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item: ProductProps) => {
    dispatch(removeFromCart(item));
  };

  return (
    <View style={styles.main}>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.productMain}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.productInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.productInfo2}>
                <Text style={styles.price}>₹{item.price} /-</Text>
                <Text style={styles.color}>{item.color}</Text>
              </View>

              {cartProducts.some(product => item.id === product.id) ? (
                <TouchableOpacity
                  style={styles.removeFromCartBtn}
                  onPress={() => handleRemoveFromCart(item)}>
                  <Text style={styles.removeFromCartBtnText}>
                    Remove From Cart
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.addToCartBtn}
                  onPress={() => handleAddToCart(item)}>
                  <Text style={styles.addToCartBtnText}>Add to cart</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  productMain: {
    flex: 1,
    marginBottom: 20,
  },
  productInfo: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
  },
  productInfo2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 600,
    elevation: 20,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 6,
  },
  name: {
    fontSize: 24,
    fontWeight: 600,
    paddingHorizontal: 10,
  },
  color: {
    // flex: 1,
    fontSize: 18,
    fontWeight: 600,
    backgroundColor: 'white',
    elevation: 20,
    padding: 5,
    borderRadius: 6,
  },
  image: {
    width: '100%',
    height: 300,
    objectFit: 'contain',
  },
  addToCartBtn: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  addToCartBtnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
  },
  removeFromCartBtn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  removeFromCartBtnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
  },
});
