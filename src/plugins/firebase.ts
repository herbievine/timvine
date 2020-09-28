import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/performance'

const config = {
    apiKey: "AIzaSyB1rP7ZYXbdBM25_4e34W3-5kNvSpQ_UXk",
    authDomain: "timvine-4ab8c.firebaseapp.com",
    databaseURL: "https://timvine-4ab8c.firebaseio.com",
    projectId: "timvine-4ab8c",
    storageBucket: "timvine-4ab8c.appspot.com",
    messagingSenderId: "589517108933",
    appId: "1:589517108933:web:448975464be1c5d486a2ac",
    measurementId: "G-S4NKL0ML2K"
}

const initFirebase = async () => {
    await firebase.initializeApp(config)
    await firebase.performance()
    if (await firebase.analytics.isSupported()) await firebase.analytics()
}

export { initFirebase }