// import { asyncHandler } from "../utils/asyncHandler.js";
// const registerUser=asyncHandler(async(req,res)=>{
//     res.status(200).json({
//         message:'ok'
//     })
// })

// export {registerUser}

// user.controller.js

export const registerUser = (req, res) => {
    res.status(201).json({ message: 'User signed up successfully' });
};

// export const login = (req, res) => {
//     res.status(200).json({ message: 'User logged in successfully' });
// };
