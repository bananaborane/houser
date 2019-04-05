module.exports = {
    get: async (req, res, next)=>{
        const db = req.app.get('db');
        let response = await db.getHouses();
        res.status(200).send(response)
    },
    post: async (req, res, next)=>{
        let { name, address, city, state, zip_code, image, mortgage, rent } = req.body;
        const db = req.app.get('db');
        let response = await db.insertHouse({ house_name: name, address, city, state, zip_code, image, mortgage, rent });
        res.status(200).send('a house has been added')
        console.log('a house has been added')
    },
    delete: (req, res, next)=>{
        let { id } = req.params;
        const db = req.app.get('db');
        db.deleteHouse(id).then(()=>{
            res.status(200).send('a house has been deleted')
            console.log('a house has been deleted')
        }).catch(err=> console.log(err))
    }
}