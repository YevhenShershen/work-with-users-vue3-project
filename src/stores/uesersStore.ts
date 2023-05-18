import { defineStore } from 'pinia'
import type { User } from '@/types'
import { URL_USERS } from '@/constants'
import axios from 'axios'
type UsersList = {
  list: User[]
}
export const useUsersStore = defineStore('DishStore', {
  state: (): UsersList => ({
    list: []
  }),
  getters: {
    getUserById: (state) => {
      return (userId: any) => state.list.find((user) => user.id === userId)
    }
  },
  actions: {
    async loadUsersData() {
      try {
        const data = await axios.get(URL_USERS)
        this.list = data?.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }
})
