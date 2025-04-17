 const sendOkResponse = ({res,data})=>{
   console.log('data',data)
    return res.send({
        statusCode: 200,
        data,
    })
}
 const sendServerError =({res,err})=>{
    return res.send({
        statusCode:501,
        data:err
    })
}
module.exports = {sendOkResponse,sendServerError}