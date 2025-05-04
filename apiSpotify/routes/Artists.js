const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

  
  app.get("/spotify/Artist",async (req,res)=>{
  const id = req.query.id
  try{
  const respone = await fetch(`https://api.spotify.com/v1/artists/${encodeURIComponent(id)}`,{
    method:"GET",
    headers: {
      "Authorization": `Bearer ${ACCESS_TOKEN}`, // Thêm Authorization header
      "Content-Type": "application/json"
    }
  })
  
  const data = await respone.json()
  res.json(data)
  
  }catch(err){
    console.log(err)
  }
  })