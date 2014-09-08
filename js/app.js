(function (){

    var app = angular.module("steve", []);
    app.controller('StoreProducts', function(){
        this.product = product;
    })

    var product = {
        name : "ABC",
        description : "My great product!"
    };

})();