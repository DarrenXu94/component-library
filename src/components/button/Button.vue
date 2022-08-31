<template>
  <button class="ds-button" :class="{ 'primary': variant == 'primary', 'secondary': variant == 'secondary' }">Button
    from
    vue component</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

type Variants = 'primary' | 'secondary'
const variants = ['primary', 'secondary']

export default defineComponent({
  name: 'Button',
  components: {
  },
  props: {
    variant: {
      type: String as PropType<Variants>,
      default: 'primary',
      validator: (value: Variants) => (variants.indexOf(value) !== -1)
    }
  },
  data() {
    return {
    };
  },
});
</script>

<style lang="scss">
.ds-button {
  &.primary {
    color: var(--color-primary);
  }

  &.secondary {
    color: var(--color-secondary);
  }
}
</style>