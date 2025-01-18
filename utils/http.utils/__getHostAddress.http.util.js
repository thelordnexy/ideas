import os from 'os';

export default function getHostAddress() {
  return os.networkInterfaces().wlo1[0].address;
}
