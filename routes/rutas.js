import express from 'express'

export let rutas=express.Router()

rutas.post('/api/habitaciones', function (req, res) {
    res.send('estoy guardando una habitacion')
})
rutas.get('/api/habitacion', function (req, res) {
    res.send('Estoy buscando una habitacion')
})
rutas.get('/api/habitaciones', function (req, res) {
    res.send('estoy buscando todas las habitaciones')
})
rutas.put('/api/habitaciones', function (req, res) {
    res.send('estoy cambiando una habitacion')
})
rutas.delete('/api/habitaciones', function (req, res) {
    res.send('estoy borrando una habitacion')
})