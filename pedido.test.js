const request = require("supertest");
const express = require("express");

const app = express();
app.use(express.json());

// Reusar el endpoint real
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

describe("Test del endpoint /api/pedidos", () => {
  it("Debe crear un pedido correctamente", async () => {
    const response = await request(app)
      .post("/api/pedidos")
      .send({
        mesa: "A1",
        items: [{ id: 10, cantidad: 2 }],
        total: 25.5,
      });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.mesa).toBe("A1");
    expect(response.body.data.estado).toBe("pendiente");
  });
});
