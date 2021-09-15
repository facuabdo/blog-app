/*
Reusable component that renders a blog post.
Can be configured to show only part of the post's 
body so that it can opened for further reading
and also to be highlighted
*/

(function () {
  "use strict";

  angular.module("salesforce").component("blogPostItem", {
    templateUrl: "src/app/blog-post/item/blog-post-item.html",
    controllerAs: "vm",
    controller: BlogPostItemCtrl,
    bindings: {
      blogPost: "<",
      showAbstract: "<",
      highlight: "<",
    },
  });

  BlogPostItemCtrl.$inject = ["$state"];

  function BlogPostItemCtrl($state) {
    let vm = this;

    vm.viewPostDetails = viewPostDetails;

    function viewPostDetails(postId) {
      if (vm.showAbstract) $state.go("viewPost", { id: postId });
    }
  }
})();
