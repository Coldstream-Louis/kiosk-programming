/*global io */
/*exported sharedVueStuff */
'use strict';

var socket = io();

// Stuff that goes to both the ordering system and the kitchen
var sharedVueStuff = {
  data: {
    orders: {},
    menu: {}
  },
  created: function() {
    socket.on('initialize', function(data) {
      this.orders = data.orders;
      this.menu = data.menu;
    }.bind(this)); //bind tells the function to inherit 'this' from enclosing scope

    socket.on('currentQueue', function(data) {
      this.orders = data;
    }.bind(this));
  },
  methods: {
    getFirstOrder: function(){
      var order="";
      var ID="";
      for (var e in this.orders){
            if(!this.orders[e].done){            
                order = this.orders[e];
                ID = e;
                break;
            }
      }
      return [order, ID];
    },
    getOrderByID: function(ID){
      return this.orders[ID];
    }
  }
};