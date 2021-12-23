const Vue = require("vue/dist/vue.js");

var vue_name = new Vue({
  el: "#city-name",
  data: {
    city_name: null,
  },
  methods: {
    updateData: function (data) {
      this.city_name = data;
    },
  },
});

var vue_condition = new Vue({
  el: "#city-condition",
  data: {
    city_condition: null,
  },
  methods: {
    updateData: function (data) {
      this.city_condition = data;
    },
  },
});

var vue_temp = new Vue({
  el: "#city-temperature",
  data: {
    city_temperature: null,
  },
  methods: {
    updateData: function (data) {
      this.city_temperature = data;
    },
  },
});

module.exports = { vue_name, vue_condition, vue_temp };
