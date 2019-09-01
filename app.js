var express = require("express")
var app = express()

var server = app.listen(80, function(){
  console.log("Node.js is listening to PORT:" + server.address().port)
})

app.get("/vue", function(req, res, next){
  res.send("<template> \n\
</template> \n\
\n\
<script> \n\
</script> \n\
\n\
<style> \n\
</style> \n")
})