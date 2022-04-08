import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()

const useFirebase = () => {

      const [user, setuser] = useState({})
      const [error, setError] = useState('')
      const [authError, setAuthError] = useState('')
      const [isloading, setIsLoading] = useState(true)
      const [admin, setAdmin] = useState(false)

      const auth = getAuth();
      const GoogleProvider = new GoogleAuthProvider();

      const googleSignIn = (navigate, location) => {
            setIsLoading(true)
            signInWithPopup(auth, GoogleProvider)
                  .then((result) => {

                        saveUser(user.email.toLowerCase(), user.displayName.toLowerCase(), 'PUT')
                        console.log(user.email, user.displayName)
                        setAuthError('')
                        const destination = location?.state?.from || '/'
                        navigate(destination)
                        setuser(result.user)
                  }).catch((error) => {

                        setError(error.message);

                  })
                  .finally(() => setIsLoading(false));
      }

      const createUser = (email, password, name, navigate) => {
            setIsLoading(true)
            createUserWithEmailAndPassword(auth, email, password)

                  .then((userCredential) => {
                        setAuthError('')
                        const newUser = { email, displayName: name }
                        console.log(userCredential, newUser)
                        setuser(newUser)

                        saveUser(email.toLowerCase() ,name.toLowerCase(),  'POST')

                        updateProfile(auth.currentUser, {
                              displayName: name
                        }).then(() => {
                              // Profile updated!
                              // ...
                        }).catch((error) => {
                              // An error occurred
                              // ...
                        });
                  })
                  .catch((error) => {
                        setError(error.message)
                        // ..
                  })
                  .finally(() => setIsLoading(false));
      }

      const emailSignIn = (email, password, navigate, location) => {
            setIsLoading(true)
            signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                        const destination = location?.state?.from || '/';
                        navigate(destination)
                        alert("Sign in")
                  })
                  .catch((error) => {
                        setError(error.message)
                  })
                  .finally(() => setIsLoading(false));
      }

      useEffect(() => {

            const unsubscribe = onAuthStateChanged(auth, (user) => {
                  if (user) {
                        setuser(user)
                  } else {
                        setuser({})
                  }
                  setIsLoading(false)
            });
            return () => unsubscribe
      }, [])

      // useEffect(() => {
      //       fetch(`https://peaceful-citadel-92019.herokuapp.com/users/${user?.email}`)
      //             .then(res => res.json())
      //             .then(data => setAdmin(data.admin))
      // }, [user.email])

      const saveUser = (email, displayName, method) => {
            const user = { email, displayName }
            fetch('https://writehubs.herokuapp.com/users', {
                  method: method,
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(user)
            })
      }

      const logOut = () => {
            setIsLoading(true)
            signOut(auth).then(() => {
                  setuser({})
            }).catch((error) => {
                  setError(error.message)
            })
                  .finally(() => setIsLoading(false));
      }

      return {
            user,
            error,
            admin,
            isloading,
            googleSignIn,
            createUser,
            emailSignIn,
            logOut
      }

}

export default useFirebase