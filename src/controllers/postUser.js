const {User} = require("../DB_connection")

const postUser = async (req, res)=>{
    const {email, password} = req.body
    
    try {
        if (email && password) {
            const [newUser] = await User.findOrCreate({
                where:{email, password}
            })
            return res.status(200).json(newUser)
        }
        return res.status(400).json({message: "Faltan datos"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
    
    //  try {

    //     if(!email || !password){
    //         return res.status(400).json({message:"Faltan datos"})
    //     }else{
    //         const userCreado = await User.create({email, password})
    //         return res.status(201).json(userCreado)
    //     }

    //  } catch (error) {
    //     return res.status(500).json("aca ocurrio el error")
    //  }

}

module.exports = postUser