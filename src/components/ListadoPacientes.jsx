import React from 'react'

const pacientes = [
    {
        nombre: 'Hook',
        propietario: 'Elon',
        email: 'test@test.com',
        alta: '10/01/23',
        sintomas: 'Es un chupapi',
    }
]

const Paciente = (data) => {
    const paciente = data.paciente;
    const nombre = paciente.nombre;
    const propietario = paciente.propietario;
    const email = paciente.email;
    const alta = paciente.alta;
    const sintomas = paciente.sintomas;
    return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
            {/*Nombre*/}
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {''}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            {/*Propietario*/}
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario: {''}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>
            {/*Email*/}
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            {/*Alta*/}
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                alta: {''}
                <span className='font-normal normal-case'>{alta}</span>
            </p>
            {/*Sintomas*/}
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Síntomas: {''}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>

        </div>
    )
}

export const ListadoPacientes = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
                Administra tus {''}
                <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
            </p>

            {
                pacientes.map((paciente) => (
                    <Paciente paciente={paciente} />
                ))
            }
        </div>

    )
}
