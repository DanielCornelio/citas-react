import React from 'react'

const Paciente = () => {
    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>Rocko</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                <span className='font-normal normal-case'>Danno</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Correo: {''}
                <span className='font-normal normal-case'>jdcornelio89@gmail.com</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta: {''}
                <span className='font-normal normal-case'>10 Diciembre 2022</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
                <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit rem vel fugiat dolore omnis cupiditate accusamus minima sunt repudiandae voluptas.</span>
            </p>
        </div>
    )
}

export default Paciente