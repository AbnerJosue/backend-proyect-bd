import { Router } from "express";
import {
    getDepartament, 
    createNewDepartament,
    updateDepartament,
    getAttendance,
    getPermises,
    getSchedules,
    getTurnos,
    getVacations,
    postAttendance,
    postPermises,
    postTurns,
    postVacacions,
    posSchedules
} from "../controllers/rrhh.controller";
const router = Router();

router.get("/departaments", getDepartament);

router.post("/departaments", createNewDepartament);

// router.put("/departaments", updateDepartament); //

// HORARIOS RRHH
router.get("/schedules", getSchedules);

router.post("/schedules", posSchedules);
// TURNOS
router.get("/schedules", getTurnos);

router.post("/schedules", postTurns);
// VACACIONES
router.get("/schedules", getVacations);

router.post("/schedules", postVacacions);

// PERMISOS
router.get("/schedules", getPermises);

router.post("/schedules", postPermises);

// AUSENCIAS

router.get("/schedules", getAttendance);

router.post("/schedules", postAttendance);

export default router