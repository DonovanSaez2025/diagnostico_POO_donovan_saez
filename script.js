const estudiantes = ["Ana", "Pedro", "Lucía", "Carlos", "Sofía"];
const registroNotas = [];

function notasEstudiantes() {
    for (let i = 0; i < estudiantes.length; i++) {
        let notaAlumno = parseInt(prompt(`Ingrese la nota final de ${estudiantes[i]}:`));
        registroNotas.push(notaAlumno);
    };
};
