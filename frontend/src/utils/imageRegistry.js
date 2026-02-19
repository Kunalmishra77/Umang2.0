import { ASSETS } from './imageAssets';

const FALLBACK_POOL = [
  ASSETS.HOSPITAL_EXTERIOR,
  ASSETS.ABOUT_BANNER,
  ASSETS.ABOUT_BEACON,
  ASSETS.CONSULTATION,
  ASSETS.OT,
  ASSETS.RECEPTION,
  ASSETS.SVC_ICU_ADVANCE
];

const categoryPools = {
  hero: [ASSETS.HOSPITAL_EXTERIOR, ASSETS.ABOUT_BANNER],
  facilities: [ASSETS.SVC_ICU_ADVANCE, ASSETS.OT, ASSETS.RECEPTION],
  specialties: [ASSETS.CARDIAC, ASSETS.NEURO, ASSETS.ORTHO, ASSETS.GASTRO, ASSETS.PULMONOLOGY, ASSETS.UROLOGY],
  doctors: [], // Should be filled from doctors-images if available
};

const usedImages = new Set();

/**
 * Gets a unique image from the pool or fallback.
 * @param {string} category - The category to pick from.
 * @param {string} preferredImage - A specific image asset to try first.
 * @returns {string} - The unique image path.
 */
export const getUniqueImage = (category, preferredImage = null) => {
  if (preferredImage && !usedImages.has(preferredImage)) {
    usedImages.add(preferredImage);
    return preferredImage;
  }

  const pool = categoryPools[category] || FALLBACK_POOL;
  
  for (const img of pool) {
    if (!usedImages.has(img)) {
      usedImages.add(img);
      return img;
    }
  }

  // If all in pool used, just return a random one or the first one (allow repeat if pool exhausted)
  return preferredImage || pool[0];
};

export const clearUsedImages = () => {
  usedImages.clear();
};
