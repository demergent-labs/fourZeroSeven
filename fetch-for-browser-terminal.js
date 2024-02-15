await fetch('http://localhost:3000/200');
await fetch('http://localhost:3000/407');
await fetch('http://localhost:3000/421', {
  method: 'POST',
  body: new Uint8Array([104, 101, 108, 108, 111, 119, 111, 114, 108, 100])
});
