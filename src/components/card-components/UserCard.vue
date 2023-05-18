<script setup lang="ts">
import type { User } from '@/types'
type PropTypes = {
  user: User
}
const props = defineProps<PropTypes>()
const user = props.user
const emits = defineEmits<{
  (e: 'send-data-user', userId: number): number
}>()
const sendUserId = () => {
  emits('send-data-user', user.id)
}
</script>

<template>
  <v-card class="mx-auto d-flex flex-column align-center" max-width="344">
    <v-card-text>
      <div>{{ user.id }}: {{ user.name }}</div>
      <p class="text-h4 text--primary">{{ user.address.street }}</p>
      <p>{{ user.address.zipcode }}</p>
      <div class="text--primary">
        {{ user.email }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="text" color="deep-purple-accent-4" @click="sendUserId"> About Person </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
