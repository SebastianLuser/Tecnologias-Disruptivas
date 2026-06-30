# Pour Decisions — sitio estático servido con nginx.
# La raíz (/) sirve el modo estudio. No hay backend ni DB: cada visitante
# guarda su progreso en su propio localStorage. La validación semántica de
# respuestas corre en el navegador con embeddings (transformers.js), con el
# modelo self-hosteado: este build lo baja y nginx lo sirve desde el dominio.

# ── Stage 1: bajar runtime WASM + modelo de embeddings ──────────────────────
FROM alpine:3.20 AS fetch
RUN apk add --no-cache curl
ARG TF_VER=3.5.2
ARG MODEL=Xenova/paraphrase-multilingual-MiniLM-L12-v2
WORKDIR /out
RUN set -eux; \
    mkdir -p assets/transformers "models/${MODEL}/onnx"; \
    CDN="https://cdn.jsdelivr.net/npm/@huggingface/transformers@${TF_VER}/dist"; \
    curl -fsSL -o assets/transformers/ort-wasm-simd-threaded.jsep.wasm "${CDN}/ort-wasm-simd-threaded.jsep.wasm"; \
    curl -fsSL -o assets/transformers/ort-wasm-simd-threaded.jsep.mjs  "${CDN}/ort-wasm-simd-threaded.jsep.mjs"; \
    HF="https://huggingface.co/${MODEL}/resolve/main"; \
    curl -fsSL -o "models/${MODEL}/config.json"            "${HF}/config.json"; \
    curl -fsSL -o "models/${MODEL}/tokenizer.json"         "${HF}/tokenizer.json"; \
    curl -fsSL -o "models/${MODEL}/tokenizer_config.json"  "${HF}/tokenizer_config.json"; \
    curl -fsSL -o "models/${MODEL}/special_tokens_map.json" "${HF}/special_tokens_map.json"; \
    curl -fsSL -o "models/${MODEL}/onnx/model_quantized.onnx" "${HF}/onnx/model_quantized.onnx"

# ── Stage 2: nginx estático ─────────────────────────────────────────────────
FROM nginx:1.27-alpine
COPY deploy/default.conf /etc/nginx/conf.d/default.conf
COPY pour_decisions_modo_estudio.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY app.js     /usr/share/nginx/html/app.js
COPY assets /usr/share/nginx/html/assets
COPY --from=fetch /out/assets/transformers/ /usr/share/nginx/html/assets/transformers/
COPY --from=fetch /out/models/ /usr/share/nginx/html/models/

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO /dev/null http://127.0.0.1/ || exit 1

EXPOSE 80
