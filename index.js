import http from 'node:http'
import fs, { read } from 'node:fs'
const PORT = 3333 || 4000

const server = http.createServer((req,res) => {
    const {method, url} = req
    let jsonData = []

    const responseJSON = (status, message) => {
        res.writeHead(status, {'Content-Type':'application/json'})
        res.end(JSON.stringify(message))
    }

    const readRecipesJSON = (func) => {
        fs.readFile('./Recipes.json', 'utf8', (err,data) => {
            if(err){
                responseJSON(500, {message: 'Erro ao buscar os dados'})
            }

            try{
                jsonData = JSON.parse(data)
                func(jsonData)
            }catch (error){
                return console.error('Erro ao ler o arquivo jsonData ' + error)
            }
        })
    }

    const writeRecipesJSON = (newData, func) => {
        fs.writeFile(
            './Recipes.json',
            JSON.stringify(newData, null, 2),
            (error) => {
                if(error){
                    responseJSON(500, {message: "Erro interno do servidor"})
                }

                func()
            }
        )
    }

    readRecipesJSON((jsonData) => {
        if(url==="/receitas" && method==="GET"){
            readRecipesJSON((jsonData) => {responseJSON(200, jsonData)})
        }else if(url==="/receitas" && method ==="POST"){
            let body = ''

            req.on('data', (chunk) => {
                body+= chunk.toString()
            })
            req.on('end', () => {
                const newRecipe = JSON.parse(body)
                newRecipe.id = jsonData.length + 1
                jsonData.push(newRecipe)
                writeRecipesJSON(jsonData, () => {
                    responseJSON(201, newRecipe)
                })
            })
        }else{
            responseJSON(404, "Página não encontrada")
        }
    })
})
    

server.listen(PORT, () => {
    console.log('server rodando em: http://localhost:' + PORT)
})