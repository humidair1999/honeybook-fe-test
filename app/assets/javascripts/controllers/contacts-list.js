// https://docs.angularjs.org/guide/concepts#controller
window.jkymarshHoneyBookFETest.controller('ContactsListCtrl', ['ContactsService', function(ContactsService) {
  var that = this;

  ContactsService.getAllContacts().then(function(response) {
    console.log(response.data);
    that.contacts = response.data;
  });
}]);