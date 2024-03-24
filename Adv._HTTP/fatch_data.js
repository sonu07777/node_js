const http = require("http")

const option = {
    hostname:'fakestoreapi.com',
    path:'/products/1',
    method:'GET'
}

const apiReq = http.request(option,(apiRes)=>{
    apiRes.on("data",(data)=>{
        console.log(data.toString());
    })

})
apiReq.on("error",()=>{
    console.log(e);
})
apiReq.end();