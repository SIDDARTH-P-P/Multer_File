import { Router } from "express";
import * as fun from "./route_handler.js"
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
    destination:"./images",
    filename:(res,file,cb)=>{
        cb(null,file.originalname)
    }
})

const uploder = multer({storage:storage})

router.route("/api").post(uploder.single("profile"),fun.data)

export default router;