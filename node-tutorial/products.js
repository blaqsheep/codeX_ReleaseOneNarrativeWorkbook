var fs = require('fs');

var findProducts = function(fileName){
	
        var productNames = [];
        var productMap = {};
        var soldItemsMap = {};
        var quantitySold = [];

	var fileContent = fs.readFileSync(fileName, "utf8");
	var products = fileContent.split('\n');

	products.forEach(function(product){
                var hold = product.split(',');
                var productName = hold[1];
                if(productMap[productName] === undefined){	                       
                        productNames.push(productName);
                        productMap[productName] = 0;

                }
     });

        console.log(productNames);
        console.log(quantitySold);
        return productNames;

};

var findProductsSold = function(fileName){
        
        var productNames = [];
        var productMap = {};
        var soldItemsMap = {};
        var quantitySold = [];

        var fileContent = fs.readFileSync(fileName, "utf8");
        var products = fileContent.split('\n');

        products.forEach(function(product){
                var hold = product.split(',');
                var productName = hold[1];
                var quantity = hold[2];
                if(productMap[productName] === undefined){                             
                        productNames.push(productName);
                        productMap[productName] = 0;

                }

                var temp = product.split(',');
                var soldItem = temp[1];
                if(soldItemsMap[soldItem] === undefined){
                        quantitySold.push(soldItem);
                        soldItemsMap[soldItem] = 0;
                        var totalItems = parseInt(soldItem, 10)
                }
                //???

                soldItemsMap[soldItem] = soldItemsMap[soldItem] + parseInt(quantity, 10);

        });

        console.log(productNames);
        console.log(soldItemsMap);
        return soldItemsMap;

};

module.exports = function(folderName){
	this.productNames = function(cb){
		var files = findProducts(folderName);
		cb(null, files);
	};

        this.productsSold = function(cb){
                var files = findProductsSold(folderName);
                cb(null, files);
        };

};




