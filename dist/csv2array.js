const app = {};

app.file = ( options = { seperator : ',' , file : null } , callback)=> {

    let fileUpload = options.file;
    let extension = fileUpload.value.split('.').pop();

    if(options.file == null ){
        throw "please select file";
    }

    if (extension.toLowerCase() === 'csv') {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                var string  = e.target.result;
                app.string({string: string , seperator: options.seperator}, results=> {
                    callback(results);
                })
            }
            reader.readAsText(fileUpload.files[0]);
        } else {
            throw "This browser does not support HTML5.";
        }
    } else {
        throw "Please upload a valid CSV file.";
    }

}


app.string = (options = {string: null , seperator : ',' } , callback ) => {

    if(!options.string) {
        callback([]);
        return;
    }
    let results = [];
    try {
    var rows    = options.string.split('\n');
    let columns = rows[0].split(options.seperator);
    
    for(let i=1; i< rows.length ;i++) {
        let data    = rows[i].split(options.seperator)
        let tmp     = {};
        data.forEach((val,key) => {
            tmp[columns[key].trim()] = val.trim();
        })
        results.push(tmp);
    }
    }
    catch(error) {
        if(error) {
            throw `seperator (${options.seperator}) Not Found in the file`;
        }
    }

    callback(results);
}

app.url =  ( options = {url: null , seperator : ',' }, callback ) => {
    if(!options.url) {
        callback([]);
        return;
    }
    fetch(options.url)
    .then(response => response.text())
    .then(string => {
        app.string({string: string , seperator: options.seperator}, results=> {
            callback(results);
        })
    });
} 

module.exports = app;