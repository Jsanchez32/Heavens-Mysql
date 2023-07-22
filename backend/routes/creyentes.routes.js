import {methodsHTTP as creyenteController} from "../controllers/creyentes.controller.js";
import { Router } from "express";

const router = Router();

router.get('/',creyenteController.getDato);
router.get('/bucaramanga',creyenteController.getBucaramanga);
router.get('/canaveral',creyenteController.getCanaveral);
router.get('/comuna5',creyenteController.getComuna5);
router.get('/sanPio',creyenteController.getSanPio);
router.get('/santander',creyenteController.getSantander);
router.post('/',creyenteController.addDato);
router.get('/:id',creyenteController.idDato);
router.delete('/:id',creyenteController.delDato);
router.put('/:id',creyenteController.updDato);

export default router;