class HomeController{
    async index(req,res){
        res.send(" <body style='display: flex;justify-content: center;'><div style='text-align: center;'><h1>Welcome API Express Model </h1> <br> <pre>by Gustavo j. Silva</pre> </div></body>");
    }
}

module.exports = new HomeController();