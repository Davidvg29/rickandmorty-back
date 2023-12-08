const axios = require('axios');
const API_KEY = 'pi-hx-aquintero';
const URL = `https://rym2.up.railway.app/api/character/`;

const getCharById = (req, res) => {
  // const { id }  = req.params;
  const id = Number(req.params.id);

  axios(`https://rickandmortyapi.com/api/character/${id}?key=pi-davidvg29`)
    .then(({ data }) => {
      const { name, status, gender, species, origin, image } = data;
      const character = { id, name, status, gender, species, origin, image };

      return character.name
        ? res.status(200).json(character)
        : res.status(404).send('Not found');
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharById;



















// SERVIDOR CON NODE.JS

// const axios = require("axios")

// module.exports = function getCharById(res, id) {

//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(
//         ({data})=>{
//             const {id, name, gender, species, origin, image, status} = data
//             let character = {id ,name, gender, species, origin, image, status}
//             res.writeHead(200, {"Content-Type":"application/json"})
//              res.end(JSON.stringify(character))
//         }
//     )
//     .catch((error)=>{
//         res.writeHead(500, {"Content-Type": "text/plain"})
//          res.end(error.message)
//     }
//         )
        
    
// }

