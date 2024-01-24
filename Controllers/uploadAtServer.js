const upload = (req,res) =>{
    const myfile = req.files.file;
    const filePath = `${__dirname}` + '\\data' + `\\${myfile.name}`;
    console.log(filePath);
    console.log(myfile);
    myfile.mv(filePath,(err)=>{
        if(err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
        

         res.status(200).json({
            success: true
        });
        


       
    })
}

module.exports = upload;