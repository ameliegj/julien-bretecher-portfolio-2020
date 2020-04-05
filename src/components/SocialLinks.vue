<template>
  <div class="SocialLinks">
    <a href="" class="tw">• twttr</a>
    <a href="" class="db">• drbbbl</a>
    <a href="" class="lk">• lnkdn</a>
  </div>
</template>

<script>
export default {
  name: "SocialLink"
};
</script>

<style lang="scss" scoped>
.SocialLinks {
  margin: 30px 0px;
  a {
    padding: 10px 15px;
    &:hover {
      border-radius: 6px;
      &.tw {
        background-color: fade-out($tw-blue, 0.94);
      }
      &.db {
        background-color: fade-out($db-pink, 0.94);
      }
      &.lk {
        background-color: fade-out($lk-blue, 0.94);
      }
    }
    &.tw {
      color: $tw-blue;
      //background-color: fade-out($tw-blue, 0.94);
    }
    &.db {
      color: $db-pink;
      display: none;
    }
    &.lk {
      color: $lk-blue;
    }
  }
  @include media-breakpoint-up(sm) {
  }
  @include media-breakpoint-up(md) {
    a {
    padding: 10px 15px;
    &:hover {
      border-radius: 6px;
      &.tw {
        background-color: fade-out($tw-blue, 0.94);
      }
      &.db {
        background-color: fade-out($db-pink, 0.94);
      }
      &.lk {
        background-color: fade-out($lk-blue, 0.94);
      }
    }
    &.tw {
      color: $tw-blue;
      //background-color: fade-out($tw-blue, 0.94);
    }
    &.db {
      color: $db-pink;
      display: inline;
    }
    &.lk {
      color: $lk-blue;
    }
  }
  }
  @include media-breakpoint-up(lg) {
  }
  @include media-breakpoint-up(xl) {
  }
}
</style>
