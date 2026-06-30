# Resumen Segundo Parcial — Tecnologías Disruptivas

> Solo **teoría** (temas vistos después del Primer Parcial). El Cronograma, la Rúbrica y el "Cómo probar/exportar el juego" están en **páginas aparte** (no son teoría).
> Lo del Primer Parcial (affordance, presencia, embodiment, iluminación/baking, optimización, herramientas del SDK de Meta) ya está en el **Resumen Primer Parcial** y no se repite.

## Índice
1. Corporalidad
2. Memoria muscular
3. Reticles
4. Game feeling, feedback y planificación
5. Accesibilidad
6. Físicas y reciclado de objetos
7. Comunicación entre scripts y patrones de programación
8. Realidad Aumentada (AR) con Vuforia
9. SDK para desarrollo (Meta XR, OpenXR, SteamVR)

---

# Corporalidad

Es la **utilización del propio cuerpo como herramienta principal de interacción**. En realidad virtual los jugadores giran la cabeza, estiran los brazos, manipulan objetos y se desplazan físicamente dentro del espacio disponible. El diseño debe contemplar estas **capacidades y limitaciones** (alcance de los brazos, espacio de juego, altura) para que las acciones resulten **naturales**.

## Relación con el embodiment
Está directamente ligada al **embodiment**: la sensación de que el cuerpo virtual te pertenece. Cuando las manos virtuales responden bien a tus movimientos, el cerebro percibe ese cuerpo digital como una **extensión de uno mismo**, y eso es lo que genera inmersión (ver Resumen Primer Parcial).

## El cuerpo como interfaz
En lugar de navegar menús complejos, el jugador debería interactuar **tocando, agarrando o señalando**. Cuanto más natural sea la interacción, **menos esfuerzo mental** requiere y más cómoda es la experiencia (agarrar un objeto con la mano en vez de apretar un botón abstracto). Llevado al extremo, *el cuerpo entero es la UI* (ej. **Lone Echo**, donde te movés literalmente con tus brazos).

## Cómo se ve en la práctica (SDK de Meta)
- **Hand Tracking** → usar las manos reales sin controles, detectando la posición de los dedos.
- **Real/Synthetic Hands** y **Grabbable Item** → manipular objetos con las manos.
- Diseñar el espacio para el **rango físico real**: que no haya que estirarse de forma incómoda ni moverse más de lo que permite el área de juego.

> Si la corporalidad falla (movimientos forzados, escala mal calibrada), no se percibe como un bug: se siente como **incomodidad o mareo**.

# Memoria muscular

A medida que el jugador **repite movimientos**, desarrolla **hábitos motores** que le permiten interactuar de manera más eficiente y casi **automática** (sin pensar en cómo ejecutar la acción). Es el mismo principio por el que, tras repetir un gesto muchas veces, el cuerpo "ya sabe" hacerlo.

## Consecuencia de diseño
Los **tutoriales deben introducir las mecánicas de forma gradual**, permitiendo practicar **acciones básicas antes de enfrentarse a situaciones complejas**. Primero el jugador domina agarrar/soltar; después se le pide encadenar esas acciones en tareas más difíciles.

## Ejemplos
Recargar un arma manualmente, agarrar y colocar piezas, gestos repetidos de corte (**Beat Saber**). Tras varias repeticiones el gesto se vuelve **reflejo** y la experiencia fluye.

> Ligado a la **rúbrica**: se exige un **tutorial o explicación clara** que enseñe las mecánicas — justamente para construir esa memoria muscular de forma progresiva.

# Reticles

El sistema de **interacción visual** proporciona información al usuario mediante indicadores conocidos como **reticles**. Su función principal es **comunicar cuándo una superficie u objetivo es válido** para una acción (y cuándo no): son el feedback visual que le dice al jugador "acá sí podés / acá no".

## Dónde son especialmente importantes
- **Teletransporte:** señalan el destino y si la zona es transitable.
- **Interacción a distancia:** con un rayo (*ray interactor*), el reticle marca a qué objeto estás apuntando.
- **Realidad mixta:** sobre los **planos o mallas** detectados por el dispositivo (mesas, paredes, piso), para anclar contenido en superficies reales válidas.

## Cómo se ve en la práctica (SDK de Meta)
- Componente **Reticle Data Teleport**, con estados **válido / inválido** (visto en el tutorial de teletransportación): el reticle cambia para indicar si el punto al que apuntás es un destino permitido.

> Sin reticles, el jugador tendría que **adivinar** dónde puede actuar — lo que choca con el criterio de no obligar al usuario a adivinar (ver Game feeling / planificación).

# Game feeling, feedback y planificación

**Game feeling:** es la **calidad de las sensaciones** transmitidas durante la interacción. Cada acción debe producir una respuesta **clara y coherente** (animaciones, sonidos, vibraciones/hápticos, cambios visuales, reacciones físicas). Cuanto más **inmediata y consistente**, más satisfactoria. Ejemplo: *Beat Saber* — cada corte confirma al instante. Sin feedback, el mundo se siente muerto.

## Feedback positivo vs. negativo
Hay que tener **más cuidado con el feedback negativo que con el positivo**: en VR el jugador habita el juego con su cuerpo, así que lo desagradable (errores, castigos, movimientos incómodos) se vive de forma **física e intensa** (frustración, incomodidad, mareo) y puede romper la presencia o hacer que se saque el visor. El positivo refuerza; el negativo mal calibrado expulsa.
> **Ojo (criterio del profe):** el uso **único** de sonidos/música NO alcanza como feedback. El jugador puede jugar sin audio, así que el tutorial y las marcas clave deben entenderse igual (refuerzo **visual** además del sonoro).

## Tangibilidad del trabajo
Las acciones deben producir **consecuencias visibles y comprensibles**: el usuario debe percibir que **realmente hizo algo** (armar un mecanismo pieza por pieza, recargar un arma manualmente, colocar objetos en su lugar). Refuerza la inmersión.

## Criterios de planificación VR/AR
- Diseñar para el **sistema sensorial completo**, no solo para los ojos.
- Pensar en un usuario que **“no entiende nada”** y no es de elite (el docente evalúa encarnando a ese usuario).
- El usuario **no debe adivinar** qué botones tocar: indicaciones **completas, concisas y breves** (animación, texto o diálogos).
- **Documento de desarrollo:** detalles técnicos y **justificación** de las decisiones de programación, y explicación de las mecánicas jugables.

# Accesibilidad

Prácticas y decisiones de diseño para que **la mayor cantidad de personas** pueda jugar, sin importar capacidades físicas o sensoriales:
- **Contrastes de color** adecuados.
- **Señalización** en objetos interactuables o estáticos.
- Buen manejo de **textos e imágenes** en el HUD o el mundo, en momentos clave.
- **UI entendible** con manos y con controles.
- **Sonidos** de refuerzo positivo/negativo que guíen (complementando lo visual, nunca solo audio).
- **Controles fluidos, coherentes y entendibles.**
- **Señalización/explicación** de controles y objetivo principal.
- **Iluminación básica** que ayude a leer el espacio.

# Físicas y reciclado de objetos

- Sistemas de físicas **bien optimizados**: reciclado de objetos y correcto manejo de referencias.
- **Uso correcto de los componentes del SDK**: player/character controller y todo lo de física de manos, controles y desplazamientos.
- En objetos agarrables, configurar bien **Rigidbody** (Use Gravity / Is Kinematic), **Grabbable** y **colliders** para evitar comportamientos inesperados (sobre todo al re-agarrar en sistemas de Snap).

# Comunicación entre scripts y patrones de programación

**Comunicación entre scripts:** gran parte se resuelve **sin código** con los **Event Wrappers**: un interactable expone eventos (Select, Hover, Release…) y desde el Inspector se enlazan acciones de otros objetos/scripts (audio, partículas, mover objetos, cargar escenas). *(Detalle: ver Resumen Primer Parcial.)*

## Patrones de programación
La idea es usar **patrones que eviten crear/destruir objetos** en runtime.
- El clave es el **Object Pooling (pool de objetos):** en vez de Instantiate/Destroy constante (caro, genera picos), se **reutiliza** un conjunto de objetos pre-creados, activándolos y desactivándolos según se necesiten.
- Aplica a balas, partículas, enemigos, ítems → menos picos y **FPS más estables**.

# Realidad Aumentada (AR) con Vuforia

Concepto general (el paso a paso práctico no está en la documentación disponible):
- **Vuforia Engine SDK** (Android/PC): **reconocimiento de imágenes y superficies** para anclar contenido 3D en el mundo real (**image targets**, análisis de planos).
- Unity también ofrece su **SDK nativo de AR (AR Foundation)**.
- En el curso se pidió un proyecto AR con Vuforia: **logo 3D del equipo + interfaz que dirija a un enlace** del proyecto.

# SDK para desarrollo (Meta XR, OpenXR, SteamVR)

## SDK de Meta (Meta XR SDK)

El SDK de Meta está diseñado específicamente para los dispositivos de la familia Meta Quest. Su principal ventaja es el acceso directo a las funcionalidades exclusivas del hardware, como el seguimiento de manos, el passthrough para realidad mixta, el seguimiento espacial avanzado, las optimizaciones específicas para Quest y las herramientas de rendimiento desarrolladas por Meta. Esto permite obtener resultados rápidamente y aprovechar al máximo las capacidades de los dispositivos utilizados en el aula.

Otra ventaja importante es la calidad de la documentación y la cantidad de ejemplos disponibles. Debido a que Meta domina actualmente gran parte del mercado de realidad virtual de consumo, existe una gran comunidad de desarrolladores, tutoriales y recursos educativos.

Sin embargo, el principal inconveniente es la dependencia del ecosistema Meta. Muchas funcionalidades avanzadas son propietarias y pueden requerir modificaciones o reemplazos si el proyecto debe migrarse posteriormente a otros visores. Esto puede generar una cierta dependencia tecnológica y reducir la portabilidad del proyecto hacia otras plataformas.

## OpenXR

OpenXR es un estándar abierto desarrollado por el grupo Khronos con el objetivo de unificar el desarrollo de aplicaciones de realidad virtual y realidad aumentada. Su principal ventaja es la interoperabilidad: una aplicación desarrollada correctamente sobre OpenXR puede ejecutarse en dispositivos de distintos fabricantes con mínimos cambios en el código.

Desde una perspectiva académica y profesional, OpenXR representa una solución muy atractiva porque enseña conceptos más generales y menos dependientes de una empresa específica. Los estudiantes aprenden a trabajar sobre estándares de la industria en lugar de herramientas propietarias.

Como desventaja, OpenXR suele ofrecer acceso únicamente a las características estandarizadas entre los distintos fabricantes. Cuando se desea utilizar alguna función muy específica de un visor concreto, normalmente es necesario recurrir a extensiones particulares o complementar el desarrollo con SDKs propios del fabricante. Esto puede aumentar la complejidad del proyecto y la cantidad de trabajo de integración.

## SteamVR SDK

SteamVR fue durante muchos años uno de los pilares del desarrollo de realidad virtual para PC. Su principal fortaleza es la compatibilidad con una gran variedad de visores conectados a computadora, incluyendo dispositivos de Valve, HTC, Meta y otros fabricantes. También ofrece un ecosistema maduro para experiencias de alta fidelidad gráfica gracias al uso de hardware de escritorio.

Otra ventaja importante es la integración con la plataforma Steam, que facilita la distribución y pruebas de aplicaciones destinadas al mercado de PC VR.

No obstante, SteamVR presenta algunas limitaciones en comparación con enfoques más modernos. Actualmente la industria está migrando progresivamente hacia OpenXR como estándar común, por lo que muchas de las funciones que antes eran exclusivas de SteamVR ahora pueden implementarse mediante OpenXR. Además, SteamVR está orientado principalmente al desarrollo para PC y resulta menos adecuado para dispositivos autónomos como Meta Quest cuando se busca una aplicación independiente que funcione sin computadora.

## Comparación general

El SDK de Meta suele ser la mejor opción cuando el objetivo es desarrollar específicamente para Quest 2 o Quest 3 y aprovechar todas sus capacidades. OpenXR es la alternativa más recomendable cuando se busca compatibilidad multiplataforma y una formación alineada con estándares abiertos. SteamVR continúa siendo una herramienta valiosa para experiencias de PC VR, aunque actualmente gran parte de la industria considera a OpenXR como el camino principal para garantizar interoperabilidad y sostenibilidad a largo plazo.
