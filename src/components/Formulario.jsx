import React, { useState } from 'react'
import { Error } from './Error';

const inputs = [
    {
        id: 'mascota',
        label: 'Nombre mascota',
        placeholder: 'Nombre de la mascota'
    },
    {
        id: 'propietario',
        label: 'Nombre propietario',
        placeholder: 'Nombre del propietario'
    },
    {
        id: 'email',
        label: 'Email propietario',
        type: 'email',
        placeholder: 'Email Contacto propietario'
    },
    {
        id: 'alta',
        label: 'Alta',
        type: 'date'
    },
    {
        id: 'sintomas',
        label: 'Síntomas',
        textarea: true,
        placeholder: 'Describe los síntomas'
    }
];

const Input = (props) => {
    const { input, state, onChange } = props;
    const id = input.id;
    const placeholder = input.placeholder;
    const type = input.type;
    const label = input.label;

    return (
        <div className='mb-5'>
            <label
                htmlFor={id}
                className='block text-gray-700 uppercase font-bold'>
                {label}
            </label>

            <input
                type={type ?? "text"}
                id={id}
                value={state}
                onChange={(e) => {
                    onChange(e.target.value)
                }}
                placeholder={placeholder ?? undefined}
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
        </div>
    )
}

const Textarea = (props) => {
    const { input, state, onChange } = props;
    const id = input.id;
    const placeholder = input.placeholder;
    const label = input.label;

    return (
        <div className='mb-5'>
            <label
                htmlFor={id}
                className='block text-gray-700 uppercase font-bold'>
                {label}
            </label>

            <textarea
                id={id}
                value={state}
                onChange={(e) => {
                    onChange(e.target.value)
                }}
                placeholder={placeholder ?? undefined}
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
        </div>
    )
}

export const Formulario = ({ pacientes, setPacientes }) => {
    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const clearStates = () => {
        setMascota('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');
    }

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();


        //Validate form
        if ([mascota, propietario, email, alta, sintomas].includes('')) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
            return;
        }

        const cliente = {
            mascota,
            propietario,
            email,
            alta,
            sintomas
        }

        console.log('form: ', cliente);
        setPacientes([...pacientes, cliente]);

        //Restart form
        clearStates();
    }



    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center mb-10">
                Seguimiento Pacientes
            </h2>

            <p className="text-xl mt-5 mb-10 text-center">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
                onSubmit={handleSubmit}>

                {error && <Error>Todos los campos son obligatorios</Error>}

                <Input input={inputs[0]} state={mascota} onChange={setMascota} />
                <Input input={inputs[1]} state={propietario} onChange={setPropietario} />
                <Input input={inputs[2]} state={email} onChange={setEmail} />
                <Input input={inputs[3]} state={alta} onChange={setAlta} />
                <Textarea input={inputs[4]} state={sintomas} onChange={setSintomas} />

                <input
                    type="submit"
                    className='bg-indigo-600 w-full p-3 text-white 
                    uppercase font-bold hover:bg-indigo-700 
                    cursor-pointer transition-all'
                    value='Agregar paciente' />
            </form>
        </div>
    )
}



