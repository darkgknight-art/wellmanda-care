import express from 'express';
const app=express();app.disable('x-powered-by');app.use(express.static('public'));app.get('/health',(_,r)=>r.json({ok:true}));app.listen(process.env.PORT||3000,()=>console.log('Wellmanda Care pilot ready'));
