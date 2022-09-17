
const { Client, LocalAuth } = require('whatsapp-web.js');


module.exports= function(idsession) {

    console.log("creando unanueva session")

   const client = new Client({
    puppeteer: {
        executablePath: process.env.CHROME_BIN || null,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]},
        authStrategy: new LocalAuth(
            { 
                clientId: idsession
            }
        )
    });

	
    client.initialize();

return client;
}



