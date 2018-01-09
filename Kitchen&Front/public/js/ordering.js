/*global sharedVueStuff, Vue, socket */
'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getOrderNumber() {
  // It's probably not a good idea to generate a random order number, client-side. 
  // A better idea would be to let the server decide.
  return "#" + getRandomInt(1, 1000000);
}

var myOrders= [
            {
                name: "Apple Juice",
                size: "L",
                account: "3",
                ingredients:[]
            },
            {
                name: "Orange Juice",
                size: "M",
                account: "3",
                ingredients:[]
            }
        ];


new Vue({
  el: '#submit_button',
  mixins: [sharedVueStuff],
  methods: {
    placeOrder: function() {
      // create an array of checked items to order
    // var orderItems = [].filter.call(document.getElementsByName('Burger'), function(i) {
    //   return i.checked;
    // }).map(function(i) {
    //   return i.value;
    // });
    // console.log(orderItems[0]);
    // if(orderItems.length>0){
    socket.emit('order', {orderId: getOrderNumber(), orderItems: myOrders});
    // }
  }
  }
});

new Vue({
    el: '#Orders',
    mixins: [sharedVueStuff],
    methods: {
    }
});
