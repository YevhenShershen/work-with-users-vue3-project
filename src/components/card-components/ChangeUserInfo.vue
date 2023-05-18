<script setup lang="ts">
import { useUsersStore } from '../../stores/uesersStore'
import type { User } from '@/types'
type PropTypes = {
  user: User
}
const userStore = useUsersStore()
const props = defineProps<PropTypes>()
const user = props.user
</script>

<template>
  <div class="change-user">
    <input class="change-user_input" type="text" placeholder="change name" />
    {{ user.id }}{{ user.name }}
    <v-btn>SAVE</v-btn>
  </div>
</template>

<style scoped></style>
