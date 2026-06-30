# Plan: Reformular pour_study como simulacros de examen

## Contexto
`pour_study_modo_estudio.html` tiene un simulacro fijo (siempre las mismas 10 preguntas, respuestas visibles inmediatamente) y un "Modo Aplicado" (8 escenarios). El usuario pide: eliminar Modo Aplicado, múltiples simulacros distintos del temario completo, respuestas solo al final, preguntas escritas con validación por coherencia, y la pregunta de ordenar pasos con la mecánica click-to-sequence de carpincho.

**Solo se modifica:** `pour_study_modo_estudio.html`

---

## Goal de sesión
El HTML reformulado permite:
1. Seleccionar entre 4 simulacros distintos en el home
2. Completar un examen de 10 preguntas sin ver ninguna respuesta hasta entregarlo
3. La pregunta de ordenar pasos funciona con click-to-sequence (igual que carpincho)
4. Las preguntas escritas muestran un score de coherencia al final (✅/⚡/❌)
5. El botón "Modo Aplicado" y todo su código están eliminados

---

## Pasos de implementación

### 1. Eliminar Modo Aplicado
- Borrar array `SCENARIOS` (~25 líneas, línea ~406)
- Borrar función `renderApplied()` y `toggleEl()`
- Borrar div `#screen-applied`
- Borrar botón "⚡ Modo Aplicado" del home

### 2. Reemplazar `PUNTOS` con `SIMULACROS`
Nueva estructura de datos:
```js
const SIMULACROS = [
  { id:1, title:'Simulacro 1 — Fundamentos e Interacciones', desc:'...', questions:[...] }
  // ...4 simulacros
]
```

**Tipos de pregunta por simulacro:**
| type | Render | Score |
|------|--------|-------|
| `vf` | Radio T/F por afirmación (8 por simulacro) | 1 pt si todas correctas, 0.5 si ≥50% |
| `mc` | Radio una opción | 1 o 0 |
| `written` | `<textarea>` | scoreWritten() → 0 / 0.5 / 1 |
| `order` | click-to-sequence carpincho | 1 si correcto, 0 si no |
| `match` | `<textarea>` + keywords | scoreWritten() |
| `code` | `<textarea>` + keywords | scoreWritten() |

**4 simulacros** (10 preguntas c/u) sacados del banco existente:
- **Sim 1** "Fundamentos e Interacciones": match de conceptos, VF (8 afirmaciones existentes del banco), casos prácticos, código con errores, order (E→B→C→D→A sonido), event wrappers, game feeling, tangibilidad, gizmos, canvas wizard
- **Sim 2** "Iluminación y Optimización": match técnicas de render, VF variante optimización, MC x3 de zona iluminación, written UV2/shadow map/LOD, order (flujo de baking de escena), written object pooling
- **Sim 3** "SDK y Comparativa": match SDKs, VF historia+SDK, MC x3 de zona SDK+historia, written OpenXR ventajas, order (cronología VR 5 hitos), written cuando usar cada SDK, written Quest standalone
- **Sim 4** "Repaso Integral": 1 pregunta de cada zona (fundamentos, corporalidad, interacciones, iluminación, gamefeel, SDK, historia, interfaces, patrones) + 1 order nuevo (flujo completo canvas VR)

### 3. Mecánica order (ported de carpincho)
Funciones a copiar/adaptar:
- CSS: `.seq-item`, `.seq-item.seq-bad`, `.seq-empty` (líneas 193-197 carpincho)
- Lógica: `renderOrden()` (líneas 1048-1091 carpincho), adaptada para no mostrar resultado hasta submit

**Diferencia clave vs carpincho:** al completar el orden no se muestra ✅/❌ — se marca como "respondido" y el resultado se revela junto con todo al final.

### 4. Nuevo engine de examen
State:
```js
state.exam = { simId, answers:{q0:...,q1:...}, orderState:{picked:[], pool:[]}, submitted:false }
```
- Renderiza las 10 preguntas en una sola pantalla scrollable
- Botón "Entregar examen" (disabled hasta que todas estén respondidas, o habilitado siempre con advertencia)
- Sin "ver respuesta" ni feedback parcial
- Botón "Entregar examen" **siempre habilitado**; preguntas sin responder cuentan 0
- Advertencia visual si hay preguntas sin completar al entregar

### 5. Validador de escritura `scoreWritten(userText, keywords)`
```js
function normalize(s){ return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9 ]/g,'') }
function scoreWritten(text, keywords){
  const t = normalize(text);
  const hits = keywords.filter(k => t.includes(normalize(k)));
  const ratio = hits.length / keywords.length;
  if(ratio >= 0.65) return {score:1, label:'✅ Correcto'};
  if(ratio >= 0.35) return {score:0.5, label:'⚡ Parcialmente correcto'};
  return {score:0, label:'❌ Necesita repaso'};
}
```
Cada pregunta `written`/`match`/`code` tiene un array `keywords:[...]` con 6-10 términos clave del answer.

### 6. Pantalla de resultados
- Score total: X / 10
- Rango: 3 niveles (≥8: "Aprobado con mérito", ≥6: "Aprobado", <6: "A repasar")
- Accordion por pregunta: tipo + label + tu respuesta + respuesta correcta
- Botón "Otro simulacro" → home

### 7. Home screen actualizado
- Eliminar botón Modo Aplicado
- 4 cards de simulacro: título + descripción + "Empezar"
- Indicador si ya fue completado (localStorage)

---

## Verificación
1. Abrir en Chrome → home muestra 4 simulacros, sin "Modo Aplicado"
2. Iniciar Sim 1 → 10 preguntas visibles, sin "ver respuesta" en ninguna
3. Pregunta de ordenar → pool de pasos clickeables, secuencia armable, reseteable
4. Entregar → pantalla de resultados con score y respuestas reveladas
5. Pregunta escrita con respuesta correcta → ✅ Correcto
6. Pregunta escrita con respuesta vaga → ⚡ Parcialmente correcto
