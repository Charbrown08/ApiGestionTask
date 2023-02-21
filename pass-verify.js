const bcrypt=require('bcrypt');

async function verifyPassword(){
  const myPassword ='admin123';
  const hash='$2b$10$nVpKg7w5Dp6w3i5Tt.056OEO5oWqtoEXQMLeeQCTNWCd2GsTSecIu'
  const isMatch=await bcrypt.compare(myPassword,hash);
  console.log(isMatch);
}

verifyPassword();



