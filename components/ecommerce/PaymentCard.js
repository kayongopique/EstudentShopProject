import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { textStyle } from '../TextStyle';
import Icon from 'react-native-vector-icons/AntDesign'


export const MoreVerticalIconFill = (style) => {
    return (
      <Icon {...style} name='more-vertical'/>
    );
  };

class PaymentCardComponent extends React.Component {

  onDetails = () => {
    this.props.onDetails(this.props.index);
  };

  renderDetailsIcon = () => {
    return MoreVerticalIconFill(styles.moreIcon);
  };

  render() {
    const { style, paymentCard } = this.props;
    const detailsHitSlop = {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
    };

    return (
      <View style={[styles.container, style]}>
        <View style={[styles.topBottomContainer, styles.topContainer]}>
          <Text
            style={stles.typeLabel}>
            {paymentCard.type}
          </Text>
          <TouchableOpacity
            hitSlop={detailsHitSlop}
            activeOpacity={0.95}
            onPress={this.onDetails}>
            {this.renderDetailsIcon()}
          </TouchableOpacity>
        </View>
        <Text
          style={styles.numberLabel}
          category='s1'>
          {paymentCard.number}
        </Text>
        <View style={styles.topBottomContainer}>
          <View style={styles.bottomLeftContainer}>
            <Text
              style={styles.bottomLabel}
              category='c1'>
              Cardholder Name
            </Text>
            <Text
              style={styles.bottomLabelMain}
              category='s1'>
              {paymentCard.cardHolder}
            </Text>
          </View>
          <View style={styles.bottomRightContainer}>
            <Text
              style={[styles.bottomLabel, styles.rightLabel]}
              category='c1'>
              Expire Date
            </Text>
            <Text
              style={[styles.bottomLabelMain, styles.rightLabel]}>
              {paymentCard.expireDate}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        padding: 24,
        backgroundColor: theme['color-primary-default'],
      },
      topContainer: {
        marginBottom: 32,
      },
      topBottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      typeLabel: {
        color: 'white',
        ...textStyle.headline,
      },
      numberLabel: {
        color: 'white',
        marginBottom: 26,
        fontSize: 18,
        ...textStyle.headline,
      },
      bottomLabel: {
        color: 'white',
        ...textStyle.caption1,
      },
      bottomLabelMain: {
        color: 'white',
        ...textStyle.subtitle,
      },
      bottomLeftContainer: {
        justifyContent: 'flex-start',
      },
      bottomRightContainer: {
        justifyContent: 'flex-end',
      },
      moreIcon: {
        width: 4,
        height: 18,
        tintColor: 'white',
      },
      rightLabel: {
        textAlign: 'right',
      },
});

export default PaymentCardComponent;
