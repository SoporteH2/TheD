const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/process-payment', (req, res) => {
    const { name, cardNumber, expiryDate, cvv } = req.body;

    // Aquí es donde se integraría la API del procesador de pagos, como Stripe o PayPal
    console.log('Datos recibidos:', { name, cardNumber, expiryDate, cvv });

    // Simulación de respuesta
    res.json({ message: 'Pago procesado con éxito' });
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
