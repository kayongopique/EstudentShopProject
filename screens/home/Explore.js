// import React from 'react';
// import { 
//   Dimensions, 
//   StyleSheet, 
//   Image, 
//   Animated, 
//   FlatList, 
//   ScrollView} from "react-native";

// import  Block  from "../../components/Block";
// import Text  from "../../components/Text";
// import { theme, mocks } from '../../constants';
// import Card from "../../components/Card";
// import SearchInput from "../../components/SearchInput";
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const {width, height} = Dimensions.get('window');

// class Explore extends React.Component {
   
//     state = {
//         searchString: '',
//       };
//     scrollX = new Animated.Value(0);
//     renderBestSellers = () => {
//       const {BestSellers} = this.props;
//       return (
//         BestSellers.bestSelling.products.map(item => {
//           return (
//             <Block key={item.id} flex={false}>
//             <Block flex={false}>
//               <Image source={item.image}

//               style={{width: 135, height: 210}}
//               />
//             </Block>
//             <Block flex={false} margin={[5,0]}>
//               <Text header>{item.name}</Text>
//               <Text caption gray>{item.description}</Text>
//               <Text header primary>${item.price}</Text>
//             </Block>
//           </Block>
//           )
//         })
//   );
//     }
//     renderCategories = () =>{
//         const {Categories, navigation} = this.props;
//         return (
//             <FlatList
//             horizontal
//             // pagingEnabled
//             scrollEnabled
//             showsHorizontalScrollIndicator={false}
//             scrollEventThrottle={16}
//             snapToAlignment="center"
//             data={Categories}
//             extraDate={this.state}
//             keyExtractor={(item, index) => `${item.id}`}
//             renderItem={({ item }) => (
//               <Block center>
//                 <TouchableOpacity
//                 onPress={() => navigation.navigate('Browse')}
//                 >
//               <Block shadow flex={false} middle center
//               style={{
//                 width: 60, 
//                 height: 60, 
//                 marginRight: 8,
//                 borderRadius: 45,
//                 shadowColor: '#242424',
//                 shadowOffset: { width: 0, height: 2 },
//                 shadowOpacity: 0.09,
//                 shadowRadius: 45,
//                 elevation: 2}}
//               >
//                  <Image
//                     source={item.source}
//                     resizeMode="contain"
//                     style={{overflow: "visible"}}
//                   />
//               </Block>
//               </TouchableOpacity>
//               <Text caption style={{paddingVertical: 8}}>{item.name}</Text>
//               </Block>
//             )}
//             onScroll={Animated.event([
//               {
//                 nativeEvent: { contentOffset: { x: this.scrollX } }
//               }
//             ])}
//           />
//         );
//     }
//     render() { 
//         const {searchString} =this.state;
//         const {FeaturedBrands, Recommended} = this.props;
//         return ( 
          
//             <Block style={{paddingHorizontal: theme.sizes.base}}>
//                 <Block  row center flex={0.18} space={'between'}>
//                 <SearchInput 
//                  style={[{
//                      fontSize: 14, 
//                      color: theme.colors.black,
//                     //  paddingLeft: 10,

//                  }, styles.input]}
//                  onChangeText={(text)=> this.setState({searchString: text})}
//                  value={searchString}
//                  iconName={"search"}
//                  iconColor={theme.colors.black}
//                  iconSize={20}
//                  /> 
//                 <Image 
//                 source={require('../assets/images/Search_Camera.png')}
//                 style={{width: 40, height: 40, paddingLeft: 10}}
//                 />
//                 </Block>
//                 <ScrollView 
//                 showsVerticalScrollIndicator={false}
//                 scrollEventThrottle={16}
//                 style={{flex: 0.8}}>
//                 <Block margin={[5,0]} flex={0.3}>
//                   <Block flex={false}>
//                     <Text bold black title>Categories</Text>
//                   </Block>
//                     <Block flex={false} margin={[10, 0]}>
//                       {this.renderCategories()}
//                     </Block>
//                 </Block>
//                 <Block flex={0.7}>
//                   <Block row space={'between'} flex={false}
//                   style={{marginBottom: 20}}
//                   >
//                     <Text title bold>Best Selling</Text>
//                     <TouchableOpacity>
//                       <Text header>See all</Text>
//                     </TouchableOpacity>
//                   </Block>
//                   <Block wrap middle row space={'between'}>
//                     {this.renderBestSellers()}
//                   </Block> 
//                 </Block>
//                <Block margin={[20,0]}>
//                <Block flex={false}
//                   style={{marginBottom: 25}}
//                   >
//                     <Text title bold>Featured Brands</Text>
                  
//                   </Block>
//                   <Block>
//                      <FlatList
//                       horizontal
//                       // pagingEnabled
//                       scrollEnabled
//                       showsHorizontalScrollIndicator={false}
//                       scrollEventThrottle={16}
//                       snapToAlignment="center"
//                       data={FeaturedBrands}
//                       extraDate={this.state}
//                       keyExtractor={(item, index) => `${item.id}`}
//                       renderItem={({ item }) => (
//                         <Card 
//                           style={{width: 150, marginRight: 15}}
//                         row>
//                           <Block>
//                             <Image source={item.image}/>
//                           </Block>
//                           <Block>
//                             <Text header bold>{item.name}</Text>
//                             <Text caption gray>{item.products}</Text>
//                           </Block>
//                         </Card>
//                       )}
//                       onScroll={Animated.event([
//                         {
//                           nativeEvent: { contentOffset: { x: this.scrollX } }
//                         }
//                       ])}
//                     />
//                   </Block>
//                </Block>
//                <Block margin={[0,0]}>
//                <Block row space={'between'} flex={false}
//                   style={{marginBottom: 20}}
//                   >
//                     <Text title bold>Recommended</Text>
//                     <TouchableOpacity>
//                       <Text header>See all</Text>
//                     </TouchableOpacity>
//                   </Block>
//                   <Block row space={'between'}>
//                     {Recommended.map((item)=> {
//                       return (
//                         <Block key={item.id} flex={false}>
//                           <Block flex={false}>
//                             <Image source={item.image}

//                             style={{width: 135, height: 210}}
//                             />
//                           </Block>
//                           <Block flex={false} margin={[5,0]}>
//                             <Text header>{item.name}</Text>
//                             <Text caption gray>{item.manifacturer}</Text>
//                             <Text header primary>${item.price}</Text>
//                           </Block>
//                         </Block>
//                       );
//                     })}
//                   </Block>
//                </Block>
//                </ScrollView>
//             </Block>
            
//          );
//     }
// }
 
// const styles = StyleSheet.create({
//     input: {
//         backgroundColor: '#f8f8f9',
//         width: width/1.8,
//         height: 40,
//         borderRadius: 45,
//         borderRightWidth: 0,
//         // borderColor: "#707070",
//         borderWidth: 0,
//         shadowColor: '#DDDDDD' || theme.colors.black,
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 13,
//         // elevation: 2
//     }
// });
// Explore.defaultProps = {
//     Categories: [
//         { id: 1, name: 'Gadgets', source: require("../assets/images/Icon_Gadgets.png") },
//         // { id: 2, source: require("../assets/images/Icon_Gaming.png'") },
//         { id: 3, name: 'Devices', source: require("../assets/images/Icon_Devices.png") },
//         { id: 4, name: 'Men', source: require("../assets/images/Icon_Mens.png") },
//         { id: 5, name: 'Women', source: require("../assets/images/Icon_Womens.png") },
//         { id: 2, name: 'Gamimg', source: require("../assets/images/Icon_Gadgets.png") },
//       ],
//     BestSellers: mocks.Explore,
//     FeaturedBrands: mocks.Explore.featuredBrands,
//     Recommended: mocks.Explore.recommended,
// }
// export default Explore;