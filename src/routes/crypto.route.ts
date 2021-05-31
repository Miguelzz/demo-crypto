/** @format */

import { Router } from "express";
import * as cryptoCtrl from "../controllers/crypto.controller";

const router = Router();

router.get("/", cryptoCtrl.getCurrency);

export default router;
