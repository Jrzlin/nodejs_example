//function route(handle, pathname, response, postData){
function route(handle, pathname, response, request){
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function'){
        handle[pathname](response, request);
    }else{
        console.log("NO request handler for " + pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("404 not found.");
        response.end();
    }
}

exports.route = route;
