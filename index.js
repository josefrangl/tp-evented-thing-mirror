
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
    // console.log(this.on);
    this.on[type] = function () {
      callback(...arguments);
    };
  },
  trigger: function (type) {
    let extraArg = [];
    for (let i = 1; i < arguments.length; i++) {
      extraArg.push(arguments[i]);
    }
    if (this.on.hasOwnProperty(type)) { this.on[type](...extraArg); } 
  }
};

// EventedThing.prototype.on = function (name, callback) {
//   this.on[name] = callback(name);
// }
// EventedThing.prototype.trigger = function (type, value) {
//   this.on[type] (value);
// }


module.exports = new EventedThing;
