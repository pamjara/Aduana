(function () {
  'use strict'

  angular
    .module('myAduanas')
    .directive('sideBar', function(){
    return {
      restrict: 'E', 
      //templateUrl:  './includes/sideBar.html',
      template:'<span> Hola mundo</span',
      link:function(scope){
          alert("hola mundo");
      }
    }

    });
 

})();