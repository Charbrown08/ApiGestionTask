const bcrypt=require('bcrypt');

async function verifyPassword(){
  const myPassword ='admin123';
  const hash='$2b$10$vHMqqrR1XDvsNDzL66dH/.i7zFaiJpdMLaIo3oPpCREveZqXO7nRu'
  const isMatch=await bcrypt.compare(myPassword,hash);
  console.log(isMatch);
}

verifyPassword();



