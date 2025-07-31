importScripts(
  "https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js"
);
firebase.initializeApp({
  apiKey: "AIzaSyBdUCJMpJN0vSMynMrJePNxHQyqfm-GF98",
  authDomain: "seenyor-4c3e7.firebaseapp.com",
  projectId: "seenyor-4c3e7",
  messagingSenderId: "73834842323",
  appId: "1:73834842323:web:12b71290ad820764c2ac26",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  // App/browser is closed: show system notification
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);

  // Show the notification
  // self.registration.showNotification(notificationTitle, notificationOptions);
});
