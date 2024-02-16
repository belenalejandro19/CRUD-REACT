using System;
using System.Collections.Generic;

namespace ProyectoCRUD.Models
{
    public partial class Contacto
    {
        public int IdContacto { get; set; }
        public string? Nombre { get; set; }
        public string? Correo { get; set; }
        public string? Telefono { get; set; }

        public Contacto(string nombre, string correo, string telefono)
        {
            ValidarDatosObligatorios(nombre, correo, telefono);
            Nombre = nombre;
            Correo = correo;
            Telefono = telefono;
        }

        private void ValidarDatosObligatorios(string nombre, string correo, string telefono)
        {
            if (string.IsNullOrEmpty(nombre))
            {
                throw new ArgumentException("Campo obligatorio!");
            }
            if (string.IsNullOrEmpty(correo))
            {
                throw new ArgumentException("Campo obligatorio!");
            }
            if (string.IsNullOrEmpty(telefono))
            {
                throw new ArgumentException("Campo obligatorio!");
            }
        }


    }
}
