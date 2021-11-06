import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';


import  Block, { styles }  from "../components/Block";
import Text  from "../components/Text";
import { theme } from '../constants';
import Button from './Button';


class CartItem extends React.Component {
    state = {  }

    _calculateTotalProductCost = (product) => {
        return product.price * (product.amount);
      };

    
  _onRemoveProduct = () => {
    this.props.onRemoveProduct(this.props.index);
  };

  _onAddCopy = () => {
    this.props.onAddCopy(this.props.index);
  };

  _onRemoveCopy = () => {
    this.props.onRemoveCopy(this.props.index);
  };

  // _renderCloseIcon = () => {
  //   return <Image source={require('../assets/images/')} />;
  // };

  _renderMinusIcon = () => {
    return ( 
      <Button 
      color={theme.colors.gray3} 
      style={{
        width: 30,
        height: 30,
        borderRadius: 20,
        alignItems: 'center'
      
      }}
      onPress={()=>{}}
      >
        <Image source={require('../assets/images/minus.png')} />
      </Button>
    );
  };

  _renderPlusIcon = () => {
    return (
      <Button 
      color={theme.colors.gray3} 
      style={{
        width: 30,
        height: 30,
        borderRadius: 20,
        alignItems: 'center'
      }}
      onPress={()=>{}}
      >
        <Image source={require('../assets/images/plus.png')} />
      </Button>
    );
  };
    render() { 
        const {product} = this.props;
        return ( 
            <Block row margin={[10,0]}>
            <Image source={product.image} 
            style={{width: 120, height: 120}}
            />
            <Block flex={false} padding={[0, 30]}>
                 <Text header>{product.name}</Text>
                 <Text header primary>${this._calculateTotalProductCost(product)}</Text>
                 <Block 
                 color={theme.colors.gray3} 
                 flex={false} 
                 row 
                 space={'between'}
                 margin={[theme.sizes.base, 0]}
                 style={{
                  width: 95,
                  height: 30,
                  alignItems: 'center',
                  borderRadius: theme.sizes.btnRadius,
                  paddingVertical: theme.sizes.padding/5+3,
                 }}>
                  {this._renderPlusIcon()}
                  <Text>{product.amount}</Text>
                  {this._renderMinusIcon()}
                </Block>
            </Block>
        </Block>
         );
    }
}
// const styles= StyleSheet.create({
//   count: {
//     width: 95,
//     height: 30,
//   }
// });
export default CartItem;
