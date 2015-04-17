var findLines = function(folderName){
	var fs = require('fs');
	var filesInFolder = fs.readdirSync(folderName);
	  var linesInFiles =  [];
	  filesInFolder.forEach(function(fileName){
		var fileContent = fs.readFileSync('./files/week1/' + fileName, "utf8");
		var lines = fileContent.split('\n');
			lines.forEach(function(line){	
				linesInFiles.push(line)
				});
			});

console.log(linesInFiles);
return linesInFiles;
}

exports.linesInFilesAsync = function(folderName, callback){
	var linesInFiles = findLines(folderName);
		callback(null, linesInFiles);
	};

exports.linesInFiles = function(folderName){
	var linesInFiles= findLines(folderName);
	console.log(linesInFiles)
	return linesInFiles;
	
	};

