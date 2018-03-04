
var firebaseConfig = {
    apiKey: "AIzaSyDphV4MYY3_5afvSBpNB8TdFIF8VnaA6ig",
    authDomain: "concussionmock.firebaseapp.com",
    databaseURL: "https://concussionmock.firebaseio.com",
    projectId: "concussionmock",
    storageBucket: "",
    messagingSenderId: "593701528719"
};
firebase.initializeApp(firebaseConfig);

var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
    callbacks: {
        signInSuccess: function(currentUser, credential, redirectUrl) {
            return true;
        }
    },
    signInFlow: 'redirect',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '/main'
});