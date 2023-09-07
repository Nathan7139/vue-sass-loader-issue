<template>
<div>
  test
</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>
<style lang="scss">

body {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: gray;
}

div {
  @if $test == 'a' {
    color: blue;
  } @else if $test == 'apple' {
    color: green;
  } @else {
    color: yellow;
  }
}
</style>
