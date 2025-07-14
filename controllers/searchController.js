 const searchController = (req,res)=>{
    const {id} = req?.params

    res.send(`Product with id ${id} is found`)
}

module.exports = searchController()