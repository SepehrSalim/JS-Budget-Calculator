// Module Pattern

// Data Module
var budgetController = (function () {

    var x = 23;
    var add = function (a) {
        return x + a;

    };
    return { // returns an object containing publicTest method and assign the object publicly to budgetController
        publicTest: function (b) { // public method
            return add(b);
        }
    };

})();

// User Interface Module
UIController = (function () {

    // some code

})();


// Application Controller Module
controller = (function (budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function () {
            console.log(z);
        }
    };


})(budgetController, UIController);