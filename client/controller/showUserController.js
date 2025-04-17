const authClient = require("../grpcClient/authclient");

const showUser= async(req, resp, next)=>
{
    try{
        authClient.showUser({}, (error, response)=>
        {
            if(error)
            {
                console.log(error);
                return next(error)
            }
            else
            {
                return resp.status(201).json(response);
            }
        })
    }
    catch(err)
    {
        console.log(err);
        return resp.status(500).json({Message:"Internal server error"});
       
    }
}


module.exports= {showUser}