function ipv4ToInt(ipv4Str) {
  const ipSlices = ipv4Str.split('.');
  let result = 0;
  for (let i = 0; i < ipSlices.length; i++) {
    const intSlice = Number(ipSlices[i]) << 8 * i;
    result = result | intSlice;
  }
  return result;
}

const res = ipv4ToInt('192.168.1.1');
console.log('res ====>', res);
