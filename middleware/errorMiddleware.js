const grpc= require("@grpc/grpc-js");

const errorMiddleware= async(err, req, resp, next)=>
{
    if(err.code<16)
    {
        console.log(err);
        switch(err.code)
        {
            case grpc.status.CANCELLED:
            return resp.status(409).json({message: err.message || err.details});

            case grpc.status.UNKNOWN:
            return resp.status(500).json({message: err.message || err.details});

            case grpc.status.INVALID_ARGUMENT:
            return resp.status(400).json({message: err.message || err.details });

            case grpc.status.DEADLINE_EXCEEDED:
            return resp.status(504).json({message: err.message || err.details });

            case grpc.status.NOT_FOUND:
            return resp.status(404).json({message: err.message || err.details});

            case grpc.status.ALREADY_EXISTS:
            console.log(err.message);
            return resp.status(409).json({message: err.message || err.details });


           	case grpc.status.PERMISSION_DENIED:
            return resp.status(403).json({message: err.message || err.details});

            case grpc.status.RESOURCE_EXHAUSTED:
            return resp.status(429).json({message: err.message || err.details});

            case grpc.status.FAILED_PRECONDITION:
            return resp.status(400).json({mesasge: err.message || err.details}); 

            case grpc.status.ABORTED:
            return resp.status(409).json({mesasge: err.message || err.details}); 

            case grpc.status.OUT_OF_RANGE:
            return resp.status(400).json({mesasge: err.message || err.details}); 

            case grpc.status.UNIMPLEMENTED:
            return resp.status(501).json({mesasge: err.message || err.details}); 

            case grpc.status.INTERNAL:
            return resp.status(500).json({mesasge: err.message || err.details}); 

            case grpc.status.UNAVAILABLE:
            return resp.status(503).json({mesasge: err.message || err.details}); 

            case grpc.status.DATA_LOSS:
            return resp.status(500).json({mesasge: err.message || err.details}); 

            case grpc.status.UNAUTHENTICATED:
            return resp.status(401).json({mesasge: err.message || err.details}); 

        }

    }

    else
    {
        const status= err.code || 500;
        const message= err.message ||"Internal server error";
        const extraDetails= err.extraDetails || "Internal server error"; 

        return response.status(status).json({message, extraDetails});
    }
}

module.exports= {errorMiddleware};