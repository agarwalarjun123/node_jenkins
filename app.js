const express=require('express');
const app = express();

app.get('/',(req,res,next)=>res.json({msg:"welcome"}));

app.listen(process.env.PORT || 3000,()=>console.log('connected....'));