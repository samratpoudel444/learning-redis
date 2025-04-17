const grpc = require('@grpc/grpc-js');
const protoloader= require('@grpc/proto-loader');
const path = require('path');
const dotenv= require("dotenv").config();

const authPath= path.resolve(__dirname, '../../proto/login.proto');


const packageDefination= protoloader.loadSync(authPath, {
    keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
})


const authProto= grpc.loadPackageDefinition(packageDefination);

const auth= authProto.login.loginService;

const authClient = new auth(
    process.env.ADMIN_HOST_URL || "localhost:50052",
    grpc.credentials.createInsecure()
  );

module.exports= authClient;