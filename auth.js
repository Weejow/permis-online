
// Authentification avec Firebase
const auth = firebase.auth();
const db = firebase.firestore();

// Inscription
function register(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      alert("Inscription réussie !");
    })
    .catch(error => {
      alert("Erreur : " + error.message);
    });
}

// Connexion
function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      alert("Connecté !");
      window.location.href = "profil.html";
    })
    .catch(error => {
      alert("Erreur : " + error.message);
    });
}

// Déconnexion
function logout() {
  auth.signOut().then(() => {
    alert("Déconnecté.");
    window.location.href = "index.html";
  });
}
