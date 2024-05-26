import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { getFirestore, doc, getDoc, getDocs, collection,query } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAEEmKGAqgcG4m2s3m1aQ0iWLvAaFnSswE",
    authDomain: "hackaton-b2efc.firebaseapp.com",
    projectId: "hackaton-b2efc",
    storageBucket: "hackaton-b2efc.appspot.com",
    messagingSenderId: "122334640804",
    appId: "1:122334640804:web:2e262fed2ecb7fd0534431",
    measurementId: "G-T653G20QHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
class Event {
    constructor(
      id,
      name,
      description,
      pictures,
      organizatorId,
      facultaty,
      time
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.pictures = pictures;
      this.organizatorId = organizatorId;
      this.facultaty = facultaty;
      this.time = time;
      this.listOfStringPictures = null;
    }
  
    toJSON() {
      return {
        id: this.id,
        name: this.name,
        description: this.description,
        pictures: this.pictures,
        organizator: this.organizatorId,
        facultaty: this.facultaty,
        time: this.time,
      };
    }
  
    static fromMap(map) {
      return new Event(
        map.id,
        map.title,
        map.description,
        map.imageList,
        map.idCreatedBy,
        map.facultaty,
        map.dateTime
      );
    }
  }
  const eventRef = doc(db,'eventsPublish',"HONsSQhOgWUutoYgMbxWAW5XoO52*~~@(*%&%#2024-05-25 18:57:00.591980[#c3655]")
  const eventSnap = await getDoc(eventRef);
  const evName = document.getElementsByClassName("eventname")[0]
  const evPic = document.getElementsByClassName("eventpng")[0]
  const evDep = document.getElementsByClassName("eventdep")[0]
  const evinfo = document.getElementsByClassName("eventinfo")[0]

  let events=[

  ]

  const q = query(collection(db, "eventsPublish"));


  const querySnapshot = await getDocs(q);
  
  querySnapshot.forEach(async(el) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    events.push({
        "id":`${el.id}`,
        "title":`${el.data().title}`,
        "facultaty":`${el.data().facultaty}`,
        "description":`${el.data().description}`,
        "time":`${el.data().dateTime}`,
        "creator":`${el.data().idCreatedBy}`,
        "image":`${el.data().imageList}`
    })
  }
);
evName.innerHTML=events[4].title
evPic.src= `${events[4].image}`

evDep.innerHTML=events[4].facultaty
evinfo.innerHTML=events[4].description