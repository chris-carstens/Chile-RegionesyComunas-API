# API para obtener las regiones y comunas de Chile

La ruta base es: https://chile-regiones-api.herokuapp.com/api

## GET /regions

- Entrega la lista de todas las regiones (16), sin sus comunas.

```
[
    {
        "name": "Arica y Parinacota",
        "romanNumber": "XV",
        "number": 15,
        "abbreviation": "AP"
    },
    {
        "name": "Tarapacá",
        "romanNumber": "I",
        "number": 1,
        "abbreviation": "TA"
    },
    {
        "name": "Antofagasta",
        "romanNumber": "II",
        "number": 2,
        "abbreviation": "AN"
    },
    {
        "name": "Atacama",
        "romanNumber": "III",
        "number": 3,
        "abbreviation": "AT"
    },
    {
        "name": "Coquimbo",
        "romanNumber": "IV",
        "number": 4,
        "abbreviation": "CO"
    },
    {
        "name": "Valparaíso",
        "romanNumber": "V",
        "number": 5,
        "abbreviation": "VA"
    },
    {
        "name": "Metropolitana de Santiago",
        "romanNumber": "XIII",
        "number": 13,
        "abbreviation": "RM"
    },
    {
        "name": "Libertador Gral. Bernardo O’Higgins",
        "romanNumber": "VI",
        "number": 6,
        "abbreviation": "LI"
    },
    {
        "name": "Maule",
        "romanNumber": "VII",
        "number": 7,
        "abbreviation": "ML"
    },
    {
        "name": "Ñuble",
        "romanNumber": "XVI",
        "number": 16,
        "abbreviation": "NB"
    },
    {
        "name": "Biobío",
        "romanNumber": "VIII",
        "number": 8,
        "abbreviation": "BI"
    },
    {
        "name": "Araucanía",
        "romanNumber": "IX",
        "number": 9,
        "abbreviation": "AR"
    },
    {
        "name": "Los Ríos",
        "romanNumber": "XIV",
        "number": 14,
        "abbreviation": "LR"
    },
    {
        "name": "Los Lagos",
        "romanNumber": "X",
        "number": 10,
        "abbreviation": "LL"
    },
    {
        "name": "Aisén del Gral. Carlos Ibáñez del Campo",
        "romanNumber": "XI",
        "number": 11,
        "abbreviation": "AI"
    },
    {
        "name": "Magallanes y de la Antártica Chilena",
        "romanNumber": "XII",
        "number": 12,
        "abbreviation": "MA"
    }
]
```

## GET /regions-communes

- Entrega la lista de todas las regiones (16) con sus comunas (a modo de referencia, se muestran solo las primeras dos en el ejemplo).

```
[
    {
        "name": "Arica y Parinacota",
        "romanNumber": "XV",
        "number": 15,
        "abbreviation": "AP",
        "communes": [
            {
                "name": "Arica"
            },
            {
                "name": "Camarones"
            },
            {
                "name": "General Lagos"
            },
            {
                "name": "Putre"
            }
        ]
    },
    {
        "name": "Tarapacá",
        "romanNumber": "I",
        "number": 1,
        "abbreviation": "TA",
        "communes": [
            {
                "name": "Alto Hospicio"
            },
            {
                "name": "Camiña"
            },
            {
                "name": "Colchane"
            },
            {
                "name": "Huara"
            },
            {
                "name": "Iquique"
            },
            {
                "name": "Pica"
            },
            {
                "name": "Pozo Almonte"
            }
        ]
    }
]
```

## GET /regions/{region_id}

- Entrega una región junto a todas sus comunas.

```
{
    "name": "Tarapacá",
    "romanNumber": "I",
    "number": 1,
    "abbreviation": "TA",
    "communes": [
        {
            "name": "Alto Hospicio"
        },
        {
            "name": "Camiña"
        },
        {
            "name": "Colchane"
        },
        {
            "name": "Huara"
        },
        {
            "name": "Iquique"
        },
        {
            "name": "Pica"
        },
        {
            "name": "Pozo Almonte"
        }
    ]
}
```

Información de regiones y comunas obtenida de: https://gist.github.com/sergiohidalgo/1ac66c5e3edc051b10a5ecc070084a85
