
// Evented thing (30 mins)

// Define the "EventedThing" class, so that its instances have
// an "on" and a "trigger" method to react to events. For example:
//
// eventedThing.on('meet', function (name) {
//  console.log('Nice to meet you, ' + name + '.');
// });
//
// eventedThing.trigger('meet', 'Sarah');
// -> 'Hi there!' 
// -> 'Nice to meet you, Sarah.'
//
// eventedThing.trigger('whatever');
// -> nothing happens


function EventedThing () {
  var result = {};
  Object.assign(result, eventedMethods);
  return result;
}

var eventedMethods = {
  on: function (type, callback) {
    this.on[type] = function () {
      callback(...arguments);
    };
  },
  trigger: function (type, ...args) {
    if ( this.on.hasOwnProperty(type) ) { this.on[type](...args); } 
  }
};

module.exports = new EventedThing;
