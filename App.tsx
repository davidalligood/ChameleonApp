/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// TO START BUNDLER: npx react-native start
// TO RUN APP ON SIMULATOR: npx react-native run-ios

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {
  Colors,
  /* DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions, */
} from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Category, categories} from './categories';
import {Picker} from '@react-native-picker/picker';

import Icon from 'react-native-vector-icons/FontAwesome';

interface Player {
  name: string;
  phone: string;
  id?: number;
}

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);
// const client = twilio(accountSid, authToken)

const getCategory = (categoryName: string) => {
  const randomIndex = getRandomInt(categories.length - 1);
  const category =
    categoryName === 'Random'
      ? categories[randomIndex]
      : categories.find(category => category.categoryName === categoryName);
  return category;
};

const getTextMessage = (
  name: string,
  isChameleon: boolean,
  category: Category,
  secretWordIndex: number,
  gameCount: number,
) => {
  console.log('gameCount: ', gameCount);
  const secretWord = category.words[secretWordIndex];
  /* const text = isChameleon
    ? '%0aGame ' +
      gameCount.toString() +
      '%0a %0aHello ' +
      name +
      ', welcome to Chameleon!%0aYou are the Chameleon!%0a %0a' +
      category.categoryName.toUpperCase() +
      ':' +
      '%0a' +
      category.words[0] +
      '%0a' +
      category.words[1] +
      '%0a' +
      category.words[2] +
      '%0a' +
      category.words[3] +
      '%0a' +
      category.words[4] +
      '%0a' +
      category.words[5] +
      '%0a' +
      category.words[6] +
      '%0a' +
      category.words[7] +
      '%0a' +
      category.words[8] +
      '%0a' +
      category.words[9] +
      '%0a' +
      category.words[10] +
      '%0a' +
      category.words[11] +
      '%0a' +
      category.words[12] +
      '%0a' +
      category.words[13] +
      '%0a' +
      category.words[14] +
      '%0a' +
      category.words[15]
    : '%0aGame ' +
      gameCount.toString() +
      '%0a %0aHello ' +
      name +
      ', welcome to Chameleon!%0aYou are NOT the Chameleon.%0a %0aThe secret word is: ' +
      secretWord +
      '%0a %0a' +
      category.categoryName.toUpperCase() +
      ':' +
      '%0a' +
      category.words[0] +
      '%0a' +
      category.words[1] +
      '%0a' +
      category.words[2] +
      '%0a' +
      category.words[3] +
      '%0a' +
      category.words[4] +
      '%0a' +
      category.words[5] +
      '%0a' +
      category.words[6] +
      '%0a' +
      category.words[7] +
      '%0a' +
      category.words[8] +
      '%0a' +
      category.words[9] +
      '%0a' +
      category.words[10] +
      '%0a' +
      category.words[11] +
      '%0a' +
      category.words[12] +
      '%0a' +
      category.words[13] +
      '%0a' +
      category.words[14] +
      '%0a' +
      category.words[15]; */

  const text = isChameleon
    ? '\nGame ' +
      gameCount.toString() +
      '\n \nHello ' +
      name +
      ', welcome to Chameleon!\nYou are the Chameleon!\n \n' +
      category.categoryName.toUpperCase() +
      ':' +
      '\n' +
      category.words[0] +
      '\n' +
      category.words[1] +
      '\n' +
      category.words[2] +
      '\n' +
      category.words[3] +
      '\n' +
      category.words[4] +
      '\n' +
      category.words[5] +
      '\n' +
      category.words[6] +
      '\n' +
      category.words[7] +
      '\n' +
      category.words[8] +
      '\n' +
      category.words[9] +
      '\n' +
      category.words[10] +
      '\n' +
      category.words[11] +
      '\n' +
      category.words[12] +
      '\n' +
      category.words[13] +
      '\n' +
      category.words[14] +
      '\n' +
      category.words[15]
    : '\nGame ' +
      gameCount.toString() +
      '\n \nHello ' +
      name +
      ', welcome to Chameleon!\nYou are NOT the Chameleon.\n \nThe secret word is: ' +
      secretWord +
      '\n \n' +
      category.categoryName.toUpperCase() +
      ':' +
      '\n' +
      category.words[0] +
      '\n' +
      category.words[1] +
      '\n' +
      category.words[2] +
      '\n' +
      category.words[3] +
      '\n' +
      category.words[4] +
      '\n' +
      category.words[5] +
      '\n' +
      category.words[6] +
      '\n' +
      category.words[7] +
      '\n' +
      category.words[8] +
      '\n' +
      category.words[9] +
      '\n' +
      category.words[10] +
      '\n' +
      category.words[11] +
      '\n' +
      category.words[12] +
      '\n' +
      category.words[13] +
      '\n' +
      category.words[14] +
      '\n' +
      category.words[15];
  return text;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const dispatchSendText = async (
  players: Player[],
  playerIndexCounter: number,
  chameleonIndex: number,
  category: any,
  secretWordIndex: number,
  gameCount: number,
  setPlayerIndexCounter,
) => {
  try {
    const player = players[playerIndexCounter];
    const recipient = player.phone;
    const textMessage = getTextMessage(
      player.name,
      playerIndexCounter === chameleonIndex,
      category,
      secretWordIndex,
      gameCount,
    );
    const response = await fetch(
      `https://chameleonapi.herokuapp.com/send-text?recipient=${recipient}&textmessage=${textMessage}`,
    );
    console.log('response: ', response);
    setPlayerIndexCounter(playerIndexCounter - 1);
  } catch (e) {
    console.log(e);
    Alert.alert('An error occurred sending texts', 'Please try again');
  }
};

const sendText = (
  players: Player[],
  categoryName: string,
  gameCount: number,
  setGameCount,
  setPlayerIndexCounter,
) => {
  console.log('in sendText func');
  console.log('players: ', players);
  // For some reason, \n is how you encode a line break
  const chameleonIndex = getRandomInt(players.length);
  console.log('chamel index: ', chameleonIndex);
  const category = getCategory(categoryName);
  const secretWordIndex = getRandomInt(category.words.length);
  setPlayerIndexCounter(players.length - 1);
  /* players.forEach((player, index) => {
    const recipient = player.phone
    const textMessage = getTextMessage(player.name, index === chameleonIndex, category, secretWordIndex, gameCount)
    fetch(`http://localhost:4000/send-text?recipient=${recipient}&textmessage=${textMessage}`)
    .catch(err => console.error(err))
    console.log("timeout over")
  }) */
  setGameCount(gameCount + 1);
};

const updatePlayerArrayName = (
  text: string,
  index: number,
  playerArray: Player[],
  setPlayerArray: any,
) => {
  const players = playerArray;
  players[index].name = text;
  setPlayerArray([...players]);
  console.log('updatedName: ', playerArray);
};

const updatePlayerArrayPhone = (
  text: string,
  index: number,
  playerArray: Player[],
  setPlayerArray: any,
) => {
  const players = playerArray;
  players[index].phone = !players[index].phone ? '+' + text : text;
  setPlayerArray([...players]);
  console.log('updatedPhone: ', playerArray);
};

const removePlayer = (
  index: number,
  playerArray: Player[],
  setPlayerArray: any,
) => {
  const players = playerArray;
  players.splice(index, 1);
  console.log('players after delete: ', players);
  setPlayerArray([...players]);
};

const PlayerInput = props => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 16}}>
      <View
        style={{
          borderRadius: 8,
          paddingVertical: 12,
          paddingHorizontal: 8,
          marginHorizontal: 12,
          flex: 1,
          backgroundColor: 'mediumpurple',
        }}>
        <TextInput
          onChangeText={text =>
            updatePlayerArrayName(
              text,
              props.index,
              props.playerArray,
              props.setPlayerArray,
            )
          }
          placeholder={`Player ${props.index + 1} Name`}
          defaultValue={props?.player?.name || undefined}
          placeholderTextColor={'rgba(0, 0, 20, 0.72)'}
          style={{
            borderRadius: 8,
            height: 36,
            marginBottom: 16,
            paddingHorizontal: 8,
            backgroundColor: '#ffffaa',
          }}
          editable={!props.loadingSendText}
        />
        <TextInput
          onChangeText={text =>
            updatePlayerArrayPhone(
              text,
              props.index,
              props.playerArray,
              props.setPlayerArray,
            )
          }
          placeholder={`Player ${props.index + 1} Phone`}
          keyboardType={'numbers-and-punctuation'}
          defaultValue={props?.player?.phone || undefined}
          placeholderTextColor={'rgba(0, 0, 20, 0.72)'}
          style={{
            borderRadius: 8,
            height: 36,
            paddingHorizontal: 8,
            backgroundColor: '#ffffaa',
          }}
          // maxLength={12}
          editable={!props.loadingSendText}
        />
      </View>
      <TouchableOpacity
        style={{
          height: 20,
          width: 20,
          marginRight: 12,
          backgroundColor: 'gray',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
        }}
        onPress={() =>
          removePlayer(props.index, props.playerArray, props.setPlayerArray)
        }
        disabled={props.loadingSendText}>
        <Icon name={'times'} color={'black'} size={18} />
      </TouchableOpacity>
    </View>
  );
};

const ContactCell = props => {
  const playerPhones = [];
  props.playerArray.forEach(player => playerPhones.push(player.phone));
  let disabled = false;
  if (playerPhones.includes(props.contact.phone)) {
    disabled = true;
  } else {
    disabled = false;
  }
  return (
    <TouchableOpacity
      disabled={disabled || props.loadingSendText}
      onPress={() =>
        addPreviousPlayer(
          props.contact,
          props.playerArray,
          props.index,
          props.setPlayerArray,
        )
      }
      onLongPress={() =>
        Alert.alert('Delete this contact?', undefined, [
          {
            text: 'Delete',
            onPress: () =>
              deleteContact(
                props.contactsArray,
                props.index,
                props.setContacts,
              ),
            style: 'destructive',
          },
          {text: 'Cancel', onPress: () => undefined, style: 'cancel'},
        ])
      }
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 8,
          minHeight: 40,
          borderRadius: 8,
        },
        {backgroundColor: disabled ? 'gray' : 'green'},
      ]}>
      <Text style={{marginHorizontal: 8}}>{props?.contact?.name}</Text>
    </TouchableOpacity>
  );
};

const addPreviousPlayer = (
  contact: Player,
  playerArray: Player[],
  index: number,
  setPlayerArray,
) => {
  const players = playerArray;
  players.push({
    name: contact.name,
    phone: contact.phone,
    id: Math.random(),
  });
  console.log('players after push: ', players);
  setPlayerArray([...players]);
  console.log('players state: ', playerArray);
};

const deleteContact = (contactsArray: Player[], index: number, setContacts) => {
  contactsArray.splice(index, 1);
  console.log('contacts after delete: ', contactsArray);
  saveNewContacts(contactsArray, setContacts);
};

const saveNewContacts = async (
  newContactArray: Player[],
  setContacts?: any,
) => {
  console.log('newContactArray: ', newContactArray);
  try {
    const contactsString = JSON.stringify(newContactArray);
    console.log('contactsString: ', contactsString);
    await AsyncStorage.setItem('@contacts', contactsString);
    if (!!setContacts) {
      getPreviousPlayers(setContacts);
    }
  } catch (err) {
    console.log('error saving contacts: ', err);
  }
};

const getPreviousPlayers = async setContacts => {
  // console.log("contacts in state: ", contacts);
  try {
    const contacts = await AsyncStorage.getItem('@contacts');
    console.log('getContacts string: ', contacts);
    if (contacts !== null) {
      const contactsArray = JSON.parse(contacts);
      console.log('getContacts: ', contactsArray);
      setContacts(contactsArray);
    }
  } catch (err) {
    console.log('error retrieving contacts: ', err);
  }
};

const App: () => Node = () => {
  const [playerArray, setPlayerArray] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [selectedCategoryName, setCategoryName] = useState('Random');
  const [selectedCategory, setCategory] = useState({});
  const [chameleonIndex, setChameleonIndex] = useState(-1);
  const [secretWordIndex, setSecretWordIndex] = useState(-1);
  const [gameCount, setGameCount] = useState(0);
  const [playerIndexCounter, setPlayerIndexCounter] = useState(-1);
  const [loadingSendText, setLoadingSendText] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [validationErrorMessage, setValidationErrorMessage] = useState('');

  // empty brackets = componentDidMount
  // no brackets = componentdDidUpdate

  useEffect(() => {
    getPreviousPlayers(setContacts);
  }, []);

  useEffect(() => {
    if (playerIndexCounter !== -1) {
      dispatchSendText(
        [...playerArray],
        playerIndexCounter,
        chameleonIndex,
        selectedCategory,
        secretWordIndex,
        gameCount,
        setPlayerIndexCounter,
      );
      setLoadingSendText(true);
    } else if (playerIndexCounter === -1 && loadingSendText === true) {
      setLoadingSendText(false);
      Alert.alert('Texts have been sent!');
    }
    console.log('playerIndexCounter changed: ', playerIndexCounter);
    console.log('loadingSendText: ', loadingSendText);
  }, [playerIndexCounter]);

  // Validation check
  useEffect(() => {
    let validPlayers = [];
    playerArray.forEach(player => {
      if (nameIsValid(player.name) && phoneIsValid(player.phone)) {
        validPlayers.push(player);
      }
    });
    if (validPlayers.length > 2 && validPlayers.length === playerArray.length) {
      console.log('validPlayers: ', validPlayers);
      let validPlayerPhones = [];
      let validPlayerNames = [];
      validPlayers.forEach(player => validPlayerPhones.push(player.phone));
      validPlayers.forEach(player => validPlayerNames.push(player.name));
      contacts.forEach(contact => validPlayerNames.push(contact.name));
      if (
        validPlayerPhones.length === new Set(validPlayerPhones).size /* &&
        validPlayerNames.length === new Set(validPlayerNames).size */
      ) {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
        setValidationErrorMessage('Cannot send to duplicate phone numbers');
      }
    } else if (validPlayers.length !== playerArray.length) {
      setFormIsValid(false);
      setValidationErrorMessage(
        'There is at least 1 invalid name or phone number',
      );
    } else if (validPlayers.length < 3) {
      console.log('form not valid, validPlayers array: ', validPlayers);
      setFormIsValid(false);
      setValidationErrorMessage('3 or more players are required to play');
    }
    console.log('error message: ', validationErrorMessage);
  }, [playerArray]);

  useEffect(() => {
    if (formIsValid === true) {
      setValidationErrorMessage('');
    }
  }, [formIsValid]);

  const nameIsValid = (name: string) => {
    if (name.match(/^[A-Za-z]+$/)) {
      console.log('name matched the regex');
      return true;
    } else {
      /* setValidationErrorMessage(
        'Names cannot contain numbers or special characters',
      ); */
      return false;
    }
  };

  const phoneIsValid = (phone: string) => {
    // removing phone number length check to allow phone numbers from other countries
    if (
      // phone.match(/[+1]([2-9]\d\d[2-9]\d{6})$/) /*  && phone.length === 12 */
      // temporarliy just checking that the phone number starts with a + sign
      phone.match(/^[+]/)
    ) {
      console.log('phone matched the regex');
      return true;
    } else {
      /* setValidationErrorMessage(
        'Phone numbers must be formatted with a +1 preceding the 10 digit US number',
      ); */
      return false;
    }
  };

  const onSubmit = () => {
    const players = [...playerArray];
    const contactsArray = [...contacts];
    const contactPhones = [];
    contactsArray.forEach(contact => contactPhones.push(contact.phone));
    const newPlayers = players.filter(
      player => !contactPhones.includes(player.phone),
    );
    const existingPlayers = players.filter(player =>
      contactPhones.includes(player.phone),
    );
    let isContactUpdated = false;
    existingPlayers.forEach(player => {
      if (
        contactsArray.find(contact => contact.phone === player.phone).name !==
        player.name
      ) {
        const updatedContact = {
          name: player.name,
          phone: player.phone,
          id: Math.random(),
        };
        const index = contactsArray.indexOf(
          contactsArray.find(contact => contact.phone === player.phone),
        );
        console.log('index of replaced contact: ', index);
        contactsArray[index] = updatedContact;
        isContactUpdated = true;
      }
    });
    let newContactArray = [];
    if (isContactUpdated) {
      console.log('updatedContacts: ', contactsArray);
      newContactArray = contactsArray;
    }
    if (!!newPlayers) {
      newContactArray = contactsArray.concat(newPlayers);
    }
    if (!!newContactArray) {
      saveNewContacts(newContactArray, setContacts);
    }
    const category = getCategory(selectedCategoryName);
    setCategory(category);
    const chameleonIndex = getRandomInt(playerArray.length);
    setChameleonIndex(chameleonIndex);
    const secretWordIndex = getRandomInt(category.words.length);
    setSecretWordIndex(secretWordIndex);

    setGameCount(gameCount + 1);

    setPlayerIndexCounter(playerArray.length - 1);
    // sendText(playerArray, selectedCategoryName, gameCount, setGameCount, setPlayerIndexCounter)
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    flex: 1,
  };

  const mockPlayers: Player[] = [
    {
      name: 'Davey',
      phone: '+19196210899',
    },
    {
      name: 'Wuddy',
      phone: '+17046810474',
      // phone: player2
    },
    /* {
      name: "Josh",
      phone: "+19197600660"
    }, */
    /* {
      name: "Aly",
      phone: "+17046208006"
    }, */
    /* {
      name: "Scoob",
      phone: "+17046810155"
    },
    {
      name: "Haydee",
      phone: "+17046813159"
    }, */
  ];

  const addEmptyPlayer = () => {
    const players = playerArray;
    players.push({
      name: '',
      phone: '',
      id: Math.random(),
    });
    console.log('players after push: ', players);
    setPlayerArray([...players]);
    console.log('players state: ', playerArray);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{flex: 1, backgroundColor: '#aaffaa', paddingTop: 16}}>
        {contacts.length > 0 && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
            }}>
            <ScrollView
              style={{
                flex: 1,
                minWidth: 200,
                paddingHorizontal: 8,
                backgroundColor: '#00bb99',
                borderRadius: 8,
              }}>
              {contacts.map((item, index) => {
                return (
                  <ContactCell
                    key={item?.id}
                    index={index}
                    contact={item}
                    playerArray={playerArray}
                    setPlayerArray={setPlayerArray}
                    contactsArray={[...contacts]}
                    setContacts={setContacts}
                    loadingSendText={loadingSendText}
                  />
                );
              })}
            </ScrollView>
          </View>
        )}
        <View
          style={
            {
              // backgroundColor: "#aaffaa",
              // borderWidth: 1,
            }
          }>
          {playerArray.map((item, index) => {
            return (
              <PlayerInput
                key={item?.id}
                index={index}
                player={item}
                playerArray={playerArray}
                setPlayerArray={setPlayerArray}
                loadingSendText={loadingSendText}
              />
            );
          })}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              marginTop: 4,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                height: 40,
                width: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => addEmptyPlayer()}
              disabled={loadingSendText}>
              <Icon name={'user-plus'} size={16} color={'white'} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              backgroundColor: '#00bb99',
              borderRadius: 8,
              marginVertical: 16,
              marginHorizontal: 12,
            }}>
            <Picker
              selectedValue={selectedCategoryName}
              onValueChange={(itemValue, itemIndex) =>
                setCategoryName(itemValue.toString())
              }
              enabled={!loadingSendText}>
              <Picker.Item label={'Random'} value={'Random'} />
              {categories.map(item => {
                return (
                  <Picker.Item
                    key={Math.random()}
                    label={item.categoryName}
                    value={item.categoryName}
                  />
                );
              })}
            </Picker>
          </View>
          {!!validationErrorMessage && (
            <View
              style={{
                backgroundColor: 'skyblue',
                borderRadius: 8,
                marginHorizontal: 12,
                marginTop: 32,
                marginBottom: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{marginVertical: 12}}>
                {' '}
                {validationErrorMessage}{' '}
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={[
              {
                borderRadius: 5,
                marginVertical: 12,
                marginHorizontal: 12,
                minHeight: 50,
                justifyContent: 'center',
                alignItems: 'center',
              },
              {backgroundColor: !formIsValid ? 'gray' : 'cyan'},
            ]}
            onPress={() => onSubmit()}
            disabled={!formIsValid || loadingSendText}>
            {loadingSendText ? <ActivityIndicator /> : <Text>Send Text</Text>}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
