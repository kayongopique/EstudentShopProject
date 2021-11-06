import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';


import  Block from "../components/Block";
import Text  from "../components/Text";
import { theme } from '../constants';
import Button from './Button';


class WishlistItem extends React.Component {
    state = {  }

    render() { 
        const {product} = this.props;
        return ( 
            <Block row margin={[10,0]}>
            <Image source={product.image} 
            style={{width: 120, height: 120}}
            />
            <Block flex={false} padding={[0, 30]}>
                 <Text header>{product.name}</Text>
                 <Text header primary>${product.price} </Text>
                 <Block 
                 color={product.inStock? theme.colors.primary: '#FFB900'} 
                 flex={false} 
                 margin={[theme.sizes.base*2, 0]}
                 style={{
                  width: 95,
                  height: 30,
                  alignItems: 'center',
                  borderRadius: theme.sizes.btnRadius,
                  paddingVertical: theme.sizes.padding/5+3,
                 }}>
                 <Text caption white>{product.inStock? 'In Stock': 'Out of Stock'} </Text>
                </Block>
            </Block>
        </Block>
         );
    }
}

export default WishlistItem;
