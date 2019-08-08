<template>
  <div class="hello">
    <h1><span>{{ msg }}</span></h1>
    <p>
      A mobile UI toolkit, based on Vue.js 2, designed for financial scenarios.
    </p>
    <br/>
    <md-button type="primary" @click="greet">Click Me</md-button>
  </div>
</template>

<script>
import { Button, Toast } from "mand-mobile";

export default {
  name: "HelloWorld",
  components: {
    "md-button": Button
  },
  props: {
    msg: String
  },
  methods: {
    greet() {
      Toast.info("I'm Batman!");
    }
  }
};
</script>

<style scoped>
.hello {
  text-align: center;
  padding: 20px;
  font-size: 32px;
  color: #666;
  line-height: 56px;
}

.hello h1 {
  color: #333;
  line-height: 1.15;
  font-size: 64px;
  margin-bottom: 32px;
}

.hello h1 span {
  position: relative;
}

.hello h1 span::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 8px;
  width: 100%;
  height: 20px;
  background: #ecf6ff;
}
</style>
