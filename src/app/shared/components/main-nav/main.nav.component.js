(function () {
  "use strict";

  /**
   * Main navigation
   *
   * @example
   * <main-nav><main-nav/>
   *
   */
  angular.module("salesforce").component("mainNav", {
    templateUrl: "src/app/shared/components/main-nav/main-nav.html",
    controllerAs: "vm",
    controller: MainNavCtrl,
  });

  MainNavCtrl.$inject = ["$scope"];

  /// definition

  function MainNavCtrl($scope) {
    let vm = this;
  }
})();
