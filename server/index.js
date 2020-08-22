const express = require("express");
const app = express();
const PORT = process.env.PORT || 1604;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
	res.json({
		"response":"200"
	});
});


app.listen(PORT,()=>console.log(`Server started at ${PORT}`));
