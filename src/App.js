import React, { useState, useEffect } from 'react';
import AgeCalculatorInput from './components/AgeCalculatorInput';
import AgeCalculatorResult from './components/AgeCalculatorResult';
import { saveAs } from 'file-saver'; // Asegúrate de tener esta librería instalada

const App = () => {
    const [resultados, setResultados] = useState(() => {
        const savedResults = localStorage.getItem('ageCalculatorResults');
        return savedResults ? JSON.parse(savedResults) : [];
    });

    useEffect(() => {
        localStorage.setItem('ageCalculatorResults', JSON.stringify(resultados));
    }, [resultados]);

    const handleCalculateAge = (fechaNacimiento, apellidosNombres) => {
        const nuevoResultado = { fechaNacimiento, apellidosNombres };
        setResultados([...resultados, nuevoResultado]);
    };

    const handleClearResults = () => {
        setResultados([]);
    };

    const handleExportResults = () => {
        if (resultados.length === 0) return;

        const encabezado = ['Fecha Nacimiento', 'Apellidos y Nombres', 'Edad (Número)', 'Edad (Texto)'];

        const filas = resultados.map(res => {
            const partes = res.fechaNacimiento.split('/');
            const dia = parseInt(partes[0], 10);
            const mes = parseInt(partes[1], 10) - 1;
            const anio = parseInt(partes[2], 10);

            const nacimiento = new Date(anio, mes, dia);
            const hoy = new Date();
            let edad = hoy.getFullYear() - nacimiento.getFullYear();
            let meses = hoy.getMonth() - nacimiento.getMonth();
            let dias = hoy.getDate() - nacimiento.getDate();

            if (dias < 0) {
                meses--;
                dias += new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
            }
            if (meses < 0) {
                edad--;
                meses += 12;
            }

            const edadTexto = `${edad} años, ${meses} meses y ${dias} días`;

            return [res.fechaNacimiento, res.apellidosNombres, `${edad} Años`, edadTexto];
        });

        const contenidoCSV = [encabezado, ...filas].map(fila => fila.join(',')).join('\n');
        const blob = new Blob([contenidoCSV], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'edades_resultado.csv');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
                    Calculadora de Edad
                </h1>

                <AgeCalculatorInput onCalculate={handleCalculateAge} />
                <AgeCalculatorResult
                    resultados={resultados}
                    onClear={handleClearResults}
                    onExport={handleExportResults}
                />
            </div>
        </div>
    );
};

export default App;
