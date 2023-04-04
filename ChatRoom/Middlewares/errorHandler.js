const globalErrorHandler = (err,req,res,next)=>{
    const errorRes = res.status(err.status || 500);
    switch(true){
        case err.name === "CustomError":
            errorRes.json({
                success: false,
                error: err
            })
            break;
        default:
            errorRes.json({
                status: err.status || 500,
                message: err.message || "something went wrong",
                stack: err.stack
            });
            break;
    }
};

module.exports = globalErrorHandler;