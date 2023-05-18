<script setup lang="ts">
import UserCard from './card-components/UserCard.vue'
import { onMounted, ref } from 'vue'
import { useUsersStore } from '../stores/uesersStore'
import ChangeUserInfo from './card-components/ChangeUserInfo.vue'
import ErrorComponent from './card-components/ErrorComponent.vue'
const UsersShow = ref(false)
const userStore = useUsersStore()
const getUserId = ref()
const sendUserId = (id: number) => {
  getUserId.value = userStore.getUserById(id)
  UsersShow.value = true
}
onMounted(() => {
  userStore.loadUsersData()
})
</script>

<template>
  <div v-if="!UsersShow" v-for="user in userStore.list" :key="`item-key-${user.id}`" class="mt-2">
    <UserCard :user="user" @send-data-user="sendUserId" />
  </div>
  <ChangeUserInfo v-else-if="UsersShow" :user="getUserId" />
  <ErrorComponent v-else />
</template>

<style scoped></style>
