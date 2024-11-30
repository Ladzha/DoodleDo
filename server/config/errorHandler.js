const errorHandler = (response, status, message)=>{
    response.status(status).json({message: message});
}

export default errorHandler