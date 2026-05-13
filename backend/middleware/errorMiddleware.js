const notFound = (req,res,next)=>{
    const error = new Error(` not found - ${req.originalUrl}`)
    res.status(404)
    next(error)

}

const errorHandler = (err,req,res,next)=>{
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode  //if you haven't set the status code it sets it here
    let message = err.message // catch the errors you threw in controller ... , 
                              // errors the database throws , notfound error

    if(err.name === 'CastError' && err.kind === 'objectId'){ // mongodb error 
        statusCode = 404
        message = 'resource not found'
    }

    res.status(statusCode).json({
        message,
        stack : process.env.NODE_ENV === 'production' ? null : err.stack 
    })

}

export {notFound , errorHandler}