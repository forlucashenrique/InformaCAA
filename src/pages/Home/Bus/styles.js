const styles = {

  container: {
    width: '100%',
    height: '100%',

  },

  gridContainer: {
    width: '100%',
    height: '100%',
    padding: 20,
  },

  gridStyle: {
    borderWidth: 1,
    borderColor: '#0A3472',
    borderRadius: 5,
  },

  gridHeaderContainer: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  gridTitle: {
    backgroundColor: '#0A3472',
    padding: 5,
    marginBottom: 5,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    width: 100,
    textAlign: 'center'
  },

  cell: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    flex: 1, 
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cellText: {
    color: '#0A3472',
    fontSize: 16, 
    fontWeight: 'bold',
  },

  buttonBackModal: {
    backgroundColor: '#0A3472',
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
    
  },

  buttonTextModal: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }

}

export default styles