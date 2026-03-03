document.addEventListener('DOMContentLoaded', event => {
    const app = firebase.app();
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            document.getElementById('user-name').innerText = 'Hello ' + user.displayName;
        })
        .catch(error => {
            console.error(error);
        });
}

function readDB() {
    const db = firebase.firestore();
    const mypost = db.collection('mypost').doc('firstpost');

    mypost.get()
        .then(doc => {
            
            const data = doc.data();
            document.getElementById('user-data').innerText = data.title + ': ' + data.createdAt
        })
        .catch(error => {
            console.error(error);
        });
}