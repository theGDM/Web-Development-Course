//Node module -> Inbuilt modules - os module
//interacting with operating system
const os = require('os') //os related methods and module

//tells about the system Architecture (32 or 64 bit);
//eturns the operating system CPU architecture for which the Node.js binary was compiled. 
//Possible values are 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', and 'x64'
console.log(os.arch());

//tells about the plateform
//Returns a string identifying the operating system platform. The value is set at compile time. 
//Possible values are 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', and 'win32'
console.log(os.platform());

//gives the details about the network you are in
//Returns an object containing network interfaces that have been assigned a network address.
console.log(os.networkInterfaces());

//gives cpu information
console.log(os.cpus());
//because sometime we need to check what is cpu informtion, before opening or running app, so we can check
//if it is compatible with cpu configuration, run the app/programe