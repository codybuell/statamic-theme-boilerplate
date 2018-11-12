<template>
  <div class="dropdown-wrapper">
    <div role="button" class="dropdown-name" @click="open = !open">
      <slot name="link"></slot>
      <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
    <div class="dropdown-menu-wrapper" v-show="open" @mouseover="cancelAutoClose" @mouseout="autoClose">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      //console.log('NavDropdown: mounted')
    },
    data() {
      return {
        open: false,
        timer: ''
      }
    },
    methods: {
      autoClose() {
        this.timer = setTimeout(() => { this.open = false }, 500);
      },
      cancelAutoClose() {
        clearTimeout(this.timer);
      }
    }
  }
</script>
