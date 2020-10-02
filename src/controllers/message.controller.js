const Message = require('./../models/message.model');
module.exports.postMessage = async(req,res,next) => {
    try{
        console.log('ok')
        const message = new Message(req.body);
        const newMessage = await message.save();
        if(newMessage) { return res.status(201).send(newMessage);}
        res.status(400).send('Bad request');
    } catch(e){
        console.log(e)
        next(e);}
};
module.exports.getMessage = async(req,res,next) => {
    try{
        const message = await Message.findById(req.params.id);
        if(message) { return res.status(201).send(message);}
        res.status(400).send('Bad request');
    } catch(e){next(e);}
};
module.exports.updateMessage = async(req,res,next) => {
    try{
        const {params: {id}, body} = req;
        const updateMessage = await Message.findByIdAndUpdate(id,body);
        if(updateMessage) { return res.status(201).send(updateMessage);}
        res.status(400).send('Bad request');
    } catch(e){next(e);}
};
module.exports.deleteMessage = async(req,res,next) => {
    try{
        const {params : {id}} = req;
        const deletedMessage = await Message.findByIdAndDelete(id);
        if(deletedMessage) { return res.status(201).send(deletedMessage);}
        res.status(400).send('Bad request');
    } catch(e){next(e);}
};