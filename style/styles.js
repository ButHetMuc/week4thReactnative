import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#C4C4C4',

  },
  top:{
    flex:2,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent:'flex-start',
    paddingTop:30,
    paddingHorizontal:20
  },
  topUp:{
    flex:2,
    flexDirection:'row'
  },
  discount:{
    flexDirection: 'row',
    marginTop:20,
  }
  ,
  topDown:{
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  topUpLeft:{
    justifyContent:'center',
    alignItems:'flex-start',
  },
  topUpRight:{
    marginStart: 20,
    flexDirection:'column',
  },
  topRightText:{
    flex: 1,
    justifyContent:'space-around',
    alignItems:'flex-start',
  },
  originPrice:{
    fontWeight:'bold',
    textDecorationLine:'line-through',
    textDecorationStyle:'solid',
  },
  topRightAmount:{
    height:25,
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'flex-start',
  },
  iconButton:{
    backgroundColor:'grey',
  }
  ,
  mid:{
    flex:1,
    flexDirection:'column',
  },
  midTop:{
    flex:1,
    marginTop:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'white',
    paddingHorizontal:20,
  },
  midBot:{
    marginTop:20,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    backgroundColor:'white',
  },
  bottom:{
    flex:1
  },
  bottomUp:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'white',
    paddingHorizontal:20,
    marginVertical:50,
  },
  button:{
    borderRadius: 30,
    paddingHorizontal: 50,
  }
});
export default styles;