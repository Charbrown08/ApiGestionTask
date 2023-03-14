if (
  tarea.id_estado === 1 &&
  changes.id_estado !== 2 &&
  changes.id_estado !== 12
) {
  throw new Error(
    'El estado actual es ' +
      tarea.id_estado +
      'y solo se permiten los estados 2(ACEPTADA)  O 12(RESOLUCION DE DUDAS)'
  );
}

if (
  tarea.id_estado === 2 &&
  changes.id_estado !== 3 &&
  changes.id_estado !== 12
) {
  throw new Error(
    'El estado actual es ' +
      tarea.id_estado +
      'y solo se permiten los estados de 3(EN PROCESO) O 12(RESOLUCION DE DUDAS)'
  );
}

if (
  tarea.id_estado === 3 &&
  changes.id_estado !== 4 &&
  changes.id_estado !== 12
) {
  throw new Error(
    'El estado actual es ' +
      tarea.id_estado +
      'y solo se permiten los estados de 4(QA) O 12(RESOLUCION DE DUDAS)'
  );
}

if (
  tarea.id_estado === 4 &&
  changes.id_estado !== 9 &&
  changes.id_estado !== 5
) {
  throw new Error(
    'El estado actual es ' +
      tarea.id_estado +
      'y solo se permiten los estados de 9(QA ERRONEO) O (PRUEBAS DE USUARIO)'
  );
}

if (
  tarea.id_estado === 5 &&
  changes.id_estado !== 6 &&
  changes.id_estado !== 10 &&
  changes.id_estado !== 12
) {
  throw new Error(
    'El estado actual es ' +
      tarea.id_estado +
      'y solo se permiten los estados de 10(QA ERRONEO) O 6(PRUEBAS DE USUARIO) O 12(RESOLUCION DE DUDAS)'
  );
}

if (
  tarea.id_estado === 6 &&
  changes.id_estado !== 7 &&
  changes.id_estado !== 12
) {
  throw new Error(
    'El estado actual es ' +
      tarea.id_estado +
      'y solo se permiten los estados de 10(QA ERRONEO)  O 12(RESOLUCION DE DUDAS)'
  );
}

if (
  tarea.id_estado === 7 &&
  changes.id_estado !== 8 &&
  changes.id_estado !== 11 &&
  changes.id_estado !== 12
) {
  throw new Error(
    'El estado actual es ' +
      tarea.id_estado +
      'y solo se permiten los estados de 8(VALIDADA) O 11(VALIDACION ERRRONEA) O 12(RESOLUCION DE DUDAS)'
  );
}

if (tarea.id_estado === 9 && changes.id_estado !== 2) {
  throw new Error(
    'El estado actual es ' +
      tarea.id_estado +
      'y solo se permiten los estados de 2(ACEPTADA)'
  );
}

if (tarea.id_estado === 10 && changes.id_estado !== 2) {
  throw new Error(
    'El estado actual es ' +
      tarea.id_estado +
      'y solo se permiten los estados de 2(ACEPTADA)'
  );
}

if (tarea.id_estado === 12 && changes.id_estado !== 2) {
  throw new Error(
    'El estado actual es ' +
      tarea.id_estado +
      'y solo se permiten los estados de 2(ACEPTADA)'
  );
}
