const  http = require('http');
const path = require('path')
const fs = require('fs')

    
http.createServer((req, res) => {
   // console.log('REQUESTED URL: '+req.url);
    //let generatedFilePath, contentType;
    //if(req.url === '/'){
        generatedFilePath = req.url === '/' ? path.join(__dirname, 'fktest.html') : path.join(__dirname, req.url);
        contentType = req.url === '/' ? 'text/html' : getContentType(req.url)
    //}else if(req.url === '/react'){
        //generatedFilePath = req.url === '/react' ? path.join(__dirname, 'build', 'index.html') : path.join(__dirname, 'build',req.url)
        //contentType = req.url === '/react' ? 'text/html' : getContentType(req.url)
    //}
    
    fs.readFile(generatedFilePath, (err, data) => {
        if (err) throw err;
        res.writeHead(200, {'content-type': `${contentType}`});
        res.end(data, 'utf8')
    })

}).listen(5000, () => console.log('server started'))

function getContentType(requrl){
    var extname = path.extname(requrl);
    console.log('requested ext name: '+extname)
    switch(extname){
        case '.css':
            return 'text/css';
        
        case '.js':
            return 'text/javascript';
    }
}