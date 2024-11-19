export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);

  if (position < length) {
    view[position] = value;
  } else {
    throw new Error('Position outside range');
  }

  return new DataView(buffer);
}
