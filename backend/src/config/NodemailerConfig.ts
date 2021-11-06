export const nodemailerConfig = {
  host: process.env.EMAIL_SERVICE_HOST,
  port: parseInt(process.env.EMAIL_SERVICE_PORT),
  auth: {
    user: process.env.EMAIL_SERVICE_USERNAME,
    pass: process.env.EMAIL_SERVICE_PASSWORD
  }
};
