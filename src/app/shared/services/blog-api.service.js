/*
Rest api implementation
*/

(function () {
  angular.module("salesforce").factory("BlogRestApi", BlogRestApi);

  BlogRestApi.$inject = ["$http", "CONSTANTS"];

  function BlogRestApi($http, CONSTANTS) {
    return {
      getAll: getAll,
      getById: getById,
      create: create,
      update: update,
      deleteAll: deleteAll,
      deletePost: deletePost,
    };

    function getAll() {
      return $http.get(CONSTANTS.apiURL).then(_interceptor);
    }

    function getById(id) {
      return $http.get(CONSTANTS.apiURL + id).then(_interceptor);
    }

    function create(blogPost) {
      return $http.post(CONSTANTS.apiURL, blogPost).then(_interceptor);
    }

    function update(blogPost) {
      return $http
        .post(CONSTANTS.apiURL + blogPost.id, blogPost)
        .then(_interceptor);
    }

    function deleteAll() {
      return $http.delete(CONSTANTS.apiURL).then(_interceptor);
    }

    function deletePost(id) {
      return $http.delete(CONSTANTS.apiURL + id).then(_interceptor);
    }

    //Would've been nice to have a global interceptor
    //but there was some kind of issue I couldn't tackle
    //so for practicity had to opt for this workaround.
    function _interceptor(response) {
      return response.data;
    }
  }
})();
