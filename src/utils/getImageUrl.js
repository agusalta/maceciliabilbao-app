/**
 * Mapa de imágenes en src/img cargadas en build (Vite).
 * Desde src/utils/, '../img' apunta a src/img.
 */
const imageModules = import.meta.glob('../img/*', { eager: true });

/**
 * Devuelve la URL pública de una imagen en src/img por nombre de archivo.
 * @param {string} filename - Nombre del archivo (ej: 'garabato.png', 'el giro.jpg')
 * @returns {string|undefined} URL de la imagen o undefined si no existe
 */
export function getImageUrl(filename) {
  if (!filename) return undefined;
  const key = `../img/${filename}`;
  const mod = imageModules[key];
  return mod?.default ?? undefined;
}
