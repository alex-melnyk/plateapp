export * from './Colors';

/**
 * Generates color string rgba(0,0,0,alpha).
 *
 * @param {Number} alpha - alpha channel.
 */
export const getRandomColor = (alpha = 1.0) =>
    `rgba(${[...new Array(3)].map(() => Math.random() * 256).join(',')}, ${alpha})`;