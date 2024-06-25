import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import  jwt  from "jsonwebtoken";


const verifyJwt =asyncHandler(async (req,res,next)=>{
    //this middleware is used to fetch the user based on id present in cookies.
    //we can access cookies in req.
    try {
        const token=req.cookies?.refreshToken;
        if(!token)
        {
            throw new ApiError(401,"unathourized request");
        }
        const check=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        if(!check)
        {
            throw new ApiError(401,"Invalid access token");
        }
        const user=await User.findById(check._id).select("-password -refreshToken");
        if(!user)
        {
            throw new ApiError(401,"wrong access token");
        }
        req.user=user;
        next();
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid Token");
    }
});

export {verifyJwt};