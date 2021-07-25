const files_m = require("fs")

const file1 = files_m.readFileSync("./data/first.txt","utf-8")
files_m.writeFileSync("./data/resp.txt",`Hello this is the result,${file1}`,{flag:'w'})

const fileRead = files_m.readFile("./data/resp.txt","utf8",(err,result)=> {
    if (err){
        console.log(err);
        return;
    }
    console.log(result)
})
