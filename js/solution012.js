//Is the string uppercase?
//Create a method to see where the string is ALL CAPS.

String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }