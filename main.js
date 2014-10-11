angular.module('planM3', [])
.service('findRoom', function() {
    this.q = {name:'', re:'', '-1':true, '0':true, '1':true, '2':true, '3':true, maxFloor:3};
    this.resetFloors = function() {
      var qnl = this.q.name.length;
      this.q.maxFloor = qnl?-2:3;
      for(var i=-1;i<=3;i++)
        this.q[i] = !qnl;
      this.q.re = new RegExp(this.q.name.replace(/ /g,".*"),"i");
    }
    this.addFloor = function(f) {
      this.q[f] = true;
      if (f > this.q.maxFloor)
        this.q.maxFloor = f;
    }
})
.controller('mainCtrl', function($scope,findRoom){
  $scope.search = findRoom.q;
  $scope.$watch('search.name',findRoom.resetFloors.bind(findRoom));
})
.directive('roomName', function(findRoom){
  return {
    restrict: 'A',
    scope: {
      roomName: '@',
      roomFloor: '@'
    },
    link: function(scope, element, attrs) {
      scope.search = findRoom.q;
      function isOk(newVal) {
        // if no search string
        if(!scope.search.name.length) {
          element.removeClass("isok");
          element.removeClass("isnotok");
          return;
        }
        // search
        // var re = new RegExp(scope.search.name.replace(/ /g,".*"),"i");
        if(scope.roomName.match(scope.search.re)){
          findRoom.addFloor(scope.roomFloor);
          element.addClass("isok");
          element.removeClass("isnotok");
        }
        else {
          element.removeClass("isok");
          element.addClass("isnotok");
        }
      };

      scope.$watch('search.name',isOk);
    }
  };
}); // end directive
