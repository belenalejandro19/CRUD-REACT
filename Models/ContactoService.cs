using MySql.Data.MySqlClient;
using System.Transactions;

namespace ProyectoCRUD.Models
{
    public class ContactoService
    {
        private readonly MySqlConnection _conexion;

        public ContactoService(MySqlConnection conexion)
        {
            _conexion = conexion;
        }

        public bool ContactoEsUnico(Contacto contacto)
        {
            //Verificar unicidad de los nuevos datos
            if (!string.IsNullOrEmpty(contacto.Nombre) || !string.IsNullOrEmpty(contacto.Correo) || !string.IsNullOrEmpty(contacto.Telefono))
            {
                //verificar si existe un contacto con el mismo registro
                var consulta = "SELECT COUNT(*) FROM Contactos WHERE" +
                               "(Nombre = @NuevoNombre OR @NuevoNombre IS NULL) AND" +
                               "(Correo = @NuevoCorreo OR @NuevoCorreo IS NULL) AND" +
                               "(Telefono = @NuevoTelefono OR @NuevoTelefono IS NULL) AND" +
                               "IdContacto != @ContactoId";

                using (var comando = new MySqlCommand(consulta, _conexion))
                {
                    comando.Parameters.AddWithValue("@NuevoNombre", contacto.Nombre);
                    comando.Parameters.AddWithValue("@NuevoCorreo", contacto.Correo);
                    comando.Parameters.AddWithValue("@NuevoTelefono", contacto.Telefono);
                    comando.Parameters.AddWithValue("@ContactoId", contacto.IdContacto);

                    _conexion.Open();
                    int conteo = Convert.ToInt32(comando.ExecuteScalar());
                    _conexion.Close();

                    //si el conteo es mayor a 0, ya existe un contacto con el mismo registro
                    return conteo == 0;

                }
            }
            //si no se proporcionan nuevos datos, se asume que es unico
            return true;
        }

    }
}
