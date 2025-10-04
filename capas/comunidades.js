var comunidades = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "nombre": "Comunidad ejemplo",
        "tipo": "comunidad"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-70.105, -15.503],
          [-70.098, -15.503],
          [-70.098, -15.497],
          [-70.105, -15.497],
          [-70.105, -15.503]
        ]]
      }
    }
  ]
};

if (typeof window !== "undefined") {
  window.comunidades = comunidades;
  window.CAPA_COMUNIDADES = comunidades;
}
