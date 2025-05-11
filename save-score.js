
// Sauvegarde du score après un test
function saveTestResult(score) {
  const user = firebase.auth().currentUser;
  if (user) {
    firebase.firestore().collection("results").add({
      uid: user.uid,
      email: user.email,
      score: score,
      date: new Date()
    }).then(() => {
      alert("Résultat sauvegardé !");
    }).catch(error => {
      console.error("Erreur sauvegarde : ", error);
    });
  } else {
    alert("Veuillez vous connecter pour enregistrer vos résultats.");
  }
}
