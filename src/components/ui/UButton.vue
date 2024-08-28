<script setup lang="ts">
const props = defineProps<{
  title: string
  icon?: string
  positionIcons?: 'right' | 'left'
  disabled?: boolean
}>()
</script>
<template>
  <Button
    :label="props.title"
    :icon="props.icon"
    :iconPos="props.positionIcons"
    :disabled="props.disabled"
    class="my-btn"
  />
</template>
<style lang="scss" scoped>
.my-btn {
  width: fit-content !important;
  background-color: var(--primary) !important;
  color: var(--white) !important;
  border: none !important;
  font-size: var(--text-large) !important;
  --p-button-label-font-weight: 600 !important;
}
</style>
