
angular.module('app', []);

angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'AngularJS Tutorial Example';
    vm.searchInput = '';
});