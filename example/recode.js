var udp = require('../')

console.log(udp.decode(udp.encode({
  sourceIp: '10.0.0.1',
  sourcePort: 58936,
  destinationIp: '10.0.0.2',
  destinationPort: 80,
  data: Buffer('whatever')
})))
