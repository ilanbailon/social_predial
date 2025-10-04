var derecho_via = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "nombre": "Derecho de vía ejemplo"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [-70.11, -15.51],
          [-70.09, -15.50],
          [-70.08, -15.49]
        ]
      }
    }
  ]
};

if (typeof window !== "undefined") {
  window.derecho_via = derecho_via;
  window.CAPA_DERECHO_VIA = derecho_via;
}
