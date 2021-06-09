// To parse this data:
//
//   import { Convert, Usuario } from "./file";
//
//   const usuario = Convert.toUsuario(json);

export class Usuario {
    id: string
    nombre:   string;
    correo:   string;
    password: string;
    type:     number;

}

// Converts JSON strings to/from your types
export class Convert {
    public static toUsuario(json: string): Usuario {
        return JSON.parse(json);
    }

    public static usuarioToJson(value: Usuario): string {
        return JSON.stringify(value);
    }
}
