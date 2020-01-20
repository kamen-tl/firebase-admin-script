var admin = require("firebase-admin");

var serviceAccount = require("./firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://eliland-webstore.firebaseio.com"
});

const addClaim = () => {
  admin.auth().setCustomUserClaims('nWb9N0VxKVMiAwbHyWk8cbMtXRN2', {admin: true}).then(() => {
    // The new custom claims will propagate to the user's ID token the
    // next time a new one is issued.
    console.log('Admin claim added.')
  })
}

module.exports = addClaim;