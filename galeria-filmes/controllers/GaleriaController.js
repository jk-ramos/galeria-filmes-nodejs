import express from 'express'
import Galeria from '../model/Galeria.js'
import multer from 'multer'
const upload = multer({dest: "public/uploads/"})
const router = express.Router()


router.get("/imagens", (req,res) => {
    Galeria.findAll()
    .then((imagens) => {
        res.render("imagens", {
            imagens: imagens,
        })
    })
})

router.post("/upload", upload.single("file"), (req,res) => {
    const titulo = req.body.titulo
    const ano = req.body.ano
    const file = req.file.filename

    Galeria.create({
        titulo: titulo,
        ano: ano,
        file: file,
    }).then(() => {
        res.redirect("/imagens")
    })
})

export default router;