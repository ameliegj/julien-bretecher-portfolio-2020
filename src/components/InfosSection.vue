<template>
  <div class="infos-section">
    <div class="container-fluid col-10 col-lg-10 offset-lg-1 intro">
      <div class="infos row justify-content-between">
        <div class="infos-card col-10 col-lg-5">
          <div class="label">in short...</div>
          <p>
            i’m in my 4th year of hétic’s grande école, where i study design,
            webdev, marketing and entrepreneurship.
          </p>
          <!-- <div>
            <a href="" class="tw">• more about me</a>
          </div> -->
        </div>
        <div class="infos-card col-10 col-lg-5">
          <div class="label">what i'm looking for...</div>
          <p>
            creative and exciting projects ! I’m also searching for a 6 months
            internship starting in july 2020, all around the 🌍 !
          </p>
          <div>
            <a href="" class="tw">• download my resume</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfosSection"
};
</script>

<style lang="scss" scoped>
.infos-section {
  margin-bottom: 60px;
  .infos {
    background-color: $main-lighter;
    padding: 30px 10px;
    .infos-card {
      &:first-child {
        margin-bottom: 47px;
      }
      .label {
        color: $main;
      }
      a {
        margin-top: 30px;
        color: $main;
      }
    }
  }
  @include media-breakpoint-up(sm) {
  }
  @include media-breakpoint-up(md) {
    .infos {
    background-color: $main-lighter;
    padding: 60px;
    .infos-card {
      &:first-child {
        margin-bottom: 0px;
      }
      .label {
        color: $main;
      }
      a {
        margin-top: 30px;
        color: $main;
      }
    }
  }
  }
  @include media-breakpoint-up(lg) {
  }
  @include media-breakpoint-up(xl) {
  }
}
</style>
