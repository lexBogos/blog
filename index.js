const app = require('./app');
const database = require('./database');
const config = require('./config');

database().then(info => {
    global.console.log(`Connected to ${info.host}:${info.port}/${info.name}`)
    app.listen(config.PORT, () => 
    global.console.log(`listening on port ${config.PORT}`)
    );
}).catch(()=>{global.console.error('Unable to connection to database');
    global.process.exit(1);
})

