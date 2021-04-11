<template>
  <div id="app">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello to my first Vue and Rails application!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
  color: red;
}
</style>
