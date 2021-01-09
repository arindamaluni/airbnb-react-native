import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 100,
    color: 'rgba(255, 255, 255, .7)',
    fontWeight: 'bold',
    width: '90%',
    marginLeft: 25,
  },

  button: {
    backgroundColor: 'rgba(0,200,50,.7)',
    width: '60%',
    // margin: 0, 'auto',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchButton: {
    height: 50,
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    zIndex: 100,
  },
  searchButtonText: {
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
