(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: ' <input [(ngModel)]="testVal" values="test"><p>testVal={{testVal}},testVal*3={{testValTimethree}}</p>',
		directives: [ng.common.NgModel]
    })
    .Class({
      constructor: function() {
      	this.testVal="3";
      	this.testValTimethree=this.testVal*3;
      }
    });
})(window.app || (window.app = {}));