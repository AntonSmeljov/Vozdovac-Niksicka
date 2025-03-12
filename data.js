var APP_DATA = {
  "scenes": [
    {
      "id": "0-dnevni-borovak",
      "name": "Dnevni borovak",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.1007754524583504,
        "pitch": 0.07765900384190161,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 0.6162490964591267,
          "pitch": 0.027859168875947304,
          "rotation": 0,
          "target": "1-kuhinja"
        },
        {
          "yaw": -1.6085156941815129,
          "pitch": 0.020307608278951506,
          "rotation": 0,
          "target": "3-spavaa-soba"
        },
        {
          "yaw": 2.260795786400207,
          "pitch": 0.01272878729752236,
          "rotation": 0,
          "target": "2-kupatilo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kuhinja",
      "name": "Kuhinja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.127662124943221,
        "pitch": 0.07847826799593705,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 2.7491860578719898,
          "pitch": 0.038906777176283214,
          "rotation": 0,
          "target": "0-dnevni-borovak"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kupatilo",
      "name": "Kupatilo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.48874761255823707,
        "pitch": 0.2650487223766902,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -2.3383104827604626,
          "pitch": 0.01869183237387695,
          "rotation": 0,
          "target": "0-dnevni-borovak"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-spavaa-soba",
      "name": "Spavača soba",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.6418172065193346,
        "pitch": 0.026799947362858845,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -0.7933218277725747,
          "pitch": -0.0015174751191153746,
          "rotation": 0,
          "target": "0-dnevni-borovak"
        },
        {
          "yaw": -2.5544641740420566,
          "pitch": 0.0860017472469714,
          "rotation": 0,
          "target": "4-terasa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-terasa",
      "name": "Terasa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.6130679513864727,
        "pitch": 0.07270401620871603,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -1.7301629647924912,
          "pitch": 0.08398072986193839,
          "rotation": 0,
          "target": "3-spavaa-soba"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Voždovac Nikšička",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
