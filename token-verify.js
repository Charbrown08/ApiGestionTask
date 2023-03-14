const jwt=require('jsonwebtoken');

const secret='myCat';
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJpbmdlbmllcm8iLCJpYXQiOjE2Nzc4NzYzOTJ9.PCa6GPMtO2PCgnHQDIzDMRJlnWoFTnJMcyFji0ayKf0'


function verifyToken(token,secret) {
  return jwt.verify(token,secret);

}

const payload=verifyToken(token,secret);
console.log(payload);
