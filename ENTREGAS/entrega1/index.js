class Usuario {
    constructor() {
        this.nombre = 'Pepe';
        this.apellido = 'Perez';
        this.libros = [
            {
                titulo: 'Harry Potter',
                autor: 'J.K. Rowling',
            },
            {
                titulo: 'El señor de los anillos',
                autor: 'J.R.R. Tolkien',
            },
        ];
        this.mascotas = ['Perro', 'Gato', 'Conejo'];
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(titulo, autor) {
        this.libros.push({
            titulo,
            autor,
        });
    }

    getBooknames() {
        return this.libros.map((libro) => libro.titulo);
    }
}

const usuario = new Usuario();
console.log(usuario.getFullName());
console.log(usuario.getBooknames());
console.log(usuario.countMascotas());
usuario.addMascota('Perro');
console.log(usuario.countMascotas());
usuario.addBook('Viaje al centro de la tierra', 'Julio Verne');
console.log(usuario.getBooknames());
