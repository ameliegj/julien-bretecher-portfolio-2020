<template>
  <div class="hello">
    <h1>Title H1</h1>
    <h2>Title H2</h2>
    <h3>Title H3</h3>
    <h4>Title H4 <span class="bold">bold</span></h4>
    <p>Paragraphe <span class="bold">bold</span></p>
    <a href="">lien</a>
    <div class="label">label</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
