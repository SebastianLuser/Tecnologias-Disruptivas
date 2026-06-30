# Respuestas — Práctica Iluminación y optimización

> Respuestas basadas en el material de la cátedra (*Tipos de Luces*, *Los ejes del desarrollo óptimo*, *Apunte*) y conceptos estándar de Unity / gráficos en tiempo real.

---

**1. ¿Por qué las luces dinámicas pueden afectar gravemente el rendimiento?**
Porque se **calculan en tiempo real en cada frame**, para cada objeto y píxel que afectan. Generan cálculos de iluminación constantes y, si proyectan sombras, además un **shadow map** por frame. También aumentan las **draw calls** (en forward rendering, cada luz puede agregar pasadas de render). En hardware limitado (mobile/Quest) el costo se dispara: en móviles solo pueden tenerse **pocas luces dinámicas simultáneas** antes de que el rendimiento caiga.

**2. ¿Diferencia entre iluminación realtime y bakeada?**
- **Realtime:** se **calcula en cada frame**; responde a cambios y movimiento (objetos y luces que se mueven), pero es **cara**.
- **Bakeada (baked):** se **pre-calcula una sola vez** y se guarda en texturas (**lightmaps**); **no se actualiza en runtime** pero es **muy barata**. Ideal para elementos **estáticos**.

**3. ¿Qué ventajas tiene el bake de iluminación?**
Costo **muy bajo en ejecución**, rendimiento **estable**, y permite iluminación de **alta calidad** (rebotes/GI, sombras suaves) pre-calculada. Es clave en VR/mobile. **Contra:** tarda en generarse y solo sirve para objetos estáticos.

**4. ¿Qué función cumple un lightmap?**
Es una **textura que almacena la iluminación pre-calculada** (luces y sombras) de la escena y se aplica sobre las superficies **estáticas**. Se mapea usando el canal **UV2**.

**5. ¿Por qué el UV2 no debe tener overlaps?**
Porque el lightmap guarda la **iluminación por cada punto de superficie de forma única**. Si dos caras **comparten el mismo espacio UV** (overlap), la luz/sombra de una **se pisa con la de la otra** → iluminación incorrecta. Cada cara necesita su **propio espacio sin solapamiento** en el lightmap.

**6. ¿Qué es una draw call?**
Es una **orden de la CPU a la GPU para dibujar** un lote de geometría (típicamente un objeto con un material). Cada draw call tiene **costo de CPU**; demasiadas se vuelven un **cuello de botella**.

**7. ¿Qué relación existe entre materiales y draw calls?**
Cada **material distinto** (o cambio de estado de render) suele implicar **al menos una draw call**. Más materiales diferentes → **más draw calls** (y menos posibilidad de agruparlos).

**8. ¿Qué es batching?**
Es **agrupar varios objetos que comparten material en una sola draw call** para reducir el overhead. Variantes en Unity: **Static Batching**, **Dynamic Batching** y **GPU Instancing**.

**9. ¿Por qué demasiados materiales distintos perjudican el rendimiento?**
Porque **rompen el batching**: cada material necesita su propia draw call, aumentando el **overhead de CPU**. Por eso conviene **reutilizar materiales y usar atlas de texturas** (10 objetos con 1 atlas = 1 draw call en vez de 10).

**10. ¿Qué problemas generan las sombras realtime?**
Son **lo más caro** de la iluminación: requieren **renderizar la escena desde la luz** (shadow map) en cada frame, **aumentan draw calls**, consumo de GPU y memoria. En VR/mobile pueden **degradar gravemente el rendimiento**.

**11. ¿Qué es un shadow map?**
Es una **textura que guarda la profundidad de la escena vista desde la luz**. Comparando esa profundidad se decide qué puntos quedan **en sombra**. Es el método estándar de sombras en tiempo real.

**12. ¿Por qué las transparencias producen overdraw?**
Porque los objetos transparentes **no descartan los píxeles de atrás**: se dibujan **unos encima de otros** y el **mismo píxel se pinta varias veces** (overdraw). Eso consume **fillrate**, y es especialmente costoso en VR/mobile (donde el fillrate es limitado).

**13. ¿Qué ventajas tiene usar shading Lambert en juegos low poly?**
Lambert es un modelo de iluminación **difuso simple** (sin componente especular), **muy barato de calcular**. Combina bien con la estética **low poly/estilizada**, da un look plano y coherente y **mejora el rendimiento** en hardware limitado.

**14. ¿Qué función cumplen los Light Probes en Unity?**
Son **puntos que capturan la iluminación bakeada del entorno** en distintas posiciones del espacio. Sirven para **iluminar objetos dinámicos/en movimiento** (que no reciben lightmap) con la luz pre-calculada, **interpolando** los valores entre los probes cercanos.

**15. ¿Por qué la optimización gráfica no depende solamente de la cantidad de polígonos?**
Porque el rendimiento depende de **muchos factores**: **draw calls**, **materiales/batching**, **overdraw** (transparencias), **luces y sombras**, **resolución de texturas/fillrate**, cálculos de **scripts** y cantidad de **objetos activos**. Bajar polígonos sin atender los demás no garantiza fluidez.

**16. ¿Las luces sin sombras consumen muchos recursos?**
**Menos** que con sombras (las sombras son lo más caro). Una luz dinámica **sin sombras es más barata**, pero **no es gratis**: igual implica cálculo de iluminación por objeto/píxel y posibles draw calls extra. Para máxima eficiencia, mejor **baked**.

**17. ¿Qué componentes se encargan del renderizado en un dispositivo?**
La **GPU** ejecuta el render; la **CPU** prepara y envía las **draw calls**. En el motor intervienen el **pipeline de render** (Forward/Deferred/URP), la **Camera**, los **Mesh Renderer** y los **materiales/shaders**. En VR standalone todo corre sobre el **SoC** del visor (ej. Snapdragon XR2 con GPU **Adreno** en Quest 2).

**18. Diferencia entre mapa UV1 y mapa UV2.**
- **UV1 (UVMap):** mapeo **principal**, usado para las **texturas** del material (albedo/color, normal, etc.). Puede **repetir/tilear** y **solaparse**.
- **UV2:** canal **secundario exclusivo para el lightmap** (iluminación bakeada). Debe ser **único y sin overlaps**.

**19. ¿Por qué los light probes son baratos comparados con las luces dinámicas?**
Porque los light probes usan iluminación **pre-calculada (bakeada)** e **interpolada**: en runtime **solo leen valores ya horneados** y los aplican a los objetos dinámicos, **sin recalcular** luz ni sombras cada frame como hacen las luces dinámicas. Mucho menos costo de GPU.
