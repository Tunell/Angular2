(function(app) {
  app.displayComponent =
    ng.core.Component({
    	selector: 'display',
    	template: '<p>My name is {{myName}}</p><friends></friends>',
		directives: [app.FriendsList]
    })
    .Class({
      constructor: function() {
      	this.myName = "Alice";
      }
    });
})(window.app || (window.app = {}));