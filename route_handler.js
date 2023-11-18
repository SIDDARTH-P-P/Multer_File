
export function data(req,res){
    console.log(req.body);
    console.log(req.file);
    res.redirect(`http://localhost:3000/index.html`)
}