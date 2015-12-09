// TODO: cache ajax responses when possible?

// http://blog.thoughtram.io/angular/2015/07/07/service-vs-factory-once-and-for-all.html
window.jkymarshHoneyBookFETest.service('ContactsService', ['$http', function ($http) {

  return {
    getAllContacts: function() {
      return $http({
        method: 'GET',
        url: 'https://candidate-test.herokuapp.com/contacts'
      });
    }
  }
}]);