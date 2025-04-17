const authClient = require("../grpcClient/authclient");

const createUser= async(req, res, next)=>
{
    try{
        const{ username, email, password, DOB}= req.body;

        authClient.CreateUser({username, email, password, DOB}, (err, response)=>
        {
            if(err)
            {
                console.log("The error is: ", err);
                return next(err)
            }
            else
            {
                return res.status(200).json({message:"User created sucessfully",
                    data:response
                })
            }
        })
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports= createUser;