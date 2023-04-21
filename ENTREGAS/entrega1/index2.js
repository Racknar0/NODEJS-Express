const correo1 = 'El señor mato a su pareja de 30 años por la ira usando engaño';

/* const caso1 = "Mato"; */
/* const caso2 = "Violo"; */
/* const caso3 = "Golpeo"; */
const fraseBusqueda = 'Mato';

const situacion1 = 'Simple';

const situacion2 = 'Agravada ';

/* const movil1 = "Dinero";
const movil2 = "Ira";
const movil3 = "Venganza"; */
const movil = 'Ira';

/* const medio1 = "Violencia";
const medio2 = "Engaño";
const medio3 = "Pretedintencion"; */
const medio = 'Engaño';

/* const relacion1 = "Pareja";
const relacion2 = "Familia";
const relacion3 = "Amistad"; */
const relacion = 'Pareja';

const situacion3 = 'Atenuante';

switch (caso) {
    case 'Mato':
        switch (movil) {
            case 'Ira':
                switch (medio) {
                    case 'Engaño':
                        switch (relacion) {
                            case 'Pareja':
                                break;

                            default:
                                break;
                        }
                        break;
                    default:
                        console.log('Hay movil pero no medio');
                        break;
                }

                break;
            default:
                console.log('No hay movil');
                break;
        }

        break;

    default:
        console.log('Mato');
        break;
}
