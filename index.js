const express = require("express");
const app = express();
app.use(express.json());

// Endpoint de ejemplo: crear pedido
app.post("/api/pedidos", (req, res) => {
  const pedido = {
    mesa: req.body.mesa,
    items: req.body.items,
    total: req.body.total,
    estado: "pendiente",
  };

  return res.json({
    success: true,
    message: "Pedido creado correctamente",
    data: pedido,
  });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("API SmartDine corriendo en http://localhost:3000");
});
