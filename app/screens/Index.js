import React from 'react';
import  { SafeAreaView,Text,View } from 'react-native'
// class Index extends React.Component{
//   render(){
//     return  (
//       <SafeAreaView>
//         <Child color="red"></Child>
//       </SafeAreaView> 
//     )
//   }
// }
const Index = ()=><SafeAreaView>
  <Child color="red">
  {/* 向子组件插入内容 */}
  <Text>12331</Text>
  </Child>
</SafeAreaView>
const  Child = (props)=><View>
    <Text style={{color:props.color}}>子组件
    {/* 子组件接收 */}
    {props.children}</Text>
    </View>
 


export default Index;