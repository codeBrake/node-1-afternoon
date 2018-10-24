let messages = [];
let id = 0;

module.exports = {
    create: (request, response) => {
        let {text, time} = request.body;
        messages.push({id, text, time});
        id++;
        response.status(200).send(messages);
    },
    read: (request, response) => {
        response.status(200).send(messages);
    },
    update: (request, response) => {
        let {text} = request.body;
        let updateId = request.params.id;
        let messageIndex  =messages.findIndex(message => message.id == updateId);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        response.status(200).send(messages);
    },
    delete: (request, response) => {
        let deleteID = request.params.id;    
        messageIndex = messages.findIndex( message => message.id == deleteID );
        messages.splice(messageIndex, 1);
        response.status(200).send( messages );
 
    }
};