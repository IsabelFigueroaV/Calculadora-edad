import React, { useState } from 'react';

const AgeCalculatorInput = ({ onCalculate }) => {
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [apellidosNombres, setApellidosNombres] = useState('');
    const [error, setError] = useState('');

    const validarFecha = (fecha) => {
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fecha)) {
            return 'Formato de fecha incorrecto (dd/mm/aaaa)';
        }
        const partes = fecha.split('/');
        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10);
        const anio = parseInt(partes[2], 10);

        if (mes < 1 || mes > 12) {
            return 'Mes inválido';
        }
        if (dia < 1 || dia > 31) {
            return 'Día inválido';
        }

        const fechaObj = new Date(anio, mes - 1, dia);
        if (fechaObj.getFullYear() !== anio || fechaObj.getMonth() !== mes - 1 || fechaObj.getDate() !== dia) {
            return 'Fecha inválida';
        }

        if (fechaObj > new Date()) {
            return 'La fecha de nacimiento no puede ser en el futuro';
        }

        return '';
    };

    const corregirOrtografiaBasica = (texto) => {
        const palabras = texto.toLowerCase().split(' ');
        const palabrasCorregidas = palabras.map(palabra => {
            if (palabra.length > 0) {
                let palabraCorregida = palabra.charAt(0).toUpperCase() + palabra.slice(1);
                if (palabraCorregida === 'Pia') {
                    palabraCorregida = 'Pía';
                }
                return palabraCorregida;
            }
            return '';
        });
        return palabrasCorregidas.join(' ');
    };

    const handleCalculate = () => {
        const validationError = validarFecha(fechaNacimiento);
        if (validationError) {
            setError(validationError);
            return;
        }
        setError('');
        const nombresCorregidos = corregirOrtografiaBasica(apellidosNombres);
        onCalculate(fechaNacimiento, nombresCorregidos);
        setFechaNacimiento('');
        setApellidosNombres('');
    };

    return (
        <div className="p-6 bg-white rounded-2xl shadow-lg mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Nacimiento (dd/mm/aaaa)</label>
                    <input
                        type="text"
                        value={fechaNacimiento}
                        onChange={(e) => setFechaNacimiento(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
                        placeholder="dd/mm/aaaa"
                    />
                    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Apellidos y Nombres</label>
                    <input
                        type="text"
                        value={apellidosNombres}
                        onChange={(e) => setApellidosNombres(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
                        placeholder="Ej: Pérez López, Juan"
                    />
                </div>
            </div>
            <button
                onClick={handleCalculate}
                className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-900 transition"
            >
                Calcular Edad
            </button>
        </div>
    );
};

export default AgeCalculatorInput;
