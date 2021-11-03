import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'



export default {
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        await signInWithEmailAndPassword(getAuth(), email, password)
      } catch (e) {
        throw e
      }
    },
  },
}