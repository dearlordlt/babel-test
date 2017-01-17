let app = angular.module("app", []).config(() => {

}).controller('ctrl', ['$scope', ($scope) => {
  // Lexical arguments
  function square() {
    let example = () => {
      let numbers = [];
      for (let number of arguments) {
        numbers.push(number * number);
      }

      return numbers;
    };

    return example();
  }

  let a = 10;

  $scope.sq = square(2, 4, 7.5, 8, 11.5, 21, a); // returns: [4, 16, 56.25, 64, 132.25, 441]
}]);

