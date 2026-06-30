// ── DATA ──────────────────────────────────────────────────────────────────────

const ZONES=[
{id:'fundamentos',name:'Fundamentos VR',icon:'🥽',color:'#1F66F2',desc:'Presencia, embodiment, affordance, mareo y UI diegética/espacial',qs:[
 {tag:'Affordance',title:'Affordance',
  body:`Es la capacidad de un objeto de <strong>comunicar visualmente cómo debe usarse</strong>. Una palanca invita a accionarse, un botón a presionarse. En VR es crítico porque no hay teclado ni mouse: el usuario entiende qué hacer solo con lo que ve. Concepto de <strong>Don Norman</strong>. Un buen affordance reduce la fricción cognitiva — el jugador no tiene que pensar, actúa.`,
  ej:`Una manija sobresalida "pide" ser agarrada; una superficie plana "pide" ser empujada. Si un objeto agarrable no se ve agarrable, el usuario nunca lo intenta.`,
  q:'¿Qué es el affordance?',
  mc:['Capacidad de un objeto de comunicar visualmente cómo debe usarse','Sensación de que el cuerpo virtual responde como propio (embodiment)','Coherencia del entorno que hace sentir al usuario "ahí" (presencia)','Disposición de la UI a distancia cómoda y legible'],correct:0,
  why:'Affordance (Don Norman) = el objeto comunica visualmente su uso. Clave en VR porque no hay periféricos: el usuario actúa por lo que ve.'},
 {tag:'Presencia',title:'Presencia',
  body:`Es la sensación de <strong>"estar ahí"</strong>. No depende de gráficos hiperrealistas sino de <strong>coherencia</strong>: buena escala, sonido consistente, física creíble. Un error chico —atravesar una pared— se siente enorme y rompe la ilusión. La presencia es frágil: se construye con muchos detalles coherentes y se destruye con uno solo incoherente.`,
  q:'¿Qué es la presencia en VR?',
  mc:['Resolución y realismo fotorrealista del entorno renderizado','Sincronía perfecta entre el movimiento de la cabeza y el sonido espacial','Sensación de "estar ahí" gracias a la coherencia del entorno','Ausencia total de latencia entre el casco y el render'],correct:2,
  why:'La presencia es sentir que "estás ahí", y nace de la coherencia (escala, sonido, física), no de los gráficos.'},
 {tag:'Embodiment',title:'Embodiment',
  body:`Es la sensación de que <strong>el cuerpo virtual pertenece al usuario</strong>. Las manos deben responder a los movimientos sin delay raro. Si el jugador siente que "maneja un personaje" en vez de ser él, se perdió el embodiment. <strong>Lone Echo</strong> lo logra: te movés literalmente con tus brazos.`,
  q:'¿Qué describe mejor el embodiment?',
  mc:['Que el objeto comunica visualmente cómo debe usarse (affordance)','Que el cuerpo virtual se siente como propio del usuario','Que la repetición de gestos los vuelve reflejos (memoria muscular)','Que el cuerpo real se usa como interfaz principal (corporalidad)'],correct:1,
  why:'Embodiment = sentir que el cuerpo virtual es tuyo. Se rompe si hay delay o si sentís que manejás un personaje externo.'},
 {tag:'Encadenamiento',title:'Cómo se encadenan affordance → presencia → embodiment',
  body:`Es un <strong>efecto dominó</strong>: el affordance correcto → el jugador entiende sin pensar → mejora la interacción → refuerza la presencia → aparece el embodiment. El jugador deja de analizar y empieza a <em>habitar</em> el mundo.`,
  q:'¿Cuál es el orden correcto del "efecto dominó"?',
  mc:['Presencia → embodiment → affordance','Affordance → embodiment → presencia','Affordance → presencia → embodiment','Embodiment → affordance → presencia'],correct:2,
  why:'El affordance habilita la interacción fluida, esa coherencia genera presencia, y de la presencia sostenida surge el embodiment.'},
 {tag:'UI diegética',title:'UI diegética',
  body:`Es la UI integrada <strong>dentro del mundo del juego</strong> (un reloj, el arma, el entorno) en vez de un HUD flotante. Reduce la fricción cognitiva: cuanto menos tengas que "interpretar", más fluido se siente. <strong>Half-Life: Alyx</strong> casi no tiene HUD y siempre sabés lo que pasa. Es el estándar en VR porque un HUD pegado a la cara rompe la inmersión y cansa la vista.`,
  ej:`En vez de una barra de vida flotante, un reloj en la muñeca o luces en el traje. La info vive en el mundo, no encima de él.`,
  q:'¿Por qué la UI diegética es el estándar en VR?',
  mc:['Porque integra la info en el mundo y reduce la fricción cognitiva','Porque libera memoria al no renderizar un HUD aparte','Porque permite textos de mayor resolución que un HUD 2D','Porque un HUD fijo a la cámara mejora la legibilidad a distancia'],correct:0,
  why:'La UI diegética vive dentro del mundo (reloj, arma) y evita el HUD flotante que rompe inmersión y fatiga la vista.'},
 {tag:'Escala',title:'Por qué la escala es crítica',
  body:`Si una puerta es demasiado chica o un objeto parece de juguete, <strong>el cerebro lo detecta al instante</strong> y se rompe la inmersión. VR es implacable con esto: la incoherencia de escala genera incomodidad difícil de explicar pero muy fácil de sentir. Diseñar a escala real (1 unidad = 1 metro) y testear con el visor puesto es obligatorio.`,
  q:'¿Qué pasa si la escala de un objeto está mal en VR?',
  mc:['Solo se nota si el jugador compara el objeto con una referencia real','El cerebro lo detecta al instante y se rompe la inmersión','Afecta el rendimiento pero no la sensación de presencia','Aumenta la sensación de profundidad estereoscópica'],correct:1,
  why:'En VR el cerebro detecta la incoherencia de escala al instante: genera incomodidad y rompe la presencia.'},
 {tag:'Mareo / confort',title:'Mareo (motion sickness) y cómo se mitiga',
  body:`Aparece cuando <strong>lo que ves no coincide con lo que siente tu cuerpo</strong> (conflicto sensoriomotor). Mitigación: <strong>teletransporte</strong>, <strong>snap turning</strong> (giro por pasos), <strong>viñeta</strong> al moverse, y siempre dar al jugador <strong>control de su cámara</strong>. Mantener <strong>72–90 FPS estables</strong> es la base: cualquier caída de frames se siente como malestar físico.`,
  q:'¿Qué genera el mareo en VR y cómo se mitiga?',
  mc:['Conflicto entre lo que ves y lo que siente tu cuerpo (sensoriomotor); con teletransporte, snap turning y viñeta','Caída de FPS por debajo de 72–90 Hz; se evita subiendo la resolución del render','Movimiento continuo con joystick; se elimina ampliando el campo de visión (FOV)','Latencia del hand tracking; se mitiga desactivando las sombras dinámicas'],correct:0,
  why:'Mareo = conflicto sensoriomotor (ves movimiento que tu cuerpo no siente). Se mitiga con teletransporte/snap turning/viñeta y 72–90 FPS estables.'},
 {tag:'UI espacial',title:'UI espacial',
  body:`Es ubicar los elementos de UI en el espacio 3D de forma coherente: a <strong>distancia cómoda</strong>, tamaño legible, sin forzar el cuello. Tipografías simples, buen contraste y tamaños generosos son obligatorios. En VR leer mal no es una molestia: es <strong>fatiga física</strong>.`,
  q:'¿Qué caracteriza a una buena UI espacial en VR?',
  mc:['Texto pequeño y discreto para no tapar la escena','Distancia cómoda, buen contraste y tamaños legibles sin forzar el cuello','Ubicada siempre pegada a la cámara para que acompañe la mirada','Máximo detalle gráfico y tipografías decorativas'],correct:1,
  why:'La UI espacial va a distancia cómoda, legible y sin forzar el cuello: leer mal en VR es fatiga física, no solo molestia.'}
]},
{id:'corporalidad',name:'Corporalidad y Memoria Muscular',icon:'🤲',color:'#2FB57A',desc:'El cuerpo como interfaz principal y la automatización por repetición',qs:[
 {tag:'Corporalidad',title:'Corporalidad',
  body:`Es la <strong>utilización del propio cuerpo como herramienta principal de interacción</strong>. En VR los jugadores giran la cabeza, estiran los brazos, manipulan objetos y se desplazan físicamente. El diseño debe contemplar capacidades y limitaciones reales: alcance de los brazos, espacio disponible, fatiga.`,
  q:'¿Qué es la corporalidad en VR?',
  mc:['Sensación de que el cuerpo virtual pertenece al usuario (embodiment)','Utilización del propio cuerpo como herramienta principal de interacción','Automatización de los movimientos por repetición (memoria muscular)','Conjunto de consecuencias visibles que produce cada acción (tangibilidad)'],correct:1,
  why:'Corporalidad = usar el cuerpo real como interfaz principal. Hay que diseñar contemplando alcance, espacio y fatiga.'},
 {tag:'Corporalidad vs Embodiment',title:'Corporalidad vs Embodiment',
  body:`<strong>Corporalidad</strong>: usar el cuerpo como interfaz (diseño de las acciones físicas). <strong>Embodiment</strong>: sentir que el cuerpo virtual es propio (sensación de pertenencia). La corporalidad bien diseñada <em>genera</em> embodiment.`,
  q:'¿Cuál es la diferencia entre corporalidad y embodiment?',
  mc:['Embodiment = usar el cuerpo como interfaz; corporalidad = sentir el cuerpo virtual como propio','Corporalidad = usar el cuerpo como interfaz; embodiment = sentir el cuerpo virtual como propio','Corporalidad es la versión física; embodiment es la versión sonora del cuerpo','Son equivalentes: ambos describen sentir el cuerpo virtual como propio'],correct:1,
  why:'Corporalidad = el diseño de las acciones físicas (interfaz cuerpo). Embodiment = la sensación de pertenencia. La primera genera la segunda.'},
 {tag:'Memoria muscular',title:'Memoria muscular',
  body:`A medida que el jugador <strong>repite movimientos</strong>, desarrolla hábitos motores que le permiten interactuar de forma más eficiente y casi <strong>automática</strong>, sin pensar en cómo ejecutar la acción. Es el mismo principio que aprender a escribir en teclado o recargar un arma.`,
  q:'¿Qué es la memoria muscular en VR?',
  mc:['Sensación de que el cuerpo virtual pertenece al usuario (embodiment)','Diseño de las acciones físicas que ejecuta el jugador (corporalidad)','Automatización de movimientos por repetición hasta hacerlos reflejos','Calidad de las sensaciones transmitidas durante la interacción (game feeling)'],correct:2,
  why:'Memoria muscular = repetir un movimiento hasta volverlo reflejo y automático (como recargar un arma o escribir).'},
 {tag:'Tutoriales',title:'Tutoriales y memoria muscular',
  body:`Se diseñan introduciendo mecánicas de forma <strong>gradual</strong>: primero el jugador domina agarrar/soltar, luego encadena esas acciones en tareas más complejas. Tras repeticiones el gesto se vuelve <strong>reflejo</strong>. Ejemplos: recargar un arma, los gestos de corte en <strong>Beat Saber</strong>.`,
  q:'¿Cómo deben diseñarse los tutoriales para aprovechar la memoria muscular?',
  mc:['Presentando todas las mecánicas juntas al inicio para no interrumpir después','Introduciendo mecánicas de forma gradual hasta que el gesto se vuelve reflejo','Explicando cada mecánica con paneles de texto antes de jugar','Dejando que el jugador descubra solo cada mecánica sin guía'],correct:1,
  why:'Tutoriales graduales: primero lo básico, después se encadena. La repetición convierte el gesto en reflejo.'},
 {tag:'Falla de corporalidad',title:'Qué pasa si la corporalidad falla',
  body:`No se percibe como un bug técnico: se siente como <strong>incomodidad o mareo</strong>. Si los movimientos son forzados o la escala está mal calibrada, el cerebro rechaza la experiencia físicamente.`,
  q:'Si la corporalidad está mal diseñada, ¿cómo lo percibe el jugador?',
  mc:['Como un error de software visible (un objeto que no responde)','Como incomodidad o mareo físico, no como un bug','Como una caída de FPS o un tirón en la imagen','No lo percibe a menos que sea programador'],correct:1,
  why:'Una corporalidad fallida no se lee como bug: se siente como incomodidad/mareo. El cuerpo rechaza la experiencia.'}
]},
{id:'interacciones',name:'Interacciones Meta SDK',icon:'🤜',color:'#E8822E',desc:'Interactor/Interactable, Grab, Snap completo, Event Wrappers completos, poses y gizmos',qs:[
 {tag:'Interactor / Interactable',title:'Interactor vs Interactable',
  body:`<strong>Interactor</strong>: el elemento que <em>realiza</em> la acción (mano, control, rayo). <strong>Interactable</strong>: el objeto que <em>recibe</em> la acción (objeto agarrable, botón, zona de snap). Son los dos lados de cada interacción en el SDK de Meta: por cada agarre hay un interactor que agarra y un interactable que es agarrado.`,
  q:'¿Qué diferencia hay entre un Interactor y un Interactable?',
  mc:['Interactor: realiza la acción (mano/control). Interactable: recibe la acción (objeto)','Interactor: el objeto que recibe la acción. Interactable: la mano que la realiza','Interactor: el componente visual. Interactable: el componente de física','Interactor: el evento de agarre. Interactable: el evento de soltado'],correct:0,
  why:'Interactor = quien actúa (mano/control/rayo). Interactable = quien recibe (objeto/botón/snap). Dos lados de cada interacción.'},
 {tag:'Grab Wizard',title:'Grab Wizard (Add Grab Interaction)',
  body:`Es la ventana que se abre con clic derecho sobre un objeto → <code>Interaction SDK &gt; Add Grab Interaction</code>. Define el tipo de interactor (manos/controles/ambos), el tipo de gesto y si genera collider. Tiene un botón <strong>Fix</strong> para agregar el <strong>Rigidbody</strong> si falta. Clic en <strong>Create</strong> → agrega todos los componentes automáticamente (Grabbable, Hand Grab Interactable, etc.).`,
  q:'¿Qué hace el botón "Fix" del Grab Wizard?',
  mc:['Crea automáticamente la pose de la mano sobre el objeto','Agrega los componentes faltantes (como el Rigidbody) antes de crear la interacción','Corrige los errores de compilación del script de agarre','Genera el collider de la zona de agarre con la forma del mesh'],correct:1,
  why:'El Grab Wizard configura el agarre; Fix agrega lo que falte (p. ej. Rigidbody) y Create inserta todos los componentes.'},
 {tag:'Snap',title:'Snap Interaction (completo)',
  body:`El <strong>Positional Snap</strong> coloca un objeto en una <strong>ubicación predefinida</strong> de forma precisa, y puede hacer que <strong>regrese</strong> a una posición por defecto al terminar la interacción (rompecabezas, ensamblaje, inventarios). Tiene dos piezas:<br>
  • <strong>Snap Interactor</strong> (en el objeto que se mueve): se referencia el <strong>Pointable Element</strong> (el Grabbable / ISDK Hand Grab Interaction) y el <strong>Rigidbody</strong>.<br>
  • <strong>Snap Interactable</strong> (el destino donde encaja): lleva un <strong>Collider</strong> (caja/esfera/cápsula) que define la <strong>zona de activación</strong>, un <strong>Rigidbody</strong> y el componente Snap Interactable.<br>
  <strong>Fix de físicas (bug del orbitado):</strong> en el Collider del Snap Interactor activar <strong>Is Trigger</strong>; en el Rigidbody del Snap Interactable <strong>desactivar Use Gravity</strong> y <strong>activar Is Kinematic</strong>.<br>
  <strong>Options del Snap Interactor:</strong> <strong>Snap Pose Transform</strong> (pivote del objeto al encajar), <strong>Default Interactable</strong> (snap inicial donde arranca), <strong>Time Out Interactable</strong> (snap al que regresa solo) y <strong>Time Out</strong> (segundos para volver, ej. 3).<br>
  <strong>Filtros por Tags:</strong> en los Snaps se agrega <strong>Tag Set</strong> con etiquetas; en el interactor un <strong>Tag Set Filter</strong> con <strong>Required Tags</strong> y <strong>Excluded Tags</strong> para limitar con qué Snaps puede encajar.`,
  ej:`Un cubo verde transparente marca la zona; con un Interactable Unity Event Wrapper, al hacer Snap (When Select) se oculta el visual y al sacarlo (When Unselect) reaparece.`,
  q:'En el bug del Snap (el objeto orbita al reagarrarlo), ¿cuál es la solución?',
  mc:['Is Kinematic en el Rigidbody del Snap Interactor + Use Gravity off en el del Interactable','Is Trigger en el Collider del Snap Interactor + Is Kinematic (y Use Gravity off) en el Rigidbody del Snap Interactable','Activar Is Trigger en ambos colliders (interactor e interactable)','Desactivar el Collider del Snap Interactable mientras el objeto está encajado'],correct:1,
  why:'Is Trigger en el collider del interactor (detecta sin física) + Is Kinematic y Use Gravity off en el rigidbody del interactable (no pelea con la física).'},
 {tag:'Pointable Event Wrapper',title:'Pointable Unity Event Wrapper',
  body:`Expone los eventos del <strong>Grabbable (Interactable)</strong> en el Inspector: <code>When Select</code> (agarrar), <code>When Release</code> (soltar), <code>When Hover</code>, <code>When Unhover</code>, <code>When Move</code>. Se referencia el Grabbable y desde ahí se conectan acciones <strong>sin código</strong> (audio, partículas, etc.).`,
  q:'¿Para qué sirve el Pointable Unity Event Wrapper?',
  mc:['Expone los eventos del Grabbable (objeto) en el Inspector: When Select, When Release, When Hover...','Expone los eventos del interactor (mano/control) en el Inspector','Configura la pose de agarre del Hand Grab Interactable','Agrega y referencia automáticamente el Rigidbody del objeto'],correct:0,
  why:'Expone los eventos del objeto agarrable (Select/Release/Hover...) en el Inspector para enlazar acciones sin escribir código.'},
 {tag:'Interactable vs Interactor wrapper',title:'¿Qué wrapper para feedback al agarrar un objeto?',
  body:`El <strong>Interactable</strong> (o Pointable) wrapper responde a eventos del <em>objeto</em> (Grabbable). El <strong>Interactor</strong> wrapper responde a eventos de <em>la mano/control</em>. Para feedback al agarrar un objeto específico → siempre el <strong>Pointable Unity Event Wrapper referenciando el Grabbable</strong>. El error típico es poner un Interactor wrapper en el objeto y que "no pase nada".`,
  q:'¿Qué wrapper usás para reproducir un sonido al agarrar un objeto específico?',
  mc:['Pointable Unity Event Wrapper referenciando el Grabbable del objeto','Interactor Unity Event Wrapper colocado sobre la mano que agarra','Hand Grab Interactable Event Wrapper en el rig de la cámara','Snap Unity Event Wrapper referenciando el Grabbable'],correct:0,
  why:'Feedback en el objeto → Pointable/Interactable wrapper referenciando el Grabbable. El Interactor wrapper responde a la mano, no al objeto.'},
 {tag:'Hand Grab Pose',title:'HandGrabPose y Fingers Freedom',
  body:`<strong>HandGrabPose</strong>: objeto hijo del Hand Grab Interactable que define la pose de agarre (posición y rotación de la mano + configuración de cada dedo). <strong>Fingers Freedom</strong>: el estado de cada dedo: <strong>Locked</strong> (fijo en la pose), <strong>Constrained</strong> (rango restringido) o <strong>Free</strong> (sin restricción).`,
  q:'En Fingers Freedom, ¿qué significa "Locked"?',
  mc:['El dedo queda fijo en la pose definida','El dedo sigue libremente el hand tracking real (Free)','El dedo se mueve dentro de un rango limitado (Constrained)','El dedo se excluye del cálculo de la pose'],correct:0,
  why:'Fingers Freedom por dedo: Locked (fijo), Constrained (rango limitado), Free (libre). La pose vive en un HandGrabPose hijo.'},
 {tag:'Gizmos',title:'OnDrawGizmos() y color',
  body:`<strong>OnDrawGizmos()</strong> es un callback de MonoBehaviour que Unity ejecuta <em>solo en el editor</em> (no en runtime). Para cambiar el color: <code>Gizmos.color = Color.red;</code> antes del draw call. Conviene envolverlo en <code>#if UNITY_EDITOR / #endif</code> para que no se incluya en el build. Patrón de <em>CustomerSeatPoint.cs</em>: rojo si ocupado, verde si libre.`,
  q:'¿Cuándo se ejecuta OnDrawGizmos() y cómo se cambia el color?',
  mc:['En el editor y en el build; con Gizmos.color antes del draw call','Solo en el editor; con Gizmos.color antes del draw call','Solo en runtime durante el juego; con un material emisivo','Cuando se llama manualmente desde un botón del Inspector'],correct:1,
  why:'OnDrawGizmos() corre solo en el editor (debug visual). Gizmos.color define el color; envolver en #if UNITY_EDITOR para no compilarlo en build.'},
 {tag:'Event Wrappers (todos)',title:'Event Wrappers: tipos y eventos completos',
  body:`Los <strong>Event Wrappers</strong> exponen eventos de una interacción en el Inspector para enlazar acciones <strong>sin código</strong> (sonidos, animaciones, partículas, variables, cargar escenas, etc.).<br>
  <strong>Tipos:</strong><br>
  • <strong>Pointable Unity Event Wrapper</strong>: eventos del objeto interactable a través del <em>Grabbable</em> (el más usado para feedback en objetos agarrables).<br>
  • <strong>Interactable Unity Event Wrapper</strong>: variante que se referencia a un interactable específico (p. ej. el Snap Interactable, un botón).<br>
  • <strong>Interactor Unity Event Wrapper</strong>: responde a eventos de la <em>mano/control</em> (el interactor), no del objeto.<br>
  <strong>Eventos disponibles:</strong> <code>When Select</code> (agarrar), <code>When Unselect</code> (des-seleccionar), <code>When Release</code> (soltar), <code>When Hover</code> (pasar por encima), <code>When Unhover</code> (salir), <code>When Move</code> (mover) y <code>When Cancel</code> (cancelar).`,
  ej:`Sonido al agarrar: Pointable wrapper → referenciar Grabbable → When Select → AudioSource.Play(). Al soltar, lo mismo con When Release. Mostrar/ocultar un visual de Snap: Interactable wrapper → When Select/When Unselect → SetActive.`,
  q:'¿Cuál de estos NO es un evento de un Event Wrapper del SDK de Meta?',
  mc:['When Unhover','When Cancel','When Compile','When Move'],correct:2,
  why:'Eventos reales: When Select, Unselect, Release, Hover, Unhover, Move, Cancel. "When Compile" no existe. Tipos: Pointable, Interactable e Interactor wrapper.'},
 {tag:'Hand Grab Interactable',title:'Parámetros del Hand Grab Interactable',
  body:`Sus parámetros clave: <strong>Max Interactors / Max Selecting Interactors</strong>, referencia al <strong>Grabbable</strong> y al <strong>Rigidbody</strong>, <strong>Grab Type</strong> (Pinch / Palm / ambos), <strong>Finger Rules</strong> (Ignored / Optional / Required por dedo) y <strong>Select Mode</strong> (All Released / Any Released).`,
  q:'¿Qué define el "Grab Type" de un Hand Grab Interactable?',
  mc:['Cuántos interactores pueden agarrar el objeto a la vez (Max Interactors)','Si el agarre es por Pinch (pellizco), Palm (palma) o ambos','Qué dedos son requeridos u opcionales en el agarre (Finger Rules)','Cuándo se libera el objeto: al soltar todos o cualquier dedo (Select Mode)'],correct:1,
  why:'Grab Type = tipo de agarre (Pinch/Palm/ambos). Otros parámetros: Max Interactors, Finger Rules por dedo y Select Mode.'}
,
 {tag:'Teleport Interactor vs Interactable',title:'Teleport Interactor vs Teleport Interactable',
  body:`Aplica la regla de oro <strong>Interactor = la herramienta · Interactable = lo que la recibe</strong>.<br><strong>Teleport Interactable</strong>: la <strong>zona de destino</strong> donde el jugador puede aterrizar — un plano, un <strong>NavMesh Surface</strong> o un <strong>Collider</strong> en el piso. Es lo que preparás en el escenario para marcar dónde es válido teletransportarse.<br><strong>Teleport Interactor</strong>: el <strong>actor</strong> (tu mano/joystick) que <strong>dispara el rayo</strong>, calcula si el punto apuntado es válido o inválido y le ordena al controlador de locomoción mover tu cuerpo allí. Suele venir ya colocado dentro del prefab de interacción del jugador.`,
  q:'En el sistema de teleport, ¿qué diferencia al Teleport Interactor del Teleport Interactable?',
  mc:['El Interactable es la zona/superficie de destino (NavMesh o collider); el Interactor es el actor (rayo del joystick/mano) que apunta, valida y ordena el movimiento','El Interactor es la zona de aterrizaje y el Interactable es el rayo que la apunta','Ambos son zonas de destino: el Interactor para NavMesh y el Interactable para colliders','El Interactor define el color del rayo y el Interactable la velocidad del salto'],correct:0,
  why:'Interactable = el piso/zona de destino (NavMesh o collider). Interactor = el actor en tu mano/joystick que dispara el rayo, valida el punto y manda mover el cuerpo.'},
 {tag:'Locomoción',title:'¿Qué es la locomoción?',
  body:`Es el término de diseño que engloba <strong>todos los sistemas y mecánicas que permiten al jugador desplazarse</strong> por el entorno virtual. Es crítico porque si la cámara se mueve de una forma que el cuerpo no siente, aparece el <strong>conflicto sensoriomotor</strong> y el jugador se marea. Por eso administra alternativas pensadas para el confort: <strong>teletransporte</strong>, <strong>snap turn</strong> (giro por pasos) y <strong>slide</strong> (desplazamiento continuo, normalmente con viñeta). Técnicamente controla la <strong>cápsula física</strong> del jugador para que no atraviese paredes.`,
  q:'¿Qué es la locomoción en VR?',
  mc:['El conjunto de sistemas y mecánicas que permiten al jugador desplazarse por el entorno evitando el mareo (teleport, snap turn, slide)','El sistema que renderiza las manos y los modelos de los joysticks','La técnica de agarrar objetos a distancia con un rayo (distance grab)','El componente que sincroniza el audio espacial con el giro de la cabeza'],correct:0,
  why:'Locomoción = todo lo que permite desplazarse por el mundo sin generar conflicto sensoriomotor (mareo); administra teleport, snap turn y slide sobre la cápsula física del jugador.'}]},
{id:'iluminacion',name:'Iluminación y Optimización',icon:'💡',color:'#EBD23C',desc:'Draw calls, batching, lightmaps, UV2, shadow maps, LOD, pooling, overdraw',qs:[
 {tag:'Draw call',title:'Draw call',
  body:`Una <strong>orden de la CPU a la GPU</strong> para dibujar un lote de geometría. Cada una tiene costo de CPU; demasiadas se vuelven un cuello de botella. En VR/mobile reducir draw calls es crítico para mantener FPS estables.`,
  q:'¿Qué es una draw call?',
  mc:['Una orden de la CPU a la GPU para dibujar un lote de geometría','Una textura que almacena la iluminación pre-calculada de la escena','El agrupamiento de objetos con el mismo material en una sola llamada','Cada píxel que la GPU vuelve a pintar por transparencias'],correct:0,
  why:'Draw call = orden CPU→GPU para dibujar geometría. Muchas draw calls saturan la CPU; en VR/mobile hay que reducirlas.'},
 {tag:'Batching',title:'Batching (Static / Dynamic / GPU Instancing)',
  body:`<strong>Agrupar objetos con el mismo material en una sola draw call</strong> para reducir el overhead. Variantes en Unity: <strong>Static Batching</strong> (objetos marcados como Static), <strong>Dynamic Batching</strong> (objetos pequeños dinámicos) y <strong>GPU Instancing</strong> (muchas instancias del mismo mesh/material).`,
  q:'¿Qué es el batching y qué variantes hay?',
  mc:['Reutilizar objetos pre-creados activándolos y desactivándolos (pooling)','Agrupar objetos con el mismo material en una draw call; Static, Dynamic y GPU Instancing','Renderizar versiones con menos polígonos según la distancia (LOD)','Comprimir las texturas a un atlas para ahorrar memoria de video'],correct:1,
  why:'Batching = agrupar objetos del mismo material en una draw call. Variantes: Static, Dynamic y GPU Instancing.'},
 {tag:'Lightmap',title:'Lightmap',
  body:`Una <strong>textura que almacena iluminación pre-calculada</strong> (luces y sombras) de la escena. Se aplica sobre superficies <strong>estáticas</strong> usando el canal <strong>UV2</strong>. No se actualiza en runtime → muy barata de ejecutar. Ideal para VR/mobile.`,
  q:'¿Qué es un lightmap?',
  mc:['Una textura con la profundidad de la escena vista desde la luz (shadow map)','Una textura con iluminación pre-calculada aplicada a superficies estáticas vía UV2','Puntos que capturan luz bakeada para los objetos dinámicos (light probes)','Un mapa que define el relieve de la superficie sin geometría extra (normales)'],correct:1,
  why:'Lightmap = textura de iluminación pre-calculada sobre estáticos (canal UV2). No se recalcula en runtime: barata, ideal para VR.'},
 {tag:'UV2 sin overlaps',title:'Por qué UV2 no puede tener overlaps',
  body:`El lightmap guarda la iluminación de cada punto de superficie <strong>de forma única</strong>. Si dos caras comparten espacio UV, la luz de una se pisa con la de la otra → iluminación incorrecta. Cada cara necesita su <strong>propio espacio sin solapamiento</strong> en el canal UV2.`,
  q:'¿Por qué el UV2 no puede tener overlaps?',
  mc:['Porque los overlaps duplican el consumo de memoria del lightmap','Porque cada cara necesita espacio único o la luz de una pisa a la otra','Porque sin separación se rompe el batching estático de la malla','Porque el UV2 se usa también para mapear la textura de color'],correct:1,
  why:'El lightmap guarda luz por punto único: si dos caras comparten UV2, una pisa a la otra y la iluminación queda mal.'},
 {tag:'Light Probes',title:'Light Probes',
  body:`<strong>Puntos que capturan iluminación bakeada en distintas posiciones del espacio.</strong> Sirven para iluminar <em>objetos dinámicos</em> (que no reciben lightmap) con la luz pre-calculada, interpolando entre los probes cercanos. Son baratos: solo leen valores ya horneados, sin recalcular cada frame.`,
  q:'¿Qué son los Light Probes?',
  mc:['Luces puntuales en tiempo real ubicadas por la escena','Puntos que capturan luz bakeada para iluminar objetos dinámicos interpolando entre probes','Texturas de iluminación aplicadas a las superficies estáticas (lightmaps)','Sombras suaves calculadas por frame para objetos en movimiento'],correct:1,
  why:'Light Probes = puntos con luz bakeada que iluminan objetos dinámicos interpolando entre los probes cercanos. Baratos.'},
 {tag:'Shadow map',title:'Shadow map',
  body:`Textura que guarda la <strong>profundidad de la escena vista desde la luz</strong>. Comparando esa profundidad se decide qué puntos quedan en sombra. Es el método estándar de sombras realtime. En VR/mobile las sombras dinámicas son lo más caro: generan un shadow map <strong>por frame por cada luz</strong>.`,
  q:'¿Qué es un shadow map?',
  mc:['Una textura con la profundidad vista desde la luz, para decidir las sombras','Una textura de iluminación bakeada sobre las superficies estáticas','Un mapa que guarda el relieve fino de la superficie (normales)','Una agrupación de luces para reducir las draw calls'],correct:0,
  why:'Shadow map = profundidad de la escena desde la luz para decidir sombras. Caro en VR: uno por frame por cada luz.'},
 {tag:'Object Pooling',title:'Object Pooling',
  body:`Patrón que <strong>reutiliza un conjunto de objetos pre-creados</strong> activándolos/desactivándolos en vez de hacer Instantiate/Destroy en runtime. Instantiate/Destroy genera picos de CPU y dispara el Garbage Collector. Con pooling: FPS más estables. Aplica a balas, partículas, enemigos, ítems.`,
  q:'¿Qué hace el Object Pooling y por qué conviene?',
  mc:['Agrupa objetos del mismo material en una sola draw call (batching)','Carga los objetos pesados en un hilo de fondo para no frenar el frame','Reutiliza objetos pre-creados (activar/desactivar) en vez de Instantiate/Destroy, evitando picos de CPU y GC','Comparte una única instancia de mesh entre muchos objetos (instancing)'],correct:2,
  why:'Object Pooling reutiliza objetos pre-creados en vez de crear/destruir, evitando picos de CPU y del Garbage Collector.'},
 {tag:'Realtime vs Baked',title:'Iluminación realtime vs baked',
  body:`<strong>Realtime</strong>: calculada en cada frame, responde a cambios, pero es cara. <strong>Baked</strong>: pre-calculada una sola vez, guardada en lightmaps, no se actualiza pero es muy barata. En VR siempre preferir <strong>baked</strong> para objetos estáticos.`,
  q:'Para objetos estáticos en VR, ¿qué tipo de iluminación conviene?',
  mc:['Realtime, porque responde a los cambios de la escena en cada frame','Baked, porque es pre-calculada y muy barata','Realtime con Light Probes para abaratar el cálculo por frame','Mixta, recalculando las sombras de los estáticos cada frame'],correct:1,
  why:'Estáticos en VR → baked: se pre-calcula una vez y es muy barata. Realtime se recalcula cada frame y es cara.'},
 {tag:'LOD',title:'LOD (Level of Detail)',
  body:`Sistema con <strong>versiones del mismo objeto en diferentes cantidades de polígonos según la distancia</strong>. Cerca → modelo detallado. Lejos → modelo simplificado. En Unity: componente <strong>LOD Group</strong>. El jugador no nota el detalle lejano, pero la GPU lo pagaría sin LOD.`,
  q:'¿Qué es el LOD (Level of Detail)?',
  mc:['Versiones del mismo objeto con distintos polígonos según la distancia al jugador','Un sistema que ajusta la iluminación según la distancia a la luz','La carga progresiva de texturas según el nivel de mip seleccionado','El descarte de objetos que quedan fuera del campo de visión (culling)'],correct:0,
  why:'LOD = versiones con más/menos polígonos según distancia (LOD Group). Cerca detallado, lejos simplificado.'},
 {tag:'Overdraw',title:'Por qué las transparencias generan overdraw',
  body:`Los objetos transparentes <strong>no descartan los píxeles de atrás</strong>: se dibujan encima de otros y el mismo píxel se pinta varias veces (<strong>overdraw</strong>). Consume fillrate, especialmente crítico en VR/mobile donde el fillrate es limitado.`,
  q:'¿Por qué las transparencias generan overdraw?',
  mc:['Porque obligan a recalcular el lightmap de lo que está detrás','Porque no descartan los píxeles de atrás y el mismo píxel se pinta varias veces','Porque cada capa transparente genera una draw call adicional de CPU','Porque rompen el batching y duplican la geometría en memoria'],correct:1,
  why:'Transparencias no descartan lo de atrás: el píxel se pinta varias veces (overdraw), gastando fillrate, escaso en VR/mobile.'}
]},
{id:'gamefeel',name:'Game Feeling y Feedback',icon:'🎮',color:'#D43C9E',desc:'Game feeling, feedback +/−, reticles, tangibilidad y planificación VR',qs:[
 {tag:'Game Feeling',title:'Game Feeling',
  body:`La <strong>calidad de las sensaciones transmitidas durante la interacción</strong>. Cada acción debe producir respuesta clara y coherente: animaciones, sonidos, vibraciones (hápticos), cambios visuales o reacciones físicas. Cuanto más <strong>inmediata y consistente</strong>, más satisfactoria.`,
  q:'¿Qué es el Game Feeling?',
  mc:['El conjunto de consecuencias visibles que produce cada acción (tangibilidad)','El grado de dificultad ajustado al nivel del jugador','La calidad de las sensaciones transmitidas durante la interacción','La estabilidad de los FPS por encima de 90 Hz'],correct:2,
  why:'Game Feeling = calidad de las sensaciones al interactuar. Respuesta clara, inmediata y coherente (audio, hápticos, visual).'},
 {tag:'Feedback negativo',title:'Cuidado con el feedback negativo',
  body:`En VR el jugador <strong>habita el juego con su cuerpo</strong>, así que lo negativo (errores, castigos) se vive de forma <strong>física e intensa</strong>: frustración, incomodidad, mareo. Mal calibrado puede <strong>romper la presencia</strong> o hacer que el jugador quiera sacarse el visor. Por eso hay que dosificarlo más que en una pantalla plana.`,
  q:'¿Por qué hay que tener más cuidado con el feedback negativo en VR?',
  mc:['Porque el jugador habita el juego con su cuerpo y lo negativo se vive físico e intenso','Porque los efectos negativos consumen más GPU que los positivos','Porque el jugador presta más atención a los castigos que a las recompensas','Porque el audio negativo rompe el sonido espacial de la escena'],correct:0,
  why:'En VR el cuerpo habita el juego: lo negativo se vive físico e intenso y puede romper la presencia. Hay que dosificarlo.'},
 {tag:'Audio no alcanza',title:'Por qué el feedback solo de audio no alcanza',
  body:`El jugador puede jugar sin sonido. <strong>Las señales deben entenderse también de forma visual.</strong> El tutorial y las marcas clave deben funcionar aunque el audio esté apagado. Es un criterio explícito del profe.`,
  q:'¿Por qué el feedback solo de audio no alcanza?',
  mc:['Porque el audio espacial consume demasiada CPU en standalone','Porque el jugador puede jugar sin sonido: las señales deben entenderse también visualmente','Porque la latencia del audio rompe la sincronía con la imagen','Porque el audio 3D todavía no está soportado en los visores Quest'],correct:1,
  why:'El jugador puede tener el sonido apagado: el feedback debe funcionar también de forma visual (criterio del profe).'},
 {tag:'Tangibilidad',title:'Tangibilidad del Trabajo',
  body:`Las acciones deben producir <strong>consecuencias visibles y comprensibles</strong>: el usuario debe percibir que realmente hizo algo y que su esfuerzo tuvo impacto. Ejemplos: armar un mecanismo pieza por pieza, recargar un arma manualmente, colocar objetos en posiciones específicas.`,
  q:'¿Qué es la Tangibilidad del Trabajo?',
  mc:['Que la calidad de las sensaciones al interactuar sea inmediata (game feeling)','Que las acciones produzcan consecuencias visibles y comprensibles, con impacto percibido','Que la escena tenga simulación física en la mayor cantidad de objetos','Que el usuario manipule objetos físicos reales además del visor'],correct:1,
  why:'Tangibilidad = las acciones producen consecuencias visibles; el usuario siente que hizo algo y tuvo impacto.'},
 {tag:'Simuladores',title:'Por qué los simuladores cumplen la tangibilidad',
  body:`Porque <strong>replican tareas reales paso a paso</strong> con acciones físicas concretas y un resultado observable y verificable. El usuario ejecuta el procedimiento real con su cuerpo y ve el efecto directo de cada acción.`,
  q:'¿Por qué los simuladores cumplen siempre la tangibilidad del trabajo?',
  mc:['Porque limitan al jugador a un único camino sin posibilidad de error','Porque replican tareas reales paso a paso con resultado observable','Porque priorizan el realismo gráfico de las herramientas','Porque eliminan la UI y dejan solo la interacción física'],correct:1,
  why:'Los simuladores replican tareas reales paso a paso con resultado observable: cada acción física tiene efecto directo.'},
 {tag:'Reticles',title:'Reticles',
  body:`<strong>Indicadores visuales que comunican cuándo una superficie u objetivo es válido para una acción.</strong> Importantes en: teletransporte (destino válido/inválido), interacción a distancia (objeto al que apuntás) y realidad mixta (planos detectados para anclar contenido). Componente: <strong>Reticle Data Teleport</strong>.`,
  q:'¿Para qué sirven los Reticles?',
  mc:['Para representar las manos virtuales del jugador en la escena','Para comunicar visualmente si una superficie/objetivo es válido para una acción','Para marcar el punto exacto donde mira el usuario (eye gaze)','Para mostrar el rayo del control independientemente de la validez'],correct:1,
  why:'Reticles = indicadores visuales de validez (destino de teletransporte, objeto apuntado, plano de AR). Ej: Reticle Data Teleport.'},
 {tag:'Planificación',title:'Criterios de planificación del profe',
  body:`1. Diseñar para el <strong>sistema sensorial completo</strong>, no solo los ojos. 2. Pensar en un usuario que "no entiende nada" (el profe evalúa siendo ese usuario). 3. El usuario <strong>no debe adivinar</strong>: indicaciones completas, concisas y breves. 4. Documento de desarrollo con justificación técnica.`,
  q:'¿Cuál es uno de los criterios de planificación que exige el profe?',
  mc:['Maximizar la cantidad de mecánicas para enriquecer la experiencia','Diseñar para el sistema sensorial completo y que el usuario no tenga que adivinar','Priorizar la fidelidad gráfica como criterio principal de calidad','Usar siempre el Meta XR SDK por sus herramientas de rendimiento'],correct:1,
  why:'Criterios: diseñar para todos los sentidos, pensar en un usuario que no entiende nada, que no adivine, y documentar con justificación técnica.'}
,
 {tag:'Hand Grab Glow',title:'Hand Grab Glow: brillo y color de la mano',
  body:`Para que la mano <strong>brille o tenga contorno</strong> (y cambie de color, p. ej. al acercarse a un objeto agarrable) se usa el componente <strong>Hand Grab Glow</strong>, que vive <strong>dentro del Hand Grab Interactor</strong> de la mano sintética, en la sección <strong>Visual</strong> — <em>no</em> en el OVR Controller (ese solo rastrea el joystick físico). Al lado está el Hand Grab Visual (poses). Para funcionar, el Glow necesita referenciar el modelo de la mano (Hand Mesh / Hand Renderer y su material). Permite elegir <strong>Glow</strong> (ilumina toda la mano) u <strong>Outline</strong> (contorno) y su color — un recurso de Game Feeling.`,
  q:'¿Dónde se configura el brillo/contorno de la mano para cambiarle el color?',
  mc:['En el componente Hand Grab Glow, dentro del Hand Grab Interactor de la mano sintética (sección Visual)','En el OVR Controller, que maneja las visuals de los joysticks','En el Locomotion Controller Group, junto a las reglas de movimiento','En el Snap Interactable de la zona de encaje'],correct:0,
  why:'El color/brillo de la mano se configura en el Hand Grab Glow, dentro del Hand Grab Interactor (sección Visual) de la mano sintética — no en el OVR Controller.'}]},
{id:'sdk',name:'Comparativa SDK',icon:'⚖️',color:'#7A33B5',desc:'Meta XR SDK vs OpenXR vs SteamVR',qs:[
 {tag:'Meta XR — ventaja',title:'Ventaja del Meta XR SDK',
  body:`Acceso directo a las <strong>funcionalidades exclusivas del hardware Meta Quest</strong>: seguimiento de manos, passthrough para realidad mixta, tracking espacial avanzado, optimizaciones específicas y herramientas de rendimiento de Meta. También tiene excelente documentación y gran comunidad.`,
  q:'¿Cuál es la ventaja principal del Meta XR SDK?',
  mc:['Acceso directo a funcionalidades exclusivas del hardware Meta Quest','Compatibilidad nativa con visores de todos los fabricantes','Ser un estándar abierto mantenido por el grupo Khronos','La menor curva de aprendizaje entre todos los SDK de VR'],correct:0,
  why:'Meta XR SDK da acceso directo al hardware Quest (hand tracking, passthrough, tracking avanzado) + buena documentación.'},
 {tag:'Meta XR — desventaja',title:'Desventaja del Meta XR SDK',
  body:`<strong>Dependencia del ecosistema Meta</strong>. Muchas funcionalidades avanzadas son propietarias y requieren modificaciones si el proyecto se migra a otros visores. Reduce la <strong>portabilidad</strong> a otras plataformas.`,
  q:'¿Cuál es la desventaja principal del Meta XR SDK?',
  mc:['No ofrece acceso al hand tracking ni al passthrough','Requiere una suscripción de pago para publicar','Dependencia del ecosistema Meta: reduce la portabilidad a otras plataformas','Carece de documentación y de comunidad de soporte'],correct:2,
  why:'Su gran desventaja es la dependencia del ecosistema Meta: funciones propietarias que reducen la portabilidad.'},
 {tag:'OpenXR',title:'Qué es OpenXR',
  body:`Un <strong>estándar abierto</strong> desarrollado por el <strong>grupo Khronos</strong> para unificar el desarrollo de VR/AR. Una aplicación bien construida sobre OpenXR puede ejecutarse en dispositivos de distintos fabricantes con mínimos cambios de código (<strong>interoperabilidad</strong>).`,
  q:'¿Qué es OpenXR?',
  mc:['Un SDK propietario de Meta optimizado para Quest','Un estándar abierto del grupo Khronos para VR/AR multiplataforma','Una capa de SteamVR para distribuir juegos en su tienda','Un emulador para desarrollar y probar sin un headset físico'],correct:1,
  why:'OpenXR = estándar abierto de Khronos para VR/AR; permite correr en distintos fabricantes con mínimos cambios (interoperabilidad).'},
 {tag:'OpenXR — ventaja',title:'Ventaja académica y profesional de OpenXR',
  body:`Enseña conceptos <strong>más generales y menos dependientes de una empresa</strong>. Los estudiantes aprenden estándares de la industria. Es la opción más recomendable para <strong>compatibilidad multiplataforma</strong> y sostenibilidad a largo plazo.`,
  q:'¿Qué ventaja académica/profesional tiene OpenXR?',
  mc:['Da acceso directo a las funciones exclusivas de cada visor','Enseña estándares de la industria, multiplataforma y sostenibles a largo plazo','Ofrece el mejor rendimiento posible en el hardware de Meta','Incluye assets y plantillas listas para entregar más rápido'],correct:1,
  why:'OpenXR enseña estándares de la industria (no atados a una empresa): multiplataforma y sostenible a largo plazo.'},
 {tag:'OpenXR — desventaja',title:'Desventaja de OpenXR',
  body:`Solo ofrece acceso a las <strong>características estandarizadas</strong> entre fabricantes. Para funciones muy específicas de un visor concreto hay que recurrir a extensiones particulares o complementar con SDKs propietarios, aumentando la complejidad.`,
  q:'¿Cuál es la desventaja de OpenXR?',
  mc:['No permite ejecutar la misma app en varios fabricantes','Solo da acceso a lo estandarizado; las funciones exclusivas de un visor requieren extensiones o SDKs propietarios','Obliga a pagar una licencia por cada dispositivo soportado','No funciona con las versiones recientes de Unity'],correct:1,
  why:'OpenXR solo cubre lo estandarizado: para funciones exclusivas de un visor hay que usar extensiones o SDKs propietarios.'},
 {tag:'SteamVR',title:'Cuándo sigue siendo relevante SteamVR',
  body:`Para <strong>experiencias de PC VR</strong> de alta fidelidad y compatibilidad con múltiples visores de PC, y para distribución en <strong>Steam</strong>. Sin embargo, la industria migra progresivamente a <strong>OpenXR</strong> como estándar, y SteamVR es menos adecuado para dispositivos autónomos como el Quest.`,
  q:'¿Cuándo sigue siendo relevante SteamVR?',
  mc:['Para dispositivos autónomos como el Quest sin PC','Para PC VR de alta fidelidad y distribución en Steam','Para experiencias de realidad aumentada en celulares','Para máxima portabilidad multiplataforma a largo plazo'],correct:1,
  why:'SteamVR sirve para PC VR de alta fidelidad y distribución en Steam; no es ideal para standalone como el Quest.'},
 {tag:'Resumen',title:'Cuándo usar cada SDK',
  body:`<strong>Meta XR SDK</strong>: objetivo Quest 2/3 específico, aprovechar capacidades exclusivas del hardware. <strong>OpenXR</strong>: compatibilidad multiplataforma, formación en estándares abiertos, proyecto a largo plazo. <strong>SteamVR</strong>: PC VR con múltiples headsets y distribución Steam. La industria actual apunta a OpenXR.`,
  q:'¿Qué SDK conviene si querés máxima portabilidad y estándares abiertos?',
  mc:['Meta XR SDK','OpenXR','SteamVR','Vuforia'],correct:1,
  why:'Portabilidad + estándares abiertos → OpenXR. Meta XR para Quest específico; SteamVR para PC VR.'},
 {tag:'Caso multiplataforma',title:'SDK para Quest 3 + HTC Vive + PSVR',
  body:`Para un proyecto que debe correr en varios visores de distintos fabricantes conviene <strong>OpenXR</strong>, el estándar diseñado exactamente para interoperabilidad. Meta XR SDK o SteamVR atarían el proyecto a un ecosistema particular.`,
  q:'Un proyecto debe correr en Quest 3, HTC Vive y PSVR. ¿Qué SDK conviene?',
  mc:['Meta XR SDK, agregando capas de abstracción por visor','SteamVR con un plugin externo para el Quest y el PSVR','OpenXR, diseñado para interoperabilidad entre dispositivos','Vuforia, que abstrae el hardware de cada fabricante'],correct:2,
  why:'Varios fabricantes → OpenXR, hecho para interoperabilidad. Los demás atan el proyecto a un ecosistema.'}
]},
{id:'interfaces',name:'Interfaces UI en VR',icon:'🖥️',color:'#2FB57A',desc:'Canvas World Space, Add Ray/Poke, wizard del SDK, reticle y layout',qs:[
 {tag:'Canvas World Space',title:'Por qué el Canvas va en World Space',
  body:`En VR no hay "pantalla 2D" fija: el Canvas debe existir <strong>dentro del mundo 3D</strong> para ser visible desde la cámara del headset y para que los rayos del SDK puedan detectarlo. En modo Screen Space no funciona con las interacciones de Meta.`,
  q:'¿Por qué el Canvas debe estar en World Space en VR?',
  mc:['Para que se vea desde la cámara del headset y los rayos del SDK lo detecten','Para renderizar la UI a mayor resolución que en Screen Space','Porque Screen Space consume más memoria en standalone','Para que la UI quede siempre fija frente a la cámara del jugador'],correct:0,
  why:'En VR el Canvas va en World Space para ser visible desde el headset y detectable por los rayos del SDK. Screen Space no funciona con Meta.'},
 {tag:'Add Ray Interaction',title:'Add Ray Interaction sobre un Canvas',
  body:`Clic derecho en el Canvas → <code>Interaction SDK &gt; Add Ray Interaction</code>. Abre una ventana con botones <strong>Fix</strong>: 1) convierte el Canvas a World Space, 2) agrega el módulo de interacciones a la escena, 3) crea un Game Object con todos los componentes para interactuar con ese Canvas desde lejos con el rayo del control. Luego <strong>Create</strong>.`,
  q:'¿Qué hace "Add Ray Interaction" sobre un Canvas?',
  mc:['Habilita la interacción por toque de dedo sobre el Canvas (poke)','Configura (vía Fix + Create) todo lo necesario para interactuar con el Canvas desde lejos con el rayo','Convierte el Canvas a Screen Space y le agrega un Graphic Raycaster','Agrega un Rigidbody y colliders de física al Canvas'],correct:1,
  why:'Add Ray Interaction (wizard) hace Fix (World Space + módulo) y Create: deja el Canvas operable con el rayo del control desde lejos.'},
 {tag:'Poke vs Ray',title:'Canvas responde al dedo pero no al rayo',
  body:`Porque solo se corrió <strong>Add Poke Interaction</strong> y no Add Ray Interaction. <strong>Poke</strong> (toque de dedo) y <strong>Ray</strong> (rayo del control) son interactables <em>separados</em>. Solución: clic derecho en el Canvas → <code>Interaction SDK &gt; Add Ray Interaction</code> → Fix → Create.`,
  q:'El Canvas responde al dedo pero no al rayo del control. ¿Por qué?',
  mc:['El Canvas quedó en Screen Space en vez de World Space','Solo se corrió Add Poke Interaction; falta Add Ray Interaction','El Ray Interactor del control no está referenciado en el rig','La versión del paquete de interacciones es inferior a la 62'],correct:1,
  why:'Poke (dedo) y Ray (rayo) son interactables separados: si solo corriste Add Poke, falta Add Ray Interaction.'},
 {tag:'Versión 62',title:'Quick actions de Canvas (versión del SDK)',
  body:`Desde la <strong>versión 62</strong> del paquete de interacciones de Meta hay <em>quick actions</em> (<strong>Add Ray</strong> y <strong>Add Poke</strong>) que configuran el Canvas automáticamente con el wizard. Antes había que configurar manualmente todos los componentes. (Es la misma versión que habilita usar manos y controles simultáneamente.)`,
  q:'¿Desde qué versión del SDK hay quick actions (Add Ray/Add Poke) para Canvas?',
  mc:['Versión 50 del paquete de interacciones','Versión 55 del paquete de interacciones','Versión 62 del paquete de interacciones','Cualquier versión sobre Unity 2022'],correct:2,
  why:'Desde la versión 62 del paquete de interacciones aparecen las quick actions Add Ray/Add Poke (y manos+controles simultáneos).'},
 {tag:'Reticle Data Teleport',title:'Reticle Data Teleport',
  body:`Componente del sistema de teletransporte que maneja el indicador visual. Tiene estados <strong>válido / inválido</strong>: el reticle cambia de apariencia según si el punto al que apunta el jugador es un destino permitido o no.`,
  q:'¿Qué hace el Reticle Data Teleport?',
  mc:['Calcula la curva y el alcance del rayo de teletransporte','Maneja el indicador visual de teletransporte con estados válido/inválido','Define las zonas del piso por las que se puede caminar (NavMesh)','Renderiza la malla de las manos virtuales del jugador'],correct:1,
  why:'Reticle Data Teleport controla el indicador de teletransporte: cambia según el destino sea válido o inválido.'},
 {tag:'Vertical Layout Group',title:'Vertical Layout Group',
  body:`Organiza los elementos UI en una <strong>columna vertical automáticamente</strong>. Parámetros clave: <em>Padding</em> (margen), <em>Spacing</em> (separación entre elementos), <em>Child Alignment</em> (cómo se alinean) y <em>Control Child Size Width</em> (estira los hijos al ancho disponible).`,
  q:'¿Para qué sirve el Vertical Layout Group en un Canvas?',
  mc:['Para anclar el Canvas al centro de la cámara del headset','Para organizar los elementos UI en columna automáticamente (padding, spacing, alignment)','Para detectar el rayo del control sobre los botones','Para escalar el Canvas a tamaño real en World Space'],correct:1,
  why:'Vertical Layout Group ordena los hijos en columna automáticamente: padding, spacing, alignment y control de tamaño.'},
 {tag:'Poke vs Ray (concepto)',title:'Interacción Poke vs Ray en un Canvas',
  body:`<strong>Poke</strong>: interactuar <em>directamente</em>, tocando el Canvas con el dedo (hand tracking o distancia corta). <strong>Ray</strong>: interactuar <em>desde la distancia</em> con el rayo del control. Ambas se configuran como quick actions separadas desde el menú contextual del Canvas.`,
  q:'¿Cuál es la diferencia entre Poke y Ray en un Canvas?',
  mc:['Poke = apuntar de lejos; Ray = tocar con el dedo directamente','Poke = tocar con el dedo (directo); Ray = apuntar de lejos con el rayo del control','Poke = interacción por mirada; Ray = interacción por voz','Poke = solo para PC; Ray = solo para visores móviles'],correct:1,
  why:'Poke = toque directo con el dedo; Ray = interacción a distancia con el rayo del control. Son quick actions separadas.'}
]},
{id:'building_blocks',name:'Building Blocks',icon:'📦',color:'#E8822E',desc:'Componentes modulares del Meta XR SDK: cámara, manos, grab, ray, teleport, eye gaze y passthrough',qs:[
 {tag:'Qué son',title:'¿Qué son los Building Blocks?',
  body:`Son <strong>componentes modulares pre-armados</strong> del Meta XR SDK para agregar funcionalidades XR rápido, con configuraciones por defecto. Se acceden desde <code>Oculus &gt; Tools &gt; Building Blocks</code> y se arrastran a la jerarquía. El <strong>Core SDK</strong> es requisito de todos; el <strong>Meta XR All-in-One SDK</strong> los trae completos.`,
  q:'¿Qué son los Building Blocks del Meta XR SDK?',
  mc:['Modelos 3D y prefabs de geometría listos de la Asset Store','Componentes modulares pre-armados para sumar funciones XR rápido','Scripts de detección de colisiones entre objetos de la escena','Materiales y shaders optimizados para visores VR'],correct:1,
  why:'Building Blocks = componentes modulares pre-armados (Oculus > Tools > Building Blocks). El Core SDK es requisito de todos.'},
 {tag:'Camera Rig',title:'Camera Rig',
  body:`Es la <strong>base de toda escena VR</strong>: contiene la cámara (renderizado estereoscópico, una imagen por ojo), los controladores y el tracking de cabeza y cuerpo (el Player VR). Sin Camera Rig no hay punto de vista ni seguimiento del jugador.`,
  q:'¿Qué provee el Camera Rig?',
  mc:['Solo la cámara con renderizado estereoscópico, sin tracking','La cámara, los controladores y el tracking de cabeza y cuerpo (Player VR)','El sistema de sonido espacial y la mezcla por capas','El conjunto de manos virtuales y sus animaciones'],correct:1,
  why:'El Camera Rig es la base: cámara estéreo + controladores + tracking de cabeza y cuerpo (Player VR).'},
 {tag:'Teleport Locomotion',title:'Teleport Locomotion',
  body:`Sistema de desplazamiento por <strong>teletransporte</strong>. Usa <strong>Teleport Area</strong> (zonas válidas para caer), <strong>Teleport Point</strong> (puntos fijos) y un <strong>reticle</strong> que marca el destino con estado válido o inválido. Al ser instantáneo en vez de movimiento continuo, <strong>evita el mareo</strong>.`,
  q:'¿Por qué el Teleport Locomotion ayuda a evitar el mareo?',
  mc:['Porque reduce el campo de visión con una viñeta al desplazarse','Porque mueve al jugador de forma instantánea en vez de con movimiento continuo','Porque baja gradualmente la velocidad del movimiento continuo','Porque sincroniza el desplazamiento con los pasos reales del jugador'],correct:1,
  why:'El teleport es instantáneo (Teleport Area/Point + reticle válido/inválido): sin movimiento continuo, evita el mareo.'},
 {tag:'Hand Tracking',title:'Hand Tracking',
  body:`Detecta la <strong>posición y las poses de las manos</strong> sin necesidad de controles, usando las cámaras del visor. Al agregarlo, el input de la escena pasa a soportar manos además de los controles.`,
  q:'¿Qué hace el Hand Tracking?',
  mc:['Dibuja una malla hiperrealista de las manos (real hands)','Detecta la posición y poses de las manos sin controles','Anima las manos virtuales a partir de los controles','Detecta micro-gestos del pulgar sobre el índice'],correct:1,
  why:'Hand Tracking detecta posición y poses de las manos sin controles (con las cámaras del visor).'},
 {tag:'Virtual Hands',title:'Virtual Hands',
  body:`Muestra unas <strong>manos virtuales en VR</strong> cuya animación depende del <strong>hand tracking o de los controladores</strong>. Es la representación visual con la que el usuario se ve las manos dentro de la experiencia.`,
  q:'¿De qué dependen las Virtual Hands?',
  mc:['Únicamente del hand tracking de las cámaras del visor','Del hand tracking o de los controladores','Únicamente de los controles físicos del Quest','Del sistema de eye tracking del visor'],correct:1,
  why:'Las Virtual Hands son la visualización de las manos en VR y dependen del hand tracking o de los controles.'},
 {tag:'Real Hands',title:'Real Hands',
  body:`Es la <strong>visualización de las manos con una malla mucho más realista</strong>. Aunque no depende del hand tracking, suma mucho realismo y resulta más necesaria cuando se busca presencia e inmersión.`,
  q:'¿Qué caracteriza a las Real Hands?',
  mc:['Son manos de baja poligonización para mejorar el rendimiento','Son una malla mucho más realista de las manos','Dependen exclusivamente del hand tracking para funcionar','Reemplazan al Camera Rig en escenas de realidad mixta'],correct:1,
  why:'Real Hands = visualización con malla mucho más realista; no depende del hand tracking pero aporta más realismo.'},
 {tag:'Grab Interaction',title:'Grab Interaction',
  body:`Permite <strong>agarrar objetos</strong> aplicándole al objeto un grab interaction (<code>Interaction SDK &gt; Add Grab Interaction</code>). El sistema usa un <strong>Hand Grab Interactor</strong> (en la mano) y un <strong>Hand Grab Interactable</strong> (en el objeto, ej. una botella).`,
  q:'¿Qué dos piezas intervienen en el Grab Interaction?',
  mc:['Ray Interactor (rayo) y Ray Interactable (objeto lejano)','Hand Grab Interactor (mano) y Hand Grab Interactable (objeto)','Snap Interactor (objeto) y Snap Interactable (destino)','Poke Interactor (dedo) y Poke Interactable (botón)'],correct:1,
  why:'Grab Interaction usa Hand Grab Interactor (en la mano) + Hand Grab Interactable (en el objeto, ej. botella).'},
 {tag:'Ray Interaction',title:'Ray Interaction',
  body:`Habilita <strong>interacciones a distancia</strong>, ideales para botones lejanos o elementos de UI. Funciona con un <strong>Ray Interactor</strong> (el rayo que sale de la mano o control) y un <strong>Ray Interactable</strong> (el objeto que recibe el rayo).`,
  q:'¿Para qué sirve el Ray Interaction?',
  mc:['Para agarrar objetos al tocarlos directamente con la mano','Para interactuar a distancia con botones lejanos o UI','Para encajar objetos en posiciones predefinidas (snap)','Para detectar hacia dónde mira el usuario'],correct:1,
  why:'Ray Interaction = interacción a distancia (botones lejanos / UI) con Ray Interactor + Ray Interactable.'},
 {tag:'Eye Gaze',title:'Eye Tracking / Eye Gaze',
  body:`Detecta <strong>hacia dónde mira el usuario</strong>. Se puede configurar por cada ojo. Sirve para foveated rendering, selección por mirada o expresividad de avatares.`,
  q:'¿Qué detecta el Eye Tracking / Eye Gaze?',
  mc:['La posición y las poses de las manos del usuario','Hacia dónde mira el usuario (configurable por ojo)','Los micro-gestos del pulgar sobre el índice','La orientación de la cabeza dentro del espacio'],correct:1,
  why:'Eye Gaze detecta hacia dónde mira el usuario y se puede configurar en cada ojo.'},
 {tag:'Passthrough',title:'Passthrough',
  body:`Muestra el <strong>mundo real dentro del visor</strong> mediante el video de las cámaras, organizado por <strong>layers</strong>. Es la base de la <strong>realidad mixta (MR)</strong>: mezclar contenido virtual con el entorno físico.`,
  q:'¿Qué permite el Passthrough?',
  mc:['Ver el mundo real dentro del visor (base de la realidad mixta)','Proyectar contenido virtual sobre una pared física por capas','Mezclar el audio del entorno real con el del juego','Detectar y anclar planos del entorno para colocar objetos'],correct:0,
  why:'Passthrough muestra el mundo real (video de cámaras por layers) en el visor: es la base de la realidad mixta.'}
,
 {tag:'Locomotion Controller Group',title:'Locomotion Controller Group',
  body:`Es el <strong>agrupador o "handler"</strong> de la locomoción: administra y ordena todas las reglas de cómo el jugador se mueve y gira, funcionando como <strong>puente entre los joysticks y la cápsula física</strong> (Character Controller). Viene preconfigurado dentro del prefab <strong>OVR Camera Rig Interaction</strong>. Adentro conviven las alternativas de movimiento: <strong>Teleport</strong>, <strong>Snap Turn / Step</strong> y <strong>Slide</strong>. Se agrupan porque todas modifican la posición de la <strong>misma</strong> cápsula: el handler procesa las acciones de forma ordenada (p. ej. cómo frena el slide si se dispara un teleport) y comunica el movimiento final a la física.`,
  q:'¿Qué es el Locomotion Controller Group dentro del OVR Camera Rig Interaction?',
  mc:['Un agrupador/handler que administra las reglas de movimiento (Teleport, Snap Turn, Slide) y las comunica a la cápsula física del jugador','La zona del piso donde el jugador puede teletransportarse (Teleport Interactable)','El prefab que muestra los modelos 3D de los joysticks físicos','El componente que define las poses de los dedos al agarrar un objeto'],correct:0,
  why:'Es el handler que agrupa y ordena las mecánicas de movimiento (Teleport/Snap/Slide) y traduce la orden final a la cápsula física, evitando conflictos entre mecánicas.'},
 {tag:'OVR Rig vs Controllers vs Interaction',title:'OVR Camera Rig vs OVR Controllers vs OVR Camera Rig Interaction',
  body:`Pensalo como armar un auto:<br><strong>OVR Camera Rig</strong>: el <strong>chasis básico</strong> — la cámara estéreo (un ojo por lente) + el <strong>OVR Manager</strong> que comunica el casco con Unity. Solo con esto mirás alrededor, pero no tenés manos, controles ni movimiento.<br><strong>OVR Controllers</strong>: el prefab que <strong>solo</strong> rastrea y muestra los modelos 3D de tus joysticks. Por sí solos no saben agarrar ni teletransportarse: hay que sumarles los interactores a mano.<br><strong>OVR Camera Rig Interaction</strong>: el <strong>"súper prefab" todo incluido</strong> — ya trae el Camera Rig, los Controllers, las manos, la locomoción y TODOS los interactores listos (Teleport, Grab, Ray, Poke). Es el que se usa en los tutoriales.`,
  ej:`El Building Block Interactions Rig es el equivalente: inyecta de una sola vez todos los interactores estándar en el jugador.`,
  q:'¿Qué diferencia al OVR Camera Rig, los OVR Controllers y el OVR Camera Rig Interaction?',
  mc:['Camera Rig = cámara + OVR Manager (base); OVR Controllers = solo el tracking/modelo de los joysticks; Camera Rig Interaction = súper prefab con rig + controllers + locomotion + Grab/Ray/Poke/Teleport ya integrados','Los tres son equivalentes: cambia solo el nombre según la versión del SDK','Camera Rig trae las interacciones; OVR Controllers trae la locomoción; Camera Rig Interaction es solo la cámara','Camera Rig Interaction es la base mínima y los OVR Controllers el paquete completo con todo integrado'],correct:0,
  why:'Camera Rig = base (cámara + OVR Manager). OVR Controllers = solo joysticks (sin lógica de agarrar/mover). OVR Camera Rig Interaction = todo integrado (rig + controllers + locomotion + interactores).'},
 {tag:'Locomotor: a mano vs prefab',title:'Armar la locomoción: a mano o con prefab',
  body:`Se puede de las <strong>dos formas</strong>.<br><strong>A mano</strong>: creás un controlador (p. ej. CharacterControllerLocomotor) con su <strong>cápsula</strong>, <strong>Rigidbody / Character Controller</strong> y el <strong>Locomotion Handler</strong>, configurando las reglas paso a paso. Sirve para entender el núcleo y para físicas muy personalizadas.<br><strong>Con prefab (recomendado)</strong>: arrastrás el <strong>OVR Camera Rig Interaction</strong> (o el Building Block <strong>Interactions Rig</strong>) y ya viene todo ensamblado. Tu único trabajo pasa a ser armar el escenario: crear los <strong>Teleport Interactable</strong> sobre un NavMesh/collider para marcar dónde puede aterrizar el jugador.`,
  q:'¿Cómo se arma el controlador de locomoción del jugador?',
  mc:['A mano (cápsula + Rigidbody/Character Controller + Locomotion Handler) o, recomendado, con el prefab OVR Camera Rig Interaction / Building Block Interactions Rig que ya lo trae ensamblado','Solo a mano: no existe ningún prefab que arme la locomoción por vos','Solo con el prefab: Unity no permite armar la cápsula y el handler manualmente','Se arma escribiendo un shader que calcula el desplazamiento del jugador'],correct:0,
  why:'Las dos formas son válidas: a mano (cápsula + Rigidbody/Character Controller + Locomotion Handler) o con el prefab OVR Camera Rig Interaction / Interactions Rig, que es lo recomendado.'}]},
{id:'event_wrappers',name:'Event Wrappers',icon:'🔗',color:'#7A33B5',desc:'Enlazar acciones sin código: cada wrapper expone los eventos del interactor o interactable en el Inspector',qs:[
 {tag:'Qué son',title:'¿Qué son los Event Wrappers?',
  body:`Son componentes que <strong>exponen los eventos</strong> de un interactor o interactable (Hover, Select, Unselect, Release...) <strong>en el Inspector</strong>, para enlazar acciones de otros objetos o scripts <strong>sin escribir código</strong> (reproducir audio, partículas, mover objetos, cargar escenas).`,
  q:'¿Para qué sirven los Event Wrappers?',
  mc:['Para envolver scripts de C# y compilarlos más rápido','Para exponer eventos en el Inspector y enlazar acciones sin código','Para agrupar varios interactables bajo un mismo controlador','Para sincronizar los eventos de interacción por red entre jugadores'],correct:1,
  why:'Los Event Wrappers exponen los eventos del interactor/interactable en el Inspector para enlazar acciones sin código.'},
 {tag:'Interactor Wrapper',title:'Interactor Unity Event Wrapper',
  body:`Responde a los eventos del <strong>interactor</strong> (la mano o el control): cuándo empieza o termina de hacer hover o select sobre cualquier interactable. Mira el lado de quien interactúa, no el del objeto.`,
  q:'¿A qué eventos responde el Interactor Unity Event Wrapper?',
  mc:['A los del interactable: el objeto que recibe la acción','A los del interactor: la mano o el control','A los eventos de puntero de poke o ray sobre cualquier objeto','A los eventos de encaje de un objeto en un slot (snap)'],correct:1,
  why:'El Interactor Unity Event Wrapper responde a los eventos del interactor (la mano/control), no a los del objeto.'},
 {tag:'Interactable Wrapper',title:'Interactable Unity Event Wrapper',
  body:`Responde a los eventos del <strong>interactable</strong> (el objeto): cuándo es hovereado o seleccionado. Es la contraparte del Interactor wrapper, mirando desde el lado del objeto.`,
  q:'¿Desde qué lado mira el Interactable Unity Event Wrapper?',
  mc:['Desde la mano o el control (el interactor)','Desde el objeto (interactable): cuándo es hovereado o seleccionado','Desde la cámara, según hacia dónde mira el jugador','Desde el sistema de teletransporte y sus reticles'],correct:1,
  why:'El Interactable Unity Event Wrapper responde a los eventos del objeto (interactable): hover/select sobre él.'},
 {tag:'Pointable Wrapper',title:'Pointable Unity Event Wrapper',
  body:`El más <strong>general y recomendado</strong>. Expone los eventos de puntero (<strong>Hover, Unhover, Select, Unselect, Move</strong>) de cualquier interactable apuntado, sea por <strong>poke</strong> (dedo) o por <strong>ray</strong> (rayo). Es la forma principal de enlazar acciones sin código.`,
  q:'¿Qué hace particular al Pointable Unity Event Wrapper?',
  mc:['Es específico del agarre con la mano (Hand Grab Interactable)','Es el más general: eventos de puntero (hover/select/move) para poke o ray','Responde solo a los eventos del interactor (mano/control)','Es exclusivo del toque con el dedo sobre botones (poke)'],correct:1,
  why:'El Pointable Unity Event Wrapper es el más general: expone hover/select/move de cualquier interactable, por poke o ray.'},
 {tag:'Hand Grab Wrapper',title:'Hand Grab Unity Event Wrapper',
  body:`Expone los eventos del <strong>Hand Grab Interactable</strong>: cuándo se <strong>agarra</strong> y cuándo se <strong>suelta</strong> el objeto con la mano. Útil para disparar sonido o efectos al agarrar.`,
  q:'¿Qué eventos expone el Hand Grab Unity Event Wrapper?',
  mc:['Los de tocar un botón o superficie con el dedo (poke)','Los de agarrar y soltar un objeto con la mano','Los de apuntar y seleccionar de lejos con el rayo','Los de encajar un objeto en un slot (snap)'],correct:1,
  why:'El Hand Grab Unity Event Wrapper expone los eventos de agarrar/soltar con la mano (Hand Grab Interactable).'},
 {tag:'Poke Wrapper',title:'Poke Unity Event Wrapper',
  body:`Expone los eventos del <strong>Poke Interactable</strong>: <strong>tocar</strong> una superficie o botón con el dedo (directamente o por hand tracking). Ideal para botones físicos y paneles.`,
  q:'¿Cuándo dispara sus eventos el Poke Unity Event Wrapper?',
  mc:['Al agarrar y soltar un objeto con la mano','Al tocar con el dedo una superficie o botón (Poke)','Al apuntar de lejos con el rayo del control','Al detectar un micro-gesto del pulgar sobre el índice'],correct:1,
  why:'El Poke Unity Event Wrapper expone los eventos de tocar con el dedo (Poke Interactable): botones y paneles.'},
 {tag:'Snap Wrapper',title:'Snap Unity Event Wrapper',
  body:`Expone los eventos del <strong>Snap Interactor / Interactable</strong>: cuándo un objeto <strong>encaja en un slot</strong> (snap) o sale de él. Útil para encastres, inventarios y armado de piezas.`,
  q:'¿Qué evento maneja el Snap Unity Event Wrapper?',
  mc:['Cuando se agarra o se suelta un objeto con la mano','Cuando un objeto encaja en un slot (o sale de él)','Cuando el dedo toca una superficie o botón','Cuando el rayo del control apunta a un objeto'],correct:1,
  why:'El Snap Unity Event Wrapper expone los eventos de encajar/soltar un objeto en un slot (snap).'},
 {tag:'Micro Gesture Wrapper',title:'Micro Gesture Unity Event Wrapper',
  body:`Expone los eventos de <strong>micro-gestos</strong>: pequeños movimientos del <strong>pulgar sobre el índice</strong> (swipes y taps) detectados por hand tracking. Sirven como comandos discretos sin controles.`,
  q:'¿Qué detecta el Micro Gesture Unity Event Wrapper?',
  mc:['Grandes movimientos del brazo y la muñeca','Micro-gestos del pulgar sobre el índice (swipes/taps)','El encaje de un objeto en un slot (snap)','La orientación de la cabeza dentro del espacio'],correct:1,
  why:'El Micro Gesture Unity Event Wrapper expone micro-gestos del pulgar sobre el índice (swipes/taps) por hand tracking.'}
,
 {tag:'Pointable vs Interactable',title:'Pointable vs Interactable Unity Event Wrapper',
  body:`Ambos exponen los eventos del interactuable en el Inspector (When Select, When Hover, When Release) para disparar acciones <strong>sin código</strong>. La diferencia es <strong>a qué tipo de interactuable escuchan</strong>.<br><strong>Pointable Unity Event Wrapper</strong>: objetos que el jugador <strong>agarra, suelta o apunta directamente</strong>; se enlaza referenciando un <strong>Grabbable</strong>. Ej.: una botella o un cubo que suena al ser agarrado (When Select) o soltado (When Release).<br><strong>Interactable Unity Event Wrapper</strong>: <strong>otros interactuables del entorno que no se agarran</strong>. Ej.: un <strong>Snap Interactable</strong> (zona de encaje) que enciende un cubo de ayuda, o un <strong>Teleport Interactable</strong> que cambia de color al apuntarlo (When Hover/Unhover).`,
  ej:`Regla rápida: Pointable para lo que agarrás con la mano (taza, botella); Interactable para las zonas interactivas del nivel (piso de teleport, zonas de encaje).`,
  q:'¿Cuál es la diferencia entre el Pointable y el Interactable Unity Event Wrapper?',
  mc:['El Pointable escucha objetos agarrables/apuntables (referencia un Grabbable: botella, cubo); el Interactable escucha interactuables del entorno que no se agarran (Snap, Teleport Interactable)','El Pointable corre solo en el editor y el Interactable solo en runtime sobre el dispositivo','El Pointable expone eventos de UI (Canvas) y el Interactable expone eventos de físicas del Rigidbody','El Pointable solo dispara When Hover y el Interactable solo dispara When Select'],correct:0,
  why:'Ambos exponen los eventos en el Inspector; el Pointable se enlaza a un Grabbable (cosas que agarrás), el Interactable a interactuables no-agarrables del entorno (Snap, Teleport Interactable).'}]}
];

// ── V/F DATA (Simulacro Punto 2) ──────────────────────────────────────────────
const VF_STATEMENTS=[
  {text:'El Meta XR SDK es multiplataforma por naturaleza.',answer:false,exp:'Depende del ecosistema Meta; para multiplataforma se usa OpenXR.'},
  {text:'Los Light Probes iluminan objetos dinámicos con luz bakeada interpolada.',answer:true,exp:'Correcto: los Light Probes capturan luz pre-calculada y la aplican a objetos dinámicos.'},
  {text:'UV2 puede tener overlaps sin afectar el lightmap.',answer:false,exp:'UV2 debe ser único sin solapamientos o la iluminación quedará incorrecta.'},
  {text:'El Interactor Unity Event Wrapper responde a eventos del objeto agarrado.',answer:false,exp:'Responde a la mano/control (el interactor). Para el objeto: Pointable/Interactable wrapper.'},
  {text:'El Object Pooling evita picos de CPU por Instantiate/Destroy.',answer:true,exp:'Correcto: reutiliza objetos existentes evitando los picos de GC.'},
  {text:'SteamVR es el camino principal de la industria para multiplataforma en la actualidad.',answer:false,exp:'La industria migra a OpenXR como estándar de interoperabilidad.'},
  {text:'OnDrawGizmos() es un método que corre en runtime en builds del proyecto.',answer:false,exp:'Corre solo en el Editor Unity; con #if UNITY_EDITOR no compila en el build.'},
  {text:'El feedback basado solo en audio no alcanza como criterio de diseño VR.',answer:true,exp:'El jugador puede jugar sin sonido; el feedback debe funcionar también visualmente.'}
];

const SIMULACROS=[
 {id:1,title:'Simulacro 1',desc:'10 preguntas de formato mixto: relacionar conceptos, verdadero/falso, opción múltiple, respuestas escritas, una de código y una de ordenar pasos. Las respuestas se revelan recién al entregar.',questions:[
  {type:'match',label:'Relacionar conceptos',
   q:`<p>Relacioná cada término con su definición (escribí los pares, ej: <code>1-C, 2-E...</code>):</p>
   <p style="margin-top:8px"><strong>A.</strong> Affordance · <strong>B.</strong> Presencia · <strong>C.</strong> Embodiment · <strong>D.</strong> Corporalidad · <strong>E.</strong> Memoria muscular</p>
   <ol><li>Sensación de que el cuerpo virtual es mío.</li><li>El jugador repite movimientos hasta hacerlos automáticos.</li><li>El objeto comunica visualmente cómo debe usarse.</li><li>El cuerpo físico del jugador es la interfaz principal.</li><li>Sensación de "estar ahí", de habitar el espacio.</li></ol>`,
   keywords:['1-c','2-e','3-a','4-d','5-b','embodiment','memoria muscular','affordance','corporalidad','presencia'],
   answer:`<p><strong>1 → C</strong> (Embodiment), <strong>2 → E</strong> (Memoria muscular), <strong>3 → A</strong> (Affordance), <strong>4 → D</strong> (Corporalidad), <strong>5 → B</strong> (Presencia).</p>`},
  {type:'vf',label:'Verdadero o Falso (8 afirmaciones)',
   q:`<p>Marcá V o F en cada afirmación:</p>`,
   statements:VF_STATEMENTS},
  {type:'written',label:'Casos prácticos con errores',
   q:`<p>Resolvé estos 3 casos del SDK de Meta:</p><ol><li>El objeto hace Snap pero al reagarrarlo queda orbitando y se rompen las físicas.</li><li>Puse feedback de partículas en el Select de un <code>Interactor Unity Event Wrapper</code> en el objeto agarrable y no pasa nada.</li><li>El Canvas responde al dedo pero el rayo del control no lo detecta.</li></ol>`,
   keywords:['is trigger','is kinematic','use gravity','pointable','grabbable','interactable','add ray','poke','world space'],
   answer:`<p><strong>1.</strong> Is Trigger en el Collider del Snap Interactor + Is Kinematic (y Use Gravity off) en el Rigidbody del Snap Interactable.</p><p><strong>2.</strong> Wrapper equivocado: usar <strong>Pointable Unity Event Wrapper</strong> referenciando el Grabbable.</p><p><strong>3.</strong> Falta Add Ray Interaction (solo se corrió Add Poke). Clic derecho Canvas → Interaction SDK → Add Ray Interaction → Fix → Create.</p>`},
  {type:'code',label:'Código con errores',
   q:`<p>Este código no compila. Encontrá los errores y escribí la versión correcta:</p><pre>[RequiredComponent(typeof(InteractableUnityEventWrapper))]
public class manager : MonoBehaviour
{
    AudioSource lvlAudioSource;
    void Start(){
        lvlAudioSource = GameObject.Find("LvlAudioSource");
    }
}</pre>`,
   keywords:['requirecomponent','getcomponent','audiosource','find'],
   answer:`<p><strong>Error 1:</strong> <code>RequiredComponent</code> → <code>RequireComponent</code> (sin la "d").</p><p><strong>Error 2:</strong> <code>GameObject.Find()</code> devuelve un GameObject; falta encadenar <code>.GetComponent&lt;AudioSource&gt;()</code>.</p><pre>[RequireComponent(typeof(InteractableUnityEventWrapper))]
public class manager : MonoBehaviour {
  AudioSource lvlAudioSource;
  void Start(){
    lvlAudioSource = GameObject.Find("LvlAudioSource").GetComponent&lt;AudioSource&gt;();
  }
}</pre>`},
  {type:'order',label:'Ordenar el flujo (sonido al agarrar)',
   q:`<p>Ordená los pasos para configurar feedback de sonido al agarrar un objeto con las manos:</p>`,
   steps:['Objeto base con Grabbable + Rigidbody + Collider','Agregar Hand Grab Interactable al objeto','Crear objeto hijo SFX con AudioSource (Play On Awake: OFF)','Agregar Pointable Unity Event Wrapper y referenciar el Grabbable','Evento When Select → AudioSource → AudioSource.Play()'],
   why:`<p>Primero existe el objeto físico, después el interactable, luego el audio, y recién al final se conecta el evento que lo dispara.</p>`},
  {type:'written',label:'Event Wrappers',
   q:`<p>Nombrá al menos <strong>3 Event Wrappers</strong> del Meta XR SDK y explicá la diferencia entre un Interactor wrapper y un Interactable wrapper.</p>`,
   keywords:['pointable','interactable unity event wrapper','interactor unity event wrapper','when select','grabbable','mano','control'],
   answer:`<p>Pointable Unity Event Wrapper (eventos del objeto/Grabbable: When Select/Release/Hover), Interactable Unity Event Wrapper (variante para interactables) e Interactor Unity Event Wrapper (eventos de la mano/control). <strong>Interactable</strong> = responde al objeto; <strong>Interactor</strong> = responde a quien agarra.</p>`},
  {type:'written',label:'Game Feeling',
   q:`<p>¿Qué es el Game Feeling y por qué importa en VR? Incluí feedback positivo vs negativo y por qué solo audio no alcanza.</p>`,
   keywords:['sensaciones','feedback','negativo','fisica','presencia','audio','visual','coherente'],
   answer:`<p>Es la calidad de las sensaciones durante la interacción: cada acción produce respuesta clara y coherente. En VR el cuerpo habita el juego, así que el feedback negativo se vive físico e intenso (hay que tener más cuidado). Solo audio no alcanza: las señales deben entenderse también visualmente.</p>`},
  {type:'written',label:'Tangibilidad del Trabajo',
   q:`<p>¿Qué es la Tangibilidad del Trabajo y por qué los simuladores la cumplen siempre? Dá un ejemplo.</p>`,
   keywords:['consecuencias visibles','esfuerzo','impacto','paso a paso','tarea real','simulador','observable'],
   answer:`<p>Las acciones deben producir consecuencias visibles y comprensibles: el usuario percibe que realmente hizo algo y que su esfuerzo tuvo impacto. Los simuladores la cumplen porque replican tareas reales paso a paso con resultado observable (ej: ensamblar pieza por pieza).</p>`},
  {type:'mc',label:'Gizmos en el editor',
   q:`<p>Querés colorear en la Vista de Escena si un asiento está ocupado/libre, sin afectar el runtime. ¿Qué usás?</p>`,
   opts:['Un método público invocado desde un botón del Inspector','El callback OnDrawGizmos(), que corre solo en el editor, con Gizmos.color','Un shader que pinta el objeto durante el juego','Update() con un condicional que dibuja sobre la pantalla'],
   correct:1},
  {type:'mc',label:'Canvas y el wizard del SDK',
   q:`<p>El Canvas responde al dedo pero no al rayo del control, aunque el Ray Interactor está activo. ¿Por qué?</p>`,
   opts:['El Canvas quedó en Screen Space en vez de World Space','Solo se corrió Add Poke Interaction; falta Add Ray Interaction','La versión del paquete de interacciones es inferior a la 62','El Graphic Raycaster del Canvas está desactivado'],
   correct:1}
 ]},
 {id:2,title:'Simulacro 2',desc:'10 preguntas de formato mixto: relacionar conceptos, verdadero/falso, opción múltiple, respuestas escritas, una de código y una de ordenar pasos. Las respuestas se revelan recién al entregar.',questions:[
  {type:'match',label:'Relacionar conceptos de iluminación',
   q:`<p>Relacioná cada concepto con su descripción (escribí los pares, ej: <code>1-C...</code>):</p>
   <p style="margin-top:8px"><strong>A.</strong> Lightmap · <strong>B.</strong> Light Probes · <strong>C.</strong> LOD · <strong>D.</strong> UV2</p>
   <ol><li>Canal donde se guarda la iluminación bakeada de las superficies estáticas.</li><li>Textura con la iluminación pre-calculada que se aplica sobre los estáticos.</li><li>Puntos que dan luz bakeada a los objetos dinámicos.</li><li>Versiones del mismo objeto con menos polígonos según la distancia.</li></ol>`,
   keywords:['1-d','2-a','3-b','4-c','lightmap','light probes','lod','uv2'],
   answer:`<p><strong>1 → D</strong> (UV2), <strong>2 → A</strong> (Lightmap), <strong>3 → B</strong> (Light Probes), <strong>4 → C</strong> (LOD).</p>`},
  {type:'vf',label:'Verdadero o Falso (8 afirmaciones)',
   q:`<p>Marcá V o F en cada afirmación:</p>`,
   statements:[
    {text:'OpenXR es un estándar abierto desarrollado por el grupo Khronos.',answer:true,exp:'Correcto: unifica el desarrollo VR/AR multiplataforma.'},
    {text:'El Meta XR SDK es la mejor opción para máxima portabilidad multiplataforma.',answer:false,exp:'Para portabilidad conviene OpenXR; el Meta XR SDK ata al ecosistema Meta.'},
    {text:'El Canvas en VR debe estar en World Space para que los rayos del SDK lo detecten.',answer:true,exp:'Correcto: en Screen Space no funciona con las interacciones de Meta.'},
    {text:'Los Light Probes iluminan objetos dinámicos con luz bakeada interpolada.',answer:true,exp:'Correcto: leen luz pre-calculada de los probes cercanos.'},
    {text:'La memoria muscular se logra repitiendo movimientos hasta volverlos reflejos.',answer:true,exp:'Correcto: la repetición convierte el gesto en automático.'},
    {text:'El mareo en VR aparece por el conflicto entre lo que ves y lo que siente tu cuerpo.',answer:true,exp:'Correcto: es el conflicto sensoriomotor.'},
    {text:'En VR el feedback solo de audio alcanza; no hace falta que sea visual.',answer:false,exp:'El jugador puede jugar sin sonido: el feedback debe entenderse también visualmente.'},
    {text:'El UV2 puede tener overlaps sin afectar el lightmap.',answer:false,exp:'El UV2 debe ser único sin solapamientos o la iluminación queda mal.'}
   ]},
  {type:'written',label:'Casos prácticos',
   q:`<p>Resolvé estos 2 casos:</p><ol><li>El Canvas responde al toque del dedo pero el rayo del control no lo detecta, aunque el Ray Interactor está activo.</li><li>Tu proyecto debe correr en Quest 3, HTC Vive y PSVR. ¿Qué SDK conviene y por qué?</li></ol>`,
   keywords:['add ray','poke','world space','openxr','interoperabilidad','multiplataforma'],
   answer:`<p><strong>1.</strong> Falta <strong>Add Ray Interaction</strong> (solo se corrió Add Poke); Poke y Ray son interactables separados → clic derecho Canvas → Interaction SDK → Add Ray Interaction → Fix → Create.</p><p><strong>2.</strong> <strong>OpenXR</strong>: estándar abierto diseñado para interoperabilidad entre fabricantes; corre en varios visores con mínimos cambios. Meta XR SDK o SteamVR atarían el proyecto a un ecosistema.</p>`},
  {type:'code',label:'Código con errores (Gizmos)',
   q:`<p>Querés marcar en la Vista de Escena (solo editor) si un hotspot está libre/ocupado, pero el color no se aplica. Encontrá los 2 errores y corregilos:</p><pre>public class HotspotGizmo : MonoBehaviour
{
    public bool ocupado;
    void OnDrawGizmos()
    {
        Gizmos.DrawWireSphere(transform.position, 0.2f);
        color = ocupado ? Color.red : Color.green;
    }
}</pre>`,
   keywords:['gizmos.color','antes'],
   answer:`<p><strong>Error 1:</strong> <code>color = ...</code> no existe en ese contexto; es <code>Gizmos.color = ...</code>.</p><p><strong>Error 2:</strong> hay que asignar <code>Gizmos.color</code> <strong>antes</strong> de dibujar, no después (si no, no afecta a ese DrawWireSphere).</p><pre>void OnDrawGizmos(){
  Gizmos.color = ocupado ? Color.red : Color.green;
  Gizmos.DrawWireSphere(transform.position, 0.2f);
}</pre><p>(Opcional: envolver en <code>#if UNITY_EDITOR / #endif</code>.)</p>`},
  {type:'order',label:'Ordenar el flujo (Canvas interactivo en VR)',
   q:`<p>Ordená el flujo para dejar un Canvas operable con el rayo del control y con el dedo:</p>`,
   steps:['Crear el Canvas en la escena','Clic derecho sobre el Canvas → Interaction SDK','Add Ray Interaction → Fix (convierte a World Space + agrega el módulo)','Add Poke Interaction para el toque directo con el dedo','Create → el SDK genera los componentes de interacción'],
   why:`<p>Ray (rayo) y Poke (dedo) son interactables separados; el wizard los configura y Create agrega los componentes.</p>`},
  {type:'written',label:'Cuándo usar cada SDK',
   q:`<p>Resumí cuándo conviene usar Meta XR SDK, OpenXR y SteamVR.</p>`,
   keywords:['meta xr','quest','openxr','multiplataforma','steamvr','pc vr','exclusivas','estandar'],
   answer:`<p>Meta XR SDK: objetivo Quest 2/3 específico, aprovechar capacidades exclusivas del hardware. OpenXR: compatibilidad multiplataforma, estándares abiertos, proyecto a largo plazo. SteamVR: PC VR con múltiples headsets y distribución en Steam. La industria apunta a OpenXR.</p>`},
  {type:'written',label:'Lightmaps y UV2',
   q:`<p>¿Qué es un lightmap y por qué el UV2 no puede tener overlaps?</p>`,
   keywords:['lightmap','iluminacion','pre-calculada','uv2','overlap','solapamiento','unico','estatic'],
   answer:`<p>El lightmap es una textura que guarda la iluminación pre-calculada (luces y sombras) de superficies estáticas, aplicada por el canal UV2. El UV2 no puede tener overlaps porque cada cara necesita su propio espacio único: si dos caras comparten UV, la luz de una pisa a la otra y la iluminación queda incorrecta.</p>`},
  {type:'written',label:'Mareo en VR',
   q:`<p>¿Qué causa el mareo (motion sickness) en VR y cómo se mitiga?</p>`,
   keywords:['conflicto','sensoriomotor','cuerpo','teletransporte','snap turning','viñeta','fps'],
   answer:`<p>Aparece por el <strong>conflicto sensoriomotor</strong>: lo que ves no coincide con lo que siente tu cuerpo. Se mitiga con teletransporte, snap turning, viñeta al moverse, dando control de cámara al jugador y manteniendo <strong>72–90 FPS</strong> estables.</p>`},
  {type:'mc',label:'¿Qué es OpenXR?',
   q:`<p>¿Qué es OpenXR?</p>`,
   opts:['Un SDK propietario de Meta exclusivo para Quest','Un estándar abierto de Khronos para VR/AR multiplataforma','La plataforma de distribución de apps VR de Steam','Una capa de compatibilidad solo para visores de PC'],
   correct:1},
  {type:'mc',label:'Reticles',
   q:`<p>¿Para qué sirven los Reticles?</p>`,
   opts:['Para representar las manos virtuales del jugador','Para comunicar visualmente si una superficie u objetivo es válido para una acción','Para acelerar el renderizado descartando objetos lejanos','Para marcar el punto exacto donde mira el usuario'],
   correct:1}
 ]},
 {id:3,title:'Simulacro 3 — Repaso Integral',desc:'Examen integral: cubre TODO el temario con opción múltiple.',questions:[]}
];

// Repaso Integral: MC por cada concepto (excluyendo zonas historia/patrones-AR y los temas vetados, que quedan en estudio) + ejercicios de recrear flujos.
const EXCLUIR_ZONA=new Set([]);
const EXCLUIR_TITULO=/draw call|batching|object pooling|shadow map|realtime vs baked|overdraw|instantiate\/destroy/i;
const _mcIntegral = ZONES.filter(z=>!EXCLUIR_ZONA.has(z.id)).flatMap(z => z.qs.filter(c=>!EXCLUIR_TITULO.test(c.title)).map(c => ({type:'mc',label:z.name+' · '+(c.title||''),q:c.q,opts:c.mc,correct:c.correct})));
const _flujosIntegral = [
 {t:'Sonido al agarrar con las manos',prompt:'Ordená el flujo para que suene un feedback al agarrar un objeto con las manos, sin programar.',steps:['Agregar Rigidbody y Collider al objeto','Agregar el componente Grabbable','Agregar Hand Grab Interactable','Agregar un AudioSource con el clip','Agregar Interactable Unity Event Wrapper apuntando al interactable','En el evento When Select, llamar a AudioSource.Play()'],why:'El objeto se hace agarrable (Rigidbody + Grabbable + Hand Grab Interactable) y el wrapper dispara el AudioSource en When Select. Cero código.'},
 {t:'Establecer una pose de manos',prompt:'Ordená el flujo para crear una Hand Grab Pose sobre un objeto.',steps:['Hacer el objeto agarrable (Grabbable + Hand Grab Interactable)','Abrir el Hand Grab Pose Recorder','Entrar en Play y envolver la mano en el objeto','Grabar: se crea un HandGrabPose con su HandPose y GhostHand','Ajustar los dedos con Fingers Freedom (Free/Constrained/Locked)','Create Mirrored para la otra mano'],why:'Intervienen Hand Grab Interactor (mano), Hand Grab Interactable (objeto), HandGrabPose y HandPose (hijos) y GhostHand (visual).'},
 {t:'Agarrar un palo de las dos puntas',prompt:'Tenés un palo que querés agarrar de cualquiera de sus dos puntas. Ordená el flujo.',steps:['Poner Rigidbody + Grabbable en el palo (el padre)','Crear un hijo ubicado en la punta A','Ponerle Grab Interactable al hijo A, apuntando al Grabbable del padre','Crear otro hijo ubicado en la punta B','Ponerle Grab Interactable al hijo B, apuntando al mismo Grabbable'],why:'Un solo objeto que se mueve (Grabbable + Rigidbody en el padre) y dos puntos de detección, cada uno su hijo con su posición, los dos apuntando al mismo Grabbable.'},
 {t:'Objeto agarrable con controles desde cero',prompt:'Ordená el flujo para hacer un objeto agarrable con controles desde cero.',steps:['Agregar un Rigidbody al objeto','Agregar un Collider (ej. Box Collider)','Agregar el componente Grabbable','Agregar Grab Interactable (agarre con controles)','Verificar que el Controller Grab Interactor esté en el control del rig'],why:'El objeto necesita física (Rigidbody), forma (Collider), el que lo mueve (Grabbable) y el que lo hace agarrable (Grab Interactable). El interactor va en el control.'},
 {t:'Teleport a un punto fijo (hotspot)',prompt:'Ordená el flujo para teletransportarte a un punto fijo sin marearte.',steps:['Crear un GameObject donde querés caer','Clic derecho → Interaction SDK → Add Teleport Interaction','Se genera el Hotspot (destino absoluto)','El Teleport Interactor en la mano apunta al hotspot','El reticle marca el destino y al soltar te teletransporta'],why:'El Hotspot es el destino fijo; el Teleport Interactor apunta, el reticle confirma y al seleccionar te mueve sin movimiento continuo (por eso no marea).'},
 {t:'Girar de a pasos (snap turning)',prompt:'Ordená el flujo para girar de a pasos con el control.',steps:['Tener el rig con locomoción configurada','Ubicar el Controller Turner Interactor en el control','En el Turner Event Broadcaster elegir el modo Snap','Setear los grados del giro (ej. 45)','Probar: el joystick gira de golpe en pasos fijos'],why:'El Turner Interactor genera el input y el Turner Event Broadcaster lo convierte en giros. En modo Snap el giro instantáneo marea menos que el continuo.'},
 {t:'Bakear la iluminación del interior',prompt:'Ordená el flujo para bakear la iluminación de tu escena.',steps:['Marcar los objetos que no se mueven como Static (con Contribute GI)','Confirmar Generate Lightmap UVs en los FBX importados','Configurar las luces como Baked o Mixed','Guardar la escena','Abrir Window → Rendering → Lighting y darle Generate Lighting'],why:'Sin Static + Contribute GI y sin Lightmap UVs el bake sale mal; guardar antes de bakear evita resultados raros.'}
];
SIMULACROS[2].questions = _mcIntegral.concat(_flujosIntegral.map(f => ({type:'order',label:'Flujo · '+f.t,q:'<p>'+f.prompt+'</p>',steps:f.steps,why:'<p>'+f.why+'</p>'})));
SIMULACROS[2].desc = 'Examen integral: '+SIMULACROS[2].questions.length+' preguntas — opción múltiple de cada concepto + ejercicios de recrear flujos. Cubre todo el temario de examen.';
// ── Simulacro 4: solo armar flujos (paso a paso de los apuntes) ──
const FLUJOS_SIM4=[{"t": "Agregar funcionalidades con Building Blocks", "prompt": "Ordená el flujo para agregar funcionalidades a la escena con Building Blocks.", "steps": ["Abrir Oculus &gt; Tools &gt; Building Blocks", "Arrastrar Camera Rig a la escena (indispensable: incluye OVR Camera Rig y OVR Manager)", "Arrastrar Pass Through si se quiere Realidad Mixta", "Arrastrar Hand Tracking y configurar la frecuencia en Alta", "Arrastrar Synthetic Hands para la representación visual de las manos", "Arrastrar Grabbable Item como objeto agarrable"], "why": "Los Building Blocks son módulos pre-armados; el Camera Rig es la base del jugador y el resto suma input de manos e interacciones."}, {"t": "Hacer un objeto agarrable con el Grab Wizard", "prompt": "Ordená el flujo para hacer un objeto agarrable usando el asistente automático Grab Wizard.", "steps": ["Crear un cubo con clic derecho &gt; 3D Object &gt; Cube", "Seleccionarlo y hacer clic derecho &gt; Interaction SDK &gt; Add Grab Interaction", "En la ventana Grab Wizard elegir el tipo de interactor (manos, controles o ambos) y el gesto", "En los componentes requeridos, hacer clic en Fix para agregar el Rigidbody que falta", "Hacer clic en Create para que se agreguen automáticamente todos los componentes", "Ajustar escala y posición del cubo para probarlo en Play"], "why": "El Grab Wizard arma toda la interacción, pero antes necesita el Rigidbody (Fix) y la definición del interactor/gesto; recién con Create inyecta los componentes."}, {"t": "Hacer un objeto agarrable paso a paso (manual)", "prompt": "Ordená el flujo manual para hacer un objeto agarrable con manos y controles.", "steps": ["Crear la jerarquía: Root Grab Object con hijos Visual, Colliders, Hand Grab, Controller Grab y SFX, y poner el modelo 3D en Visual", "En Root Grab Object agregar el componente Rigidbody (características físicas)", "Agregar el componente Grabbable (toma la referencia del Rigidbody) y definir las físicas", "En Colliders definir los colliders que cubren la zona de agarre", "En Hand Grab agregar Hand Grab Interactable y asignar referencias a Grabbable y Rigidbody", "En Controller Grab agregar Grab Interactable y asignar manualmente las referencias"], "why": "Primero la jerarquía y la física (Rigidbody + Grabbable), después los colliders detectan el agarre, y por último los interactables de mano y control conectan con el Grabbable."}, {"t": "Sonido al agarrar y soltar (Pointable Event Wrapper)", "prompt": "Ordená el flujo para reproducir sonidos al agarrar y soltar un objeto, sin programar.", "steps": ["En Root Grab Object agregar el componente Pointable Unity Event Wrapper y referenciar el Grabbable", "En el objeto SFX crear dos vacíos: Select y Release", "En ambos agregar un Audio Source y desactivar Play On Awake", "Asignar el audio de agarrar en Select y el de soltar en Release", "Conectar When Select al Audio Source Play del objeto Select", "Conectar When Release al Audio Source Play del objeto Release"], "why": "El Pointable Unity Event Wrapper expone los eventos Select/Release que se enganchan a los Audio Source, que deben tener Play On Awake desactivado para sonar solo en el evento."}, {"t": "Manos y controles simultáneos (multimodal)", "prompt": "Ordená el flujo para habilitar manos y controles al mismo tiempo.", "steps": ["Crear la escena Basic, guardarla como Hands Controllers Interaction y eliminar la Main Camera", "En Building Blocks agregar Camera Rig, Hand Tracking, Virtual Hands y Grab Interaction", "En Camera Rig &gt; OVR Manager activar Simultaneous Hands and Controllers y poner Hand Tracking Support en Controllers and Hands", "En el OVR Hand de cada mano cambiar Show State a Always", "En el Hand Grab Interactor configurar el Hand Grab Visual con la Synthetic Hand y el data source del control", "Agregar el prefab OVR Controller Driven Hands y poner Show State en Always en los controles sintéticos"], "why": "El modo multimodal exige primero configurar el OVR Manager y el Show State Always, y luego enlazar la mano sintética con el data source del control para que convivan."}, {"t": "Crear una pose de agarre (Hand Grab Pose)", "prompt": "Ordená el flujo para crear una pose de agarre personalizada.", "steps": ["En el objeto Hand Grab (que tiene el Hand Grab Interactable) hacer clic en Add Hand Grab Pose", "Abrir el objeto generado y buscar el hijo Hand Grab Pose", "Mover y rotar ese objeto hacia el punto de agarre", "Ajustar cada dedo usando los círculos de cada falange", "Configurar en el script Hand Grab Pose el tipo de mano y el Fingers Freedom (Bloqueado/Restringido/Libre) de cada dedo"], "why": "La pose se genera desde el Hand Grab Interactable; después se posiciona la mano virtual sobre el punto de agarre y se ajustan dedos y libertad para que calce."}, {"t": "Crear la pose espejo para la otra mano", "prompt": "Ordená el flujo para reflejar una pose de agarre a la otra mano.", "steps": ["En el script Hand Grab Interactable hacer clic en Create Mirror Hand Grab Interactable", "Verificar que se crea el objeto con el sufijo mirror, ya configurado para la otra mano", "Ajustar la rotación si hace falta (por ejemplo Y: 180) para que calce desde el mismo ángulo"], "why": "El botón de mirror evita rehacer la pose dedo por dedo: refleja la pose existente y solo puede requerir corregir la rotación."}, {"t": "Agregar múltiples puntos de agarre a un objeto", "prompt": "Ordená el flujo para sumar un segundo punto de agarre (ej. agarrar un palo de las dos puntas).", "steps": ["Dentro del objeto crear un nuevo vacío (por ejemplo Hand Grab)", "Agregar el componente Hand Grab Interactable", "Verificar que las referencias al Grabbable y al Rigidbody estén correctas", "Añadir la pose y posicionar la mano sobre la nueva zona de agarre", "Crear la pose espejo y asegurar que los colliders cubran cada zona de agarre"], "why": "Cada punto de agarre es otro Hand Grab Interactable con sus referencias y su pose; los colliders deben cubrir cada zona para que el agarre se detecte."}, {"t": "Configurar el Snap Interactor en el objeto que se mueve", "prompt": "Ordená el flujo para agregar el Snap Interactor a un objeto agarrable.", "steps": ["En el objeto padre activar Is Trigger en su Collider", "Dentro del objeto crear un vacío llamado Snap Interactor", "Agregar el componente Snap Interactor", "Referenciar en Pointable Element el Grabbable (el ISDK Hand Grab Interaction)", "Referenciar el Rigidbody del objeto"], "why": "El Snap Interactor vive en el objeto móvil y necesita el Grabbable como Pointable Element y el Rigidbody para saber que se agarra/suelta y mover el objeto."}, {"t": "Crear el Snap Interactable (destino del Snap)", "prompt": "Ordená el flujo para crear el destino donde encaja el objeto.", "steps": ["Fuera del objeto crear un vacío llamado Snap Interactable y ubicarlo donde debe encajar", "Agregar un Box Collider que define la zona donde se activa el Snap", "Agregar un Rigidbody, desactivar Use Gravity y activar Is Kinematic", "Agregar el componente Snap Interactable"], "why": "El destino se ubica donde se quiere que encaje; el collider define la zona de activación y el Rigidbody kinematico evita que caiga, antes de sumar el Snap Interactable."}, {"t": "Crear el visual de la zona del Snap", "prompt": "Ordená el flujo para mostrar y ocultar un visual de la zona de Snap.", "steps": ["Dentro de Snap Interactable crear un cubo un poco más grande llamado Snap Visual", "Crear un material transparente (Rendering Mode Transparent, color verde) y asignarlo al cubo", "Eliminar el collider del cubo visual", "Agregar el componente Interactable Unity Event Wrapper y referenciar el Snap Interactable", "Conectar When Select al SetActive(false) del cubo visual (ocultarlo al encajar)", "Conectar When Unselect al SetActive(true) (mostrarlo al sacar el objeto)"], "why": "El visual transparente marca la zona; el Interactable Unity Event Wrapper usa Select/Unselect para ocultar el cubo cuando el objeto encaja y mostrarlo cuando se saca."}, {"t": "Varios Snaps con punto por defecto y retorno por tiempo", "prompt": "Ordená el flujo para manejar varios Snaps con default y time out.", "steps": ["Duplicar el Snap las veces necesarias y ubicar cada uno en su posición", "Seleccionar el Snap Interactor y abrir Options", "En Snap Pose Transform definir el pivote del objeto al moverse al Snap", "En Default Interactable referenciar el Snap predeterminado", "En Time Out Interactable referenciar el Snap al que el objeto regresa", "En Time Out poner el tiempo de regreso (ej. 3 segundos)"], "why": "Con varios Snaps, las Options del Snap Interactor definen el pivote, el punto inicial (Default) y a cuál vuelve el objeto tras un tiempo (Time Out)."}, {"t": "Filtrar con qué Snaps encaja el objeto (Tags)", "prompt": "Ordená el flujo para limitar con qué Snaps encaja un objeto usando tags.", "steps": ["Seleccionar todos los Snaps y agregar el componente Tag Set", "Asignar una etiqueta a cada Snap (por ejemplo cube o sphere)", "En el Snap Interactor agregar el componente Tag Set Filter", "En Options definir Required Tags y Excluded Tags", "Referenciar el Tag Set Filter dentro del Snap Interactor en Options &gt; Interactable Filters"], "why": "El filtrado por tags requiere un Tag Set en los Snaps y un Tag Set Filter en el Interactor con Required/Excluded Tags, enganchado en Interactable Filters."}, {"t": "Crear un Canvas y habilitar interacción (Ray y Poke)", "prompt": "Ordená el flujo para crear un Canvas e interactuar con él desde el Interaction SDK.", "steps": ["Crear un vacío con Create Empty llamado UI y posicionarlo", "Clic derecho sobre UI &gt; UI &gt; Canvas", "Clic derecho sobre el Canvas &gt; Interaction SDK &gt; Add Ray Interaction y hacer Fix (pasa a World Space y agrega el módulo)", "En Settings elegir manos, controles o ambos y crear", "Clic derecho sobre el Canvas &gt; Interaction SDK &gt; Add Poke Interaction y crear"], "why": "Desde la versión 62 Meta automatiza el Canvas; Ray habilita interacción a distancia y Poke interacción directa, y el Canvas debe estar en World Space."}, {"t": "Crear una zona de teleport con NavMesh", "prompt": "Ordená el flujo para definir una zona de teletransportación mediante NavMesh.", "steps": ["Crear un vacío llamado Teleport First Floor y hacer Reset en el Transform", "Add Component &gt; Teleport Interactable", "En el objeto del piso agregar NavMesh Surface y ajustar el agente en Window &gt; AI &gt; Navigation (Radius 0.15, Collect Objects = Current Object Hierarchy)", "Hacer Bake para generar solo esa zona", "Referenciar el NavMesh Surface en el Teleport Interactable", "Add Component &gt; Reticle Data Teleport"], "why": "El NavMesh define automáticamente por dónde puede desplazarse el jugador; el Teleport Interactable toma esa zona y el Reticle Data Teleport cambia lo que se muestra al final del rayo."}, {"t": "Crear una zona de teleport con Collider (escalera)", "prompt": "Ordená el flujo para crear una zona de teletransportación usando un Collider Surface.", "steps": ["Crear un vacío llamado Teleport Stairs y hacer Reset en el Transform", "Add Component &gt; Teleport Interactable y elegir Collider Surface como superficie", "Dentro crear un vacío Collider y Add Component &gt; Box Collider", "Alinear el collider con la escalera (posición y rotación)", "Referenciar el Collider en el Collider Surface", "Add Component &gt; Reticle Data Teleport"], "why": "Cuando la superficie es inclinada (escalera) se usa un Box Collider alineado como Collider Surface; hay que referenciarlo o la zona no funciona."}, {"t": "Crear una zona de teleport inválida", "prompt": "Ordená el flujo para definir una zona donde NO se puede teletransportar.", "steps": ["Crear un vacío llamado Invalid Teleport y hacer Reset en el Transform", "Add Component &gt; Teleport Interactable y desactivar Allow Teleport", "En Options bajar el Score (ej. -10) para que pierda contra las otras zonas", "Agregar una Surface, rotarla a horizontal y referenciarla", "Add Component &gt; Reticle Data Teleport y cambiar el modo a inválido"], "why": "Para bloquear una zona se desactiva el teleport y se baja el score; el reticle en modo inválido muestra el rayo en rojo al apuntar al vacío."}, {"t": "Teleport a un punto fijo (hotspot)", "prompt": "Ordená el flujo para teletransportarte a un punto fijo (hotspot) sin marearte.", "steps": ["Crear un GameObject donde querés caer", "Clic derecho &gt; Interaction SDK &gt; Add Teleport Interaction", "Se genera el Hotspot (destino absoluto)", "El Teleport Interactor en la mano apunta al hotspot", "El reticle marca el destino y al soltar te teletransporta"], "why": "El Hotspot es el destino fijo; el Teleport Interactor apunta, el reticle confirma y al seleccionar te mueve sin movimiento continuo (por eso no marea)."}, {"t": "Girar de a pasos (snap turning)", "prompt": "Ordená el flujo para girar de a pasos con el control.", "steps": ["Tener el rig con locomoción configurada", "Ubicar el Controller Turner Interactor en el control", "En el Turner Event Broadcaster elegir el modo Snap", "Setear los grados del giro (ej. 45)", "Probar: el joystick gira de golpe en pasos fijos"], "why": "El Turner Interactor genera el input y el Turner Event Broadcaster lo convierte en giros. En modo Snap el giro instantáneo marea menos que el continuo."}];
SIMULACROS[3] = {id:4, title:'Simulacro 4 — Flujos paso a paso', desc:'Solo ejercicios de armar flujos: orden\u00e1 los pasos de cada procedimiento del curso. 19 flujos extra\u00eddos de todos los apuntes.', questions: FLUJOS_SIM4.map(f => ({type:'order', label:'Flujo \u00b7 '+f.t, q:'<p>'+f.prompt+'</p>', steps:f.steps, why:'<p>'+f.why+'</p>'}))};

function normalize(s){return (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();}
function scoreWritten(text,keywords){
  const t=normalize(text);
  if(!t)return {score:0,label:'❌ Sin responder'};
  const hits=keywords.filter(k=>t.includes(normalize(k)));
  const ratio=hits.length/keywords.length;
  if(ratio>=0.65)return {score:1,label:'✅ Correcto'};
  if(ratio>=0.35)return {score:0.5,label:'⚡ Parcialmente correcto'};
  return {score:0,label:'❌ Necesita repaso'};
}

// ── STATE ─────────────────────────────────────────────────────────────────────

let seen=new Set(),currentZone=null,currentCard=0,mcAnswered=false;
let curPerm=null,curId=null;   // orden barajado y id de la card en pantalla (para persistir la respuesta MC)

function load(){try{seen=new Set(JSON.parse(localStorage.getItem('pd_seen')||'[]'))}catch{seen=new Set()}}
function save(){localStorage.setItem('pd_seen',JSON.stringify([...seen]))}
// Respuestas MC: { "<zoneId>_<card>": {o:[...orden barajado], c:<idx elegido en ese orden>} }
function loadMC(){try{return JSON.parse(localStorage.getItem('pd_mc')||'{}')}catch{return{}}}
function saveMC(o){localStorage.setItem('pd_mc',JSON.stringify(o))}
// Última card vista, para el botón "Continuar" del home: {z:<zoneId>, c:<cardIndex>}
function savePos(z,c){localStorage.setItem('pd_pos',JSON.stringify({z,c}))}
function loadPos(){try{return JSON.parse(localStorage.getItem('pd_pos')||'null')}catch{return null}}
function total(){return ZONES.reduce((s,z)=>s+z.qs.length,0)}
function zonesDone(){return ZONES.filter(z=>z.qs.every((_,i)=>seen.has(z.id+'_'+i))).length}
function exams(){return parseInt(localStorage.getItem('pd_exams')||'0')}
function lastNota(){return localStorage.getItem('pd_nota')||'—'}

function updateHUD(){
  load();
  const r=seen.size,t=total(),z=zonesDone(),e=exams(),n=lastNota();
  document.getElementById('hud-rev').textContent=r+'/'+t;
  document.getElementById('hud-zones').textContent=z+'/9';
  document.getElementById('hud-exams').textContent=e;
  document.getElementById('hud-nota').textContent=n;
  document.getElementById('stat-rev').textContent=r+'/'+t;
  document.getElementById('stat-zones').textContent=z+'/9';
  document.getElementById('stat-exams').textContent=e;
  document.getElementById('stat-nota').textContent=n;
}

function resetAll(){
  if(!confirm('¿Resetear todo el progreso?'))return;
  localStorage.removeItem('pd_seen');localStorage.removeItem('pd_exams');localStorage.removeItem('pd_nota');localStorage.removeItem('pd_sims');
  localStorage.removeItem('pd_pos');localStorage.removeItem('pd_mc');
  seen=new Set();updateHUD();renderZones();renderSimCards();renderContinue();
}

// Botón "Continuá donde quedaste" en el home (lee pd_pos)
function renderContinue(){
  const el=document.getElementById('continue-cta');if(!el)return;
  const pos=loadPos();
  const zi=pos?ZONES.findIndex(z=>z.id===pos.z):-1;
  if(zi<0||!pos||pos.c==null||pos.c>=ZONES[zi].qs.length){el.innerHTML='';return;}
  const z=ZONES[zi];
  el.innerHTML=`<button class="continue-btn" onclick="openZoneAt(${zi},${pos.c})">
      <span class="continue-lbl">▸ Continuá donde quedaste</span>
      <span class="continue-where" style="color:${z.color}">${z.icon} ${z.name} · card ${pos.c+1}/${z.qs.length}</span>
    </button>`;
}

// ── SCREENS ───────────────────────────────────────────────────────────────────

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}

// ── ZONES ─────────────────────────────────────────────────────────────────────

function renderZones(){
  load();
  const g=document.getElementById('zones-grid');
  g.innerHTML='';
  ZONES.forEach((zone,zi)=>{
    const sc=zone.qs.filter((_,i)=>seen.has(zone.id+'_'+i)).length;
    const pct=Math.round(sc/zone.qs.length*100);
    const mc=zone.qs.filter(q=>q.mc).length;
    const el=document.createElement('div');
    el.className='zone-card';
    el.style.borderLeftColor=zone.color;
    el.innerHTML=`<div class="zone-icon">${zone.icon}</div>
      <div class="zone-name">${zone.name}</div>
      <div class="zone-desc">${zone.desc}</div>
      <div class="zone-prog"><div class="zone-prog-fill" style="width:${pct}%;background:${zone.color}"></div></div>
      <div class="zone-sub">${sc}/${zone.qs.length} revisados${mc?' · '+mc+' MC':''}</div>`;
    el.onclick=()=>openZone(zi);
    g.appendChild(el);
  });
  renderContinue();
}

function openZone(zi){
  load();
  const z=ZONES[zi];
  // retomar en la última card vista de esta zona (si no vio ninguna, la 0)
  let last=0;for(let i=z.qs.length-1;i>=0;i--){if(seen.has(z.id+'_'+i)){last=i;break;}}
  openZoneAt(zi,last);
}

function openZoneAt(zi,card){
  currentZone=zi;currentCard=card||0;
  const z=ZONES[zi];
  document.getElementById('study-zone-name').textContent=z.name;
  document.getElementById('study-zone-name').style.color=z.color;
  renderCard();
  showScreen('screen-study');
}

// ── CONCEPT (modo estudio: contenido + multiple choice) ─────────────────────────

function renderCard(){
  const z=ZONES[currentZone],c=z.qs[currentCard];
  load();
  const id=z.id+'_'+currentCard;
  seen.add(id);save();savePos(z.id,currentCard);updateHUD();
  mcAnswered=false;

  const tagEl=document.getElementById('concept-tag');
  tagEl.textContent=z.name+(c.tag?' · '+c.tag:'');
  tagEl.style.color=z.color;
  const titleEl=document.getElementById('concept-title');
  titleEl.textContent=c.title||c.q;
  titleEl.style.color=z.color;
  document.getElementById('concept-body').innerHTML=c.body+(c.ej?`<div class="concept-ej"><b>En la práctica</b>${c.ej}</div>`:'');
  document.getElementById('concept-quiz').innerHTML=`<span class="quiz-label">Comprobá que lo entendiste</span>${c.q}`;
  document.getElementById('card-counter').textContent=(currentCard+1)+' / '+z.qs.length;
  document.getElementById('study-prog').textContent=seen.size+'/'+total()+' revisados';
  document.getElementById('btn-prev').disabled=currentCard===0;
  document.getElementById('btn-next').disabled=currentCard===z.qs.length-1;
  document.getElementById('mc-feedback-area').innerHTML='';

  const letters='ABCD';
  const saved=loadMC()[id];                        // respuesta previa de esta card (si la hubo)
  // orden de opciones: el guardado (para verla igual que la dejaste) o uno nuevo barajado
  const perm=(saved&&Array.isArray(saved.o)&&saved.o.length===c.mc.length)?saved.o:shuffleSteps(c.mc.length);
  const cPos=perm.indexOf(c.correct);              // posición del correcto en el orden mostrado
  curPerm=perm;curId=id;
  document.getElementById('mc-area').innerHTML=perm.map((orig,disp)=>
    `<button class="mc-opt" id="mc-opt-${disp}" onclick="selectMC(${disp},${cPos})"><span class="mc-letter">${letters[disp]}</span><span>${c.mc[orig]}</span></button>`
  ).join('');

  // si ya la habías respondido, restaurar el estado marcado (sin re-barajar)
  if(saved&&saved.c!=null){mcAnswered=true;showMCResult(saved.c,cPos,c);}

  window.scrollTo(0,0);
  renderZones();
}

// Pinta el resultado de un MC (deshabilita, marca elegido/correcto, muestra feedback).
// Lo usan selectMC (al responder) y renderCard (al restaurar una respuesta guardada).
function showMCResult(chosen, correct, c){
  const isCorrect=chosen===correct;
  document.querySelectorAll('.mc-opt').forEach(b=>b.disabled=true);
  document.getElementById('mc-opt-'+chosen).classList.add(isCorrect?'correct':'wrong');
  if(!isCorrect)document.getElementById('mc-opt-'+correct).classList.add('correct');
  document.getElementById('mc-feedback-area').innerHTML=
    `<div class="mc-feedback ${isCorrect?'ok':'ko'}" style="text-align:left;line-height:1.6">`+
    `<strong>${isCorrect?'✓ Correcto':'✗ Incorrecto'}</strong> — ${c.why||''}</div>`;
}

function selectMC(chosen, correct){
  if(mcAnswered)return;
  mcAnswered=true;
  const c=ZONES[currentZone].qs[currentCard];
  showMCResult(chosen,correct,c);
  const mc=loadMC();mc[curId]={o:curPerm,c:chosen};saveMC(mc);   // persistir la respuesta
}

function resetCard(){
  const z=ZONES[currentZone],id=z.id+'_'+currentCard;
  if(!confirm('¿Resetear esta card? Se borra tu respuesta y vuelve a quedar sin responder.'))return;
  load();seen.delete(id);save();
  const mc=loadMC();delete mc[id];saveMC(mc);
  renderCard();
}

function prevCard(){if(currentCard>0){currentCard--;renderCard()}}
function nextCard(){if(currentCard<ZONES[currentZone].qs.length-1){currentCard++;renderCard()}}

// ── SIM CARDS (home) ────────────────────────────────────────────────────────────

function simsDone(){try{return JSON.parse(localStorage.getItem('pd_sims')||'[]')}catch{return[]}}

function renderSimCards(){
  const done=simsDone();
  const g=document.getElementById('sim-grid');
  g.innerHTML=SIMULACROS.map(s=>`
    <div class="sim-card">
      <div class="sim-n">Simulacro ${s.id}</div>
      <h3>${s.title.replace(/^Simulacro \d+ — /,'')}</h3>
      <p>${s.desc}</p>
      <div class="sim-foot">
        <button class="sim-start" onclick="startExam(${s.id})">${done.includes(s.id)?'Repetir':'Empezar'}</button>
        ${done.includes(s.id)?'<span class="sim-done">✓ Completado</span>':''}
      </div>
    </div>`).join('');
}

// ── EXAM ENGINE ─────────────────────────────────────────────────────────────────

let exam=null;
function getSim(id){return SIMULACROS.find(s=>s.id===id)}

function shuffleSteps(n){
  const a=Array.from({length:n},(_,i)=>i);
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  if(n>1&&a.every((v,i)=>v===i)){[a[0],a[1]]=[a[1],a[0]];}
  return a;
}

function startExam(id){
  const sim=getSim(id);
  exam={simId:id,answers:{},shuf:{},submitted:false,warned:false};
  sim.questions.forEach((q,i)=>{
    if(q.type==='vf')exam.answers[i]={};
    else if(q.type==='order')exam.answers[i]={picked:[],pool:shuffleSteps(q.steps.length)};
    else if(q.type==='mc'){
      exam.answers[i]=null;
      const p=shuffleSteps(q.opts.length);                       // barajar opciones una vez por intento
      exam.shuf[i]={opts:p.map(k=>q.opts[k]),correct:p.indexOf(q.correct)};
    }
    else exam.answers[i]='';
  });
  document.getElementById('exam-title').textContent=sim.title;
  document.getElementById('exam-desc').textContent=sim.desc;
  document.getElementById('exam-warn').textContent='';
  renderExam();
  showScreen('screen-exam');
}

function typeLabel(t){return {mc:'Opción múltiple',vf:'Verdadero / Falso',written:'Respuesta escrita',match:'Relacionar',code:'Corregir código',order:'Ordenar pasos'}[t]||t}
function escapeHtml(s){return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}

// Devuelve la pregunta tal como se presenta: para mc, con las opciones barajadas
// (espacio de display). Para el resto, la pregunta sin cambios.
function examQ(i){
  const q=getSim(exam.simId).questions[i];
  if(q.type==='mc'&&exam.shuf&&exam.shuf[i])return {...q,opts:exam.shuf[i].opts,correct:exam.shuf[i].correct};
  return q;
}

function renderExam(){
  const sim=getSim(exam.simId);
  document.getElementById('exam-content').innerHTML=sim.questions.map((q,i)=>renderQuestion(examQ(i),i)).join('');
  bindExam();
  updateExamProg();
}

function renderQuestion(q,i){
  const letters='ABCD';
  let inner='';
  if(q.type==='mc'){
    inner='<div class="mc-wrap">'+q.opts.map((o,k)=>
      `<button class="exam-opt${exam.answers[i]===k?' sel':''}" data-q="${i}" data-opt="${k}"><span class="mc-letter">${letters[k]}</span><span>${o}</span></button>`
    ).join('')+'</div>';
  } else if(q.type==='vf'){
    inner='<ul class="vf-list">'+q.statements.map((s,k)=>{
      const v=exam.answers[i][k];
      return `<li class="vf-item"><span class="vf-num">${k+1}.</span><span class="vf-text">${s.text}</span><span class="vf-btns">
        <button class="vf-btn${v===true?' sel':''}" data-q="${i}" data-st="${k}" data-val="t">V</button>
        <button class="vf-btn${v===false?' sel':''}" data-q="${i}" data-st="${k}" data-val="f">F</button>
      </span></li>`;
    }).join('')+'</ul>';
  } else if(q.type==='order'){
    const st=exam.answers[i];
    const seq=st.picked.length?st.picked.map((s,k)=>`<div class="seq-item"><span>${k+1}</span>${q.steps[s]}</div>`).join(''):'<div class="seq-empty">Tocá los pasos en orden de ejecución...</div>';
    const pool=st.pool.filter(s=>!st.picked.includes(s)).map(s=>`<button data-q="${i}" data-pick="${s}">${q.steps[s]}</button>`).join('');
    inner=`<div class="seq-label">Tu secuencia</div><div class="seq">${seq}</div>`+
      (st.picked.length<q.steps.length?`<div class="seq-label">Pasos disponibles</div><div class="seq-pool">${pool}</div>`:'')+
      (st.picked.length?`<button class="seq-reset" data-q="${i}" data-reset="1">Reiniciar</button>`:'');
  } else {
    inner=`<textarea class="exam-ta" data-q="${i}" placeholder="Escribí tu respuesta...">${escapeHtml(exam.answers[i]||'')}</textarea>`;
  }
  return `<div class="exam-q" id="exam-q-${i}">
    <div class="exam-qhead"><span class="exam-qnum">${i+1}</span><span class="exam-qtype">${typeLabel(q.type)}</span></div>
    <div class="exam-qtext"><strong>${q.label}.</strong> ${q.q}</div>
    ${inner}
  </div>`;
}

function bindExam(){
  document.querySelectorAll('.exam-opt').forEach(b=>b.onclick=()=>{
    if(exam.submitted)return;
    exam.answers[+b.dataset.q]=+b.dataset.opt;renderExam();
  });
  document.querySelectorAll('.vf-btn[data-st]').forEach(b=>b.onclick=()=>{
    if(exam.submitted)return;
    exam.answers[+b.dataset.q][+b.dataset.st]=(b.dataset.val==='t');renderExam();
  });
  document.querySelectorAll('.seq-pool button[data-pick]').forEach(b=>b.onclick=()=>{
    if(exam.submitted)return;
    exam.answers[+b.dataset.q].picked.push(+b.dataset.pick);renderExam();
  });
  document.querySelectorAll('[data-reset]').forEach(b=>b.onclick=()=>{
    if(exam.submitted)return;
    exam.answers[+b.dataset.q].picked=[];renderExam();
  });
  document.querySelectorAll('.exam-ta').forEach(t=>t.oninput=()=>{exam.answers[+t.dataset.q]=t.value;updateExamProg();});
}

function isAnswered(q,a){
  if(q.type==='mc')return a!==null&&a!==undefined;
  if(q.type==='vf')return Object.keys(a).length===q.statements.length;
  if(q.type==='order')return a.picked.length===q.steps.length;
  return (a||'').trim().length>0;
}

function updateExamProg(){
  const sim=getSim(exam.simId);
  const n=sim.questions.filter((q,i)=>isAnswered(q,exam.answers[i])).length;
  document.getElementById('exam-prog').textContent=n+'/'+sim.questions.length+' respondidas';
}

function confirmExitExam(){
  if(exam&&!exam.submitted&&!confirm('¿Salir del examen? Vas a perder las respuestas de este intento.'))return;
  exam=null;showScreen('screen-home');
}

// ── SCORING + RESULTS ───────────────────────────────────────────────────────────

function scoreQuestion(q,a){
  if(q.type==='mc')return {score:a===q.correct?1:0,label:a===q.correct?'✅ Correcto':'❌ Incorrecto'};
  if(q.type==='vf'){
    const tot=q.statements.length;
    let hit=0;q.statements.forEach((s,k)=>{if(a[k]===s.answer)hit++;});
    const ratio=hit/tot;
    const sc=ratio===1?1:(ratio>=0.5?0.5:0);
    return {score:sc,label:(sc===1?'✅':sc===0.5?'⚡':'❌')+' '+hit+'/'+tot+' correctas'};
  }
  if(q.type==='order'){
    const ok=a.picked.length===q.steps.length&&a.picked.every((s,i)=>s===i);
    return {score:ok?1:0,label:ok?'✅ Orden correcto':'❌ Orden incorrecto'};
  }
  return scoreWritten(a,q.keywords);
}

// ── Validación semántica (embeddings en navegador, self-host; fallback a keywords) ──
let _semExtractor=null,_semReady=false,_semLoading=null;
const _semRefCache=new Map();
async function ensureSemModel(){
  if(_semReady)return true;
  if(_semLoading)return _semLoading;
  _semLoading=(async()=>{
    try{
      const T=await import('/assets/transformers/transformers.min.js');
      T.env.allowRemoteModels=false;
      T.env.localModelPath='/models/';
      T.env.backends.onnx.wasm.wasmPaths='/assets/transformers/';
      _semExtractor=await T.pipeline('feature-extraction','Xenova/paraphrase-multilingual-MiniLM-L12-v2',{dtype:'q8'});
      _semReady=true;return true;
    }catch(e){console.warn('Modelo semántico no disponible; corrijo por keywords.',e);return false;}
  })();
  return _semLoading;
}
async function _semEmbed(t){const o=await _semExtractor(t,{pooling:'mean',normalize:true});return o.data;}
function _semCos(a,b){let s=0;for(let i=0;i<a.length;i++)s+=a[i]*b[i];return s;}
function stripHtml(h){const d=document.createElement('div');d.innerHTML=h||'';return (d.textContent||'').replace(/\s+/g,' ').trim();}
async function _semRef(q){if(_semRefCache.has(q))return _semRefCache.get(q);const v=await _semEmbed(stripHtml(q.answer));_semRefCache.set(q,v);return v;}
async function scoreSemantic(text,q){
  const kw=scoreWritten(text,q.keywords);              // piso/fallback léxico
  if(!_semReady||!normalize(text)||!q.answer)return kw;
  try{
    const sim=_semCos(await _semEmbed(text),await _semRef(q));
    const sem=sim>=0.70?1:(sim>=0.50?0.5:0);           // umbrales (validados)
    if(sem<=kw.score)return kw;                        // máx(léxico, semántico)
    return {score:sem,label:sem===1?'✅ Correcto':'⚡ Parcialmente correcto'};
  }catch(e){return kw;}
}
function semOverlay(show){
  let el=document.getElementById('sem-overlay');
  if(show){
    if(!el){
      el=document.createElement('div');el.id='sem-overlay';
      el.style.cssText='position:fixed;inset:0;z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:rgba(8,10,18,.82);backdrop-filter:blur(4px);font-family:monospace;color:#fff;text-align:center;padding:24px';
      el.innerHTML='<div style="width:38px;height:38px;border:3px solid rgba(255,255,255,.2);border-top-color:#1F66F2;border-radius:50%;animation:semspin .8s linear infinite"></div><div style="font-size:14px;max-width:380px;line-height:1.5">Analizando respuestas con comprensión semántica…<br><span style="opacity:.6;font-size:12px">La primera vez puede tardar mientras se descarga el modelo (después queda cacheado).</span></div><style>@keyframes semspin{to{transform:rotate(360deg)}}</style>';
      document.body.appendChild(el);
    }
    el.style.display='flex';
  }else if(el){el.style.display='none';}
}

async function submitExam(){
  const sim=getSim(exam.simId);
  const pend=sim.questions.filter((q,i)=>!isAnswered(q,exam.answers[i])).length;
  if(pend>0&&!exam.warned){
    document.getElementById('exam-warn').textContent='Quedan '+pend+' pregunta(s) sin responder. Tocá "Entregar examen" otra vez para entregar igual (cuentan 0).';
    sim.questions.forEach((q,i)=>{const el=document.getElementById('exam-q-'+i);if(el)el.classList.toggle('warn',!isAnswered(q,exam.answers[i]));});
    exam.warned=true;
    return;
  }
  exam.submitted=true;
  const TEXT=new Set(['written','code','match']);
  if(sim.questions.some(q=>TEXT.has(q.type))){semOverlay(true);await ensureSemModel();}
  let total=0;const detail=[];
  for(let i=0;i<sim.questions.length;i++){
    const q=examQ(i);                              // mc: opciones/correct en espacio de display
    const r=TEXT.has(q.type)?await scoreSemantic(exam.answers[i],q):scoreQuestion(q,exam.answers[i]);
    total+=r.score;detail.push({q,i,r});
  }
  semOverlay(false);
  const score=sim.questions.length?Math.round(total/sim.questions.length*100)/10:0;
  localStorage.setItem('pd_exams',(parseInt(localStorage.getItem('pd_exams')||'0')+1));
  localStorage.setItem('pd_nota',score+'/10');
  const done=simsDone();if(!done.includes(exam.simId)){done.push(exam.simId);localStorage.setItem('pd_sims',JSON.stringify(done));}
  updateHUD();renderSimCards();
  renderResults(sim,detail,score);
  showScreen('screen-results');
}

function renderResults(sim,detail,score){
  document.getElementById('res-title').textContent=sim.title;
  document.getElementById('res-score').textContent=score+' / 10';
  let rank,sub;
  if(score>=8){rank='🏆 Aprobado con mérito';sub='Dominás el tema. Repasá solo lo que quedó en amarillo o rojo.';}
  else if(score>=6){rank='✅ Aprobado';sub='Buen nivel. Reforzá las preguntas que no salieron.';}
  else{rank='📚 A repasar';sub='Volvé a las zonas de estudio antes de reintentar.';}
  document.getElementById('res-rank').textContent=rank;
  document.getElementById('res-sub').textContent=sub;
  document.getElementById('res-content').innerHTML=detail.map(({q,i,r})=>{
    const cls=r.score===1?'ok':(r.score>=0.5?'half':'no');
    return `<div class="res-item">
      <div class="res-head" onclick="this.nextElementSibling.classList.toggle('show')">
        <span class="res-badge ${cls}">${r.label}</span>
        <span class="res-qlabel">${i+1}. ${q.label}</span>
        <span class="res-pts">${r.score} pt</span>
      </div>
      <div class="res-body">${resultBody(q,exam.answers[i])}</div>
    </div>`;
  }).join('');
}

function resultBody(q,a){
  const letters='ABCD';
  let your='',correct='';
  if(q.type==='mc'){
    your=(a!=null)?letters[a]+'. '+q.opts[a]:'(sin responder)';
    correct='<span class="ans-correct">'+letters[q.correct]+'. '+q.opts[q.correct]+'</span>';
  } else if(q.type==='vf'){
    correct=q.statements.map((s,k)=>{const ok=a[k]===s.answer;return (k+1)+'. '+(ok?'✅':'❌')+' <strong>'+(s.answer?'V':'F')+'</strong> — '+s.exp;}).join('<br>');
  } else if(q.type==='order'){
    your=a.picked.length?a.picked.map((s,k)=>(k+1)+'. '+q.steps[s]+(s===k?' ✅':' ❌')).join('<br>'):'(sin responder)';
    correct='<div class="flow">'+q.steps.map((s,k)=>(k+1)+'. '+s).join('<br>')+'</div>'+(q.why||'');
  } else {
    your=escapeHtml(a||'(sin responder)');
    correct=q.answer;
  }
  let html='';
  if(q.type!=='vf')html+='<div class="lbl">Tu respuesta</div><div class="your-ans">'+your+'</div>';
  html+='<div class="lbl">Respuesta correcta</div><div>'+correct+'</div>';
  return html;
}

// ── DIAGRAMAS (mapas visuales de jerarquías del SDK) ────────────────────────────
// tree:  {type:'tree', root:{label,note?,color?,children:[...]}}
// pairs: {type:'pairs', head?, rows:[{interactor,interactable,wrapper?}]}
const DIAGRAMS=[
 {id:'rig',title:'Jerarquía del OVR Camera Rig Interaction',color:'#1F66F2',
  desc:'El "súper prefab" todo-incluido del jugador: qué trae adentro y dónde encaja cada cosa.',
  type:'tree',root:{label:'OVR Camera Rig Interaction',note:'súper prefab: todo el jugador listo',color:'#1F66F2',children:[
    {label:'OVR Camera Rig',note:'cámara estéreo (un ojo por lente) + OVR Manager — la base'},
    {label:'OVR Controllers',note:'solo tracking + modelo 3D de los joysticks'},
    {label:'Synthetic Hands',note:'representación visual de las manos'},
    {label:'Locomotion Controller Group',note:'handler: ordena el movimiento → cápsula física',children:[
      {label:'Teleport'},{label:'Snap Turn / Step'},{label:'Slide (continuo + viñeta)'}]},
    {label:'Interactores (en manos y controles)',note:'la "herramienta" que actúa',children:[
      {label:'Hand Grab / Controller Grab'},{label:'Distance Grab'},{label:'Ray (láser a distancia)'},{label:'Poke (tocar con el dedo)'}]}
  ]},
  foot:'No confundir: <b>OVR Camera Rig</b> pelado = solo mirás alrededor (sin manos ni movimiento). <b>OVR Controllers</b> sueltos = solo joysticks, sin lógica de agarrar/teletransportarse.'},

 {id:'rule',title:'Regla de oro: Interactor ↔ Interactable',color:'#E8822E',
  desc:'Interactor = la herramienta que actúa · Interactable = el objeto que la recibe. Y qué Event Wrapper escucha a cada par.',
  type:'pairs',rows:[
    {interactor:'Hand Grab / Controller Grab Interactor',interactable:'Grabbable + Hand Grab Interactable',wrapper:'Pointable Unity Event Wrapper'},
    {interactor:'Snap Interactor (en el objeto móvil)',interactable:'Snap Interactable (zona destino)',wrapper:'Interactable Unity Event Wrapper'},
    {interactor:'Teleport Interactor (mano / joystick)',interactable:'Teleport Interactable (zona)',wrapper:'Reticle Data Teleport'},
    {interactor:'Ray Interactor (láser)',interactable:'Canvas World Space / Ray Interactable',wrapper:'—'},
    {interactor:'Poke Interactor (dedo)',interactable:'Canvas / Poke Interactable',wrapper:'—'}
  ]},

 {id:'grab',title:'Anatomía de un objeto agarrable',color:'#2FB57A',
  desc:'La jerarquía del Root Grab Object armado a mano y qué componente vive en cada hijo.',
  type:'tree',root:{label:'Root Grab Object',note:'Rigidbody + Grabbable (físicas del objeto)',color:'#2FB57A',children:[
    {label:'Visual',note:'el modelo 3D que se ve'},
    {label:'Colliders',note:'definen la zona de agarre (Box/Mesh)'},
    {label:'Hand Grab',note:'Hand Grab Interactable + Hand Grab Pose → ref. Grabbable y Rigidbody'},
    {label:'Controller Grab',note:'Grab Interactable → mismas referencias'},
    {label:'SFX',note:'Pointable Unity Event Wrapper → When Select / When Release a un Audio Source'}
  ]},
  foot:'Atajo: el <b>Grab Wizard</b> (Add Grab Interaction) arma todo esto solo — pero primero hay que hacer <b>Fix</b> para que agregue el Rigidbody que falta.'},

 {id:'loco',title:'Stack de Locomoción + tipos de Teleport',color:'#7A33B5',
  desc:'Cómo se mueve el cuerpo del jugador respetando físicas, y las variantes de zona de teleport.',
  type:'tree',root:{label:'Player Controller / Camera Rig',note:'el "cuerpo" del jugador',color:'#7A33B5',children:[
    {label:'Rigidbody / Character Controller',note:'colisiones: no atraviesa paredes ni cae al vacío'},
    {label:'Locomotion Handler',note:'parámetros del movimiento (ej. velocidad de salto)'},
    {label:'Locomotion Controller Group',note:'agrupa y ordena las mecánicas',children:[
      {label:'Teleport'},{label:'Snap Turn'},{label:'Slide'}]},
    {label:'Teleport Interactable (zona de destino)',note:'dónde puede aterrizar el jugador',children:[
      {label:'NavMesh Surface',note:'bake; genera la zona automáticamente'},
      {label:'Collider Surface',note:'para superficies inclinadas (escalera)'},
      {label:'Hotspot',note:'punto fijo (Add Teleport Interaction)'},
      {label:'Inválida',note:'Allow Teleport off + score bajo → reticle rojo'},
      {label:'+ Reticle Data Teleport',note:'qué se muestra al final del rayo'}]}
  ]}}
];

function dgTree(node){
  const style=node.color?` style="border-left-color:${node.color}"`:'';
  const note=node.note?`<span class="dg-note">${node.note}</span>`:'';
  const kids=(node.children&&node.children.length)?`<div class="dg-children">${node.children.map(dgTree).join('')}</div>`:'';
  return `<div class="dg-node"><div class="dg-label"${style}><b>${node.label}</b>${note}</div>${kids}</div>`;
}

function dgPairs(rows){
  const head=`<div class="dg-pair dg-pair-head"><span>Interactor — la herramienta</span><span>Interactable — lo que recibe</span><span>Event Wrapper</span></div>`;
  return head+rows.map(r=>
    `<div class="dg-pair"><span class="dg-pair-a">${r.interactor}</span><span class="dg-pair-b">${r.interactable}</span><span class="dg-pair-c">${r.wrapper||'—'}</span></div>`
  ).join('');
}

function renderDiagrams(){
  document.getElementById('diagrams-content').innerHTML=DIAGRAMS.map(d=>{
    const body=d.type==='pairs'?dgPairs(d.rows):dgTree(d.root);
    const foot=d.foot?`<div class="dg-foot">${d.foot}</div>`:'';
    return `<div class="diagram-block">
      <h3 class="dg-title" style="color:${d.color}">${d.title}</h3>
      <p class="dg-desc">${d.desc}</p>
      <div class="dg-body">${body}</div>${foot}</div>`;
  }).join('');
}

// ── INIT ────────────────────────────────────────────────────────

load();updateHUD();renderZones();renderSimCards();renderDiagrams();
