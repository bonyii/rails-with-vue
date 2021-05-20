<template>
  <div>
    <p>Welcome home {{ msg }}!</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: BLOG_KEYS.foo
    }
  }
}

</script>
