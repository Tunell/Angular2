(function(app) {
  app.FriendsList =
    ng.core.Component({
      selector: 'friends',
      template: '<ul><li *ngFor="#friend of friends">{{ friend }}</li></ul><p *ngIf="friends.length > 3">You have many friends!</p><input value="Pelle" #friendname (keyup)="doneTyping($event)"><button (click)="addFriend(friendname.value)">Add Friend</button>',
      directives: [ng.common.NgFor, ng.common.NgIf]
    })
    .Class({
      constructor: function() {
        this.friends = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
      },
      doneTyping($event) {
        if($event.which === 13) {
          this.addFriend($event.target.value);
          $event.target.value = null;
        }
      },
      addFriend(friend) {
        this.friends.push(friend);
      }
    });
})(window.app || (window.app = {}));