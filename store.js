/* store.js
   Simple app-wide data store (Redux-lite)
*/

export const URI = "http://localhost:3000";

let state = {

  // Search location set by homePG
  // Used to load the list of locations in listPG
  searchFor: "Boulder, CO",

  // Locations set by listPG after locations loaded from Yelp
  /* [
      {
        yelpId: 'DFGET5fgHGT43fg',
        name: 'Eureka',
        tbd....
      },
      { ... },
     ]
  */
  locations: [],

  // Loading status set by listPG when fetching list from Yelp
  // FIX: set back to true when we are actually loading data
  // isFetching: true,
  isFetching: false,

  // User loaded by loginPG
  // Null when user is not logged in
  /* { fname: "Jane",
       lname: "Doe",
       email: "jd@gmail.com",
       dogNames: "Sparky and Tilde",
     } */
  user: null,
  isLoggedIn: false,
  // user: {
  //   id: 1234,
  //   fname: "Jane",
  //   lname: "Doe",
  //   email: "jd@gmail.com",
  //   dogNames: "Sparky and Tilde",
  // },

  // Global error state
  // Not sure if this will be used
  error: false,
};

const listeners = [];

export default {
  getState() {
    return state;
  },
  setState(newState) {
    state = { ...state, ...newState };
    console.log("---------------- store::setState ----------------------");
    console.log("Adding: ", newState);
    console.log("-------------------------------------");
    console.log("New store: ", state);
    console.log("-------------------------------------");
    console.log("Listener count: ", listeners.length);
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    listeners.forEach(listener => listener());
  },
  onChange(newListener) {
    listeners.push(newListener);
    // returns function to remove listener from list
    return () => listeners.filter(listener => listener !== newListener);
  },
};