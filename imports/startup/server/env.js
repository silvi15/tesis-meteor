
export const developmentEnv = () => {
    process.env.MAIL_URL = 'smtp://stroncoso@cnmza.org.ar:.cnmza@smtp.cnmza.org.ar:25';
  };
  
  export const productionEnv = () => {
    process.env.MAIL_URL = 'smtp://stroncoso@cnmza.org.ar:.cnmza@smtp.cnmza.org.ar:587';
  };
