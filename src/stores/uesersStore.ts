import { defineStore } from 'pinia'
import type { User } from '@/types'
import axios from 'axios'
type UsersList = {
  list: User[]
}
export const useUsersStore = defineStore('DishStore', {
  state: (): UsersList => ({
    list: []
  }),
  getters: {},
  actions: {
    async loadUsersData() {
      try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.list = data.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }
})
