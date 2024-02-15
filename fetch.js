var dns = require('node:dns');
dns.setDefaultResultOrder('ipv4first');

async function fetch200Endpoint() {
  try {
    const response = await fetch('http://localhost:3000/200');
    if (response.ok) {
      const data = await response.text();
      console.log('200 endpoint response:', data);
    } else {
      console.log('200 endpoint didn\'t return with 200 status');
      console.error('Error:', response.status, response.statusText);
    }
  } catch (error) {
    console.log('200 endpoint failed');
    console.error('Error:', error);
  }
}

async function fetch407Endpoint() {
  try {
    const response = await fetch('http://localhost:3000/407');
    if (response.status === 407) {
      const data = await response.text();
      console.log('407 endpoint response:', data);
    } else {
      console.log('407 endpoint didn\'t return with 407 status');
      console.error('Error:', response.status, response.statusText);
    }
  } catch (error) {
    console.log('407 endpoint failed');
    console.error('Error:', error);
  }
}

async function fetch421Endpoint() {
  try {
    const response = await fetch('http://localhost:3000/421', {
      method: 'POST',
      body: new Uint8Array(Buffer.from('helloworld', 'utf-8'))
    });
    if (response.status === 421) {
      const data = await response.text();
      console.log('421 endpoint response:', data);
    } else {
      console.log('421 endpoint didn\'t return with 421 status');
      console.error('Error:', response.status, response.statusText);
    }
  } catch (error) {
    console.log('421 endpoint failed');
    console.error('Error:', error);
  }
}

fetch200Endpoint();
fetch407Endpoint();
fetch421Endpoint();
