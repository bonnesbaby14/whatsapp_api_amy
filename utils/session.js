
const { Client, LocalAuth } = require('whatsapp-web.js');


module.exports= function(idsession) {

    console.log("creando unanueva session")

   const client = new Client({
        authStrategy: new LocalAuth(
            { 
                clientId: idsession
            }
        )
    });

	
    client.initialize();

return client;
}



