import {methodsHTTP as comunaController} from "../controllers/comuna.controller.js";
import { Router } from "express";

const router = Router();

router.get('/',comunaController.getDato);
router.post('/',comunaController.addDato);
router.get('/:id',comunaController.idDato);
router.delete('/:id',comunaController.delDato);
router.put('/:id',comunaController.updDato);

export default router;