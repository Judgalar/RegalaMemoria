// Convertimos el JSON en un objeto JavaScript, convirtiendo todo a mayúsculas
const diccionario = JSON.parse(`
  [    ["ABURRIDO", "INSÍPIDO", "MONÓTONO", "SOSO", "DESABRIDO"],
    ["ACEPTAR", "ASUMIR", "CONSENTIR", "TOLERAR", "PERMITIR"],
    ["ADIOS", "HASTA LUEGO", "HASTA PRONTO", "NOS VEMOS", "CHAO"],
    ["AFORTUNADO", "BENDITO", "SUERTUDO", "FELIZ", "AGRACIADO"],
    ["AGUA", "LÍQUIDO", "HIDRATA", "H2O", "REFRESCO"],
    ["AIRE", "ATMÓSFERA", "BRISA", "VIENTO", "CORRIENTE"],
    ["ALEGRÍA", "FELICIDAD", "GOZO", "ENTUSIASMO", "JÚBILO"],
    ["ALTO", "ELEVADO", "GRANDE", "SOBRESALIENTE", "ALTIVO"],
    ["AMABLE", "CARIÑOSO", "GENTIL", "AMOROSO", "ATENTO"],
    ["AMIGO", "COMPAÑERO", "COLEGUITA", "ALIADO", "CÓMPLICE"],
    ["AMOR", "AFECTO", "CARIÑO", "SENTIMIENTO", "TERNURA"],
    ["ANTIGUO", "VIEJO", "ARCAICO", "PRIMITIVO", "ANCESTRAL"],
    ["APRENDER", "ESTUDIAR", "EDUCARSE", "INSTRUIRSE", "CULTIVARSE"],
    ["ARMARIO", "ROPERO", "CLÓSET", "GABINETE", "ALACENA"],
    ["ARREGLAR", "ACOMODARSE", "ADAPTARSE", "REPARAR", "COMPOSTURA"],
    ["ARTISTA", "CREADOR", "ARTESANO", "PINTOR", "ESCULTOR"],
    ["ASOMBROSO", "IMPRESIONANTE", "INCREÍBLE", "EXTRAORDINARIO", "ESPECTACULAR"],
    ["ATACAR", "AGREDIR", "ASEDIAR", "ATENTAR", "INVASIONAR"],
    ["ATENCIÓN", "CONCENTRACIÓN", "CUIDADO", "PRECAUCIÓN", "VIGILANCIA"],
    ["AUMENTAR", "INCREMENTAR", "AMPLIAR", "MEJORAR", "INTENSIFICAR"],
    ["AYUDAR", "ASISTIR", "APOYAR", "COLABORAR", "SOCORRER"],
    ["AZUL", "CELESTE", "CIELO", "TURQUESA", "ÍNDIGO"],
    ["BAILAR", "DANZAR", "MOVERSE", "REBOTAR", "BRINCAR"],
    ["BAJO", "CORTO", "PEQUEÑO", "INFERIOR", "CHICO"],
    ["BAÑO", "DUCHA", "LAVADO", "REGADERA", "ASEO"],
    ["BEBÉ", "NIÑO", "INFANTE", "RECIÉN NACIDO", "PEQUEÑÍN"],
    ["BELLÍSIMO", "HERMOSO", "BONITO", "AGRADABLE", "ESPLENDOROSO", "MAJESTUOSO"],
    ["BENEFICIO", "VENTAJA", "UTILIDAD", "GANANCIA", "PROVECHO"],
    ["BIBLIOTECA", "LIBRERÍA", "CENTRO DE DOCUMENTACIÓN", "SALA DE LECTURA", "ARCHIVO"],
    ["BICICLETA", "CICLA", "CICLO", "BICI", "VELO"],
    ["BLANCO", "CLARO", "LIMPIO", "PURO", "INMACULADO"],
    ["BONITO", "HERMOSO", "AGRADABLE", "LINDO", "BELLO"],
    ["BRILLANTE", "RELUCIENTE", "LUCIENTE", "RESPLANDECIENTE", "RADIANTE"],
    ["CABELLO", "PELO", "CABEZA", "MELENA", "CABULLERA"],
    ["CABALLO", "EQUINO", "CORCEL", "ROCÍN", "BESTIA"],
    ["CAJA", "BAÚL", "CONTENEDOR", "ESTUCHE", "RECIPIENTE"],
    ["CALIENTE", "CANDENTE", "ARDIENTE", "FOGOSO", "CALUROSO"],
    ["CAMBIAR", "MODIFICAR", "VARIAR", "TRANSFORMAR", "ALTERAR"],
    ["CAMINAR", "ANDAR", "PASEAR", "DEAMBULAR", "VIAJAR"],
    ["CAMIONETA", "PICK-UP", "FURGONETA", "CAMIÓN", "TRANSPORTE"],
    ["CANSADO", "FATIGADO", "AGOTADO", "EXTENUADO", "RENDIDO"],
    ["CAPTURAR", "ARRESTAR", "DETENER", "APRESAR", "COGER"],
    ["CARA", "ROSTRO", "FACCIÓN", "MIRADA", "EXPRESIÓN"],
    ["CARO", "COSTOSO", "ONEROSO", "EXCESIVO", "DISPENDIOSO"],
    ["CASADO", "MATRIMONIADO", "UNIDO", "ENAMORADO", "COMPROMETIDO"],
    ["CELEBRAR", "FESTEJAR", "CONMEMORAR", "AGASAJAR", "HONRAR"],
    ["CENA", "CENAR", "COMIDA", "CÓMIDA", "ALIMENTO"],
    ["CENTRO", "NÚCLEO", "CORAZÓN", "CONCENTRACIÓN", "FOCO"],
    ["CERRADO", "A CAL Y CANTO", "HERMÉTICO", "OBSTRUIDO", "BLOQUEADO"],
    ["CHICO", "PEQUEÑO", "DIMINUTO", "MENUDO", "MINÚSCULO"]
  ]
`).map(sinonimos => sinonimos.map(palabra => palabra.toUpperCase())); // Usamos el método "map" para convertir cada palabra a mayúsculas

// Obtener la referencia a los elementos HTML
const palabraElement = document.getElementById("palabra");
const formularioElement = document.getElementById("formulario");
const respuestaElement = document.getElementById("respuesta");
const resultadoElement = document.getElementById("resultado");

// Generar una palabra aleatoria del diccionario
let indiceAleatorio = Math.floor(Math.random() * diccionario.length);
let palabraAleatoria = diccionario[indiceAleatorio][0];
palabraElement.innerHTML = `Escribe un sinónimo de: ${palabraAleatoria}`;

// Comprobar si la respuesta es un sinónimo
formularioElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const respuesta = respuestaElement.value.trim().toUpperCase();
  const sinonimos = diccionario[indiceAleatorio].slice(1).map(s => s.toUpperCase());
  if (sinonimos.includes(respuesta)) {
    resultadoElement.innerText = `¡Correcto! "${respuesta}" es un sinónimo de "${palabraAleatoria}".`;
  } else {
    resultadoElement.innerText = `Lo siento, "${respuesta}" no es un sinónimo de "${palabraAleatoria}". Los sinónimos son: ${sinonimos.join(", ")}.`;
  }
  respuestaElement.value = "";
  // Generar una nueva palabra aleatoria del diccionario
  indiceAleatorio = Math.floor(Math.random() * diccionario.length);
  palabraAleatoria = diccionario[indiceAleatorio][0];
  palabraElement.innerHTML = `Escribe un sinónimo de: ${palabraAleatoria}`;
});

