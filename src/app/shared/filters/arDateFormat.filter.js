/*
This filter converts the ISO timestamp into an Argentinian date format
*/

(function () {
  angular.module("salesforce").filter("arDateFormat", function () {
    return function (timestamp) {
      let date = new Date(Date.parse(timestamp));
      return [
        pad(date.getDate()),
        pad(date.getMonth() + 1),
        date.getFullYear(),
      ].join("/");
    };

    function pad(value) {
      return value < 10 ? "0" + value : value;
    }
  });
})();
