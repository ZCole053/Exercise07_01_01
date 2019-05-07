//env stands for enviroment
const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';


//for debug messages
export const logStars = function(message){
    console.info('**********');
    console.info(message);
    console.info('**********');
};


//grabs port
//send out for development or goes on port 8080
export default {
    port: env.PORT || 8080
};