const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AUMfeu6yBSvR0jVTFnMsD15gswFmUVjZ3GN4a4IZM_RsTFMImnhO-Qb3-ndfdkwwnt0bofx9cF1BDseY",
  client_secret: "EFzZYbKEd5nFt0s27--tFqudhH7xAR72AsKfAf-hdG7hCts5-wbILBTCIJuHkcx_j4w25tqIATo-5UaC",
});

module.exports = paypal;
