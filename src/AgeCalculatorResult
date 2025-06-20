import React from 'react';

const AgeCalculatorResult = ({ resultados, onClear, onExport }) => {
    const calcularEdadTexto = (fechaNacimiento) => {
        const partes = fechaNacimiento.split('/');
        const diaNac = parseInt(partes[0], 10);
        const mesNac = parseInt(partes[1], 10) - 1;
        const anioNac = parseInt(partes[2], 10);

        const hoy = new Date();
        let anios = hoy.getFullYear() - anioNac;
        let meses = hoy.getMonth() - mesNac;
        let dias = hoy.getDate() - diaNac;

        if (dias < 0) {
            meses--;
            const ultimoDiaMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
            dias = ultimoDiaMesAnterior + dias;
        }

        if (meses < 0) {
            anios--;
            meses = 12 + meses;
        }

        return `${anios} años, ${meses} meses y ${dias} días`;
    };

    const calcularEdadNumero = (fechaNacimiento) => {
        const partes = fechaNacimiento.split('/');
        const diaNac = parseInt(partes[0], 10);
        const mesNac = parseInt(partes[1], 10) - 1;
        const anioNac = parseInt(partes[2], 10);

        const hoy = new Date();
        let edad = hoy.getFullYear() - anioNac;
        const mesActual = hoy.getMonth();
        const diaActual = hoy.getDate();

        if (mesActual < mesNac || (mesActual === mesNac && diaActual < diaNac)) {
            edad--;
        }
        return edad;
    };

    return (
        <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Resultados</h2>
            {resultados.length === 0 ? (
                <p className="text-gray-600">Aún no hay resultados. Calcula una edad.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Fecha Nacimiento
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Apellidos y Nombres
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Edad (Número)
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Edad (Texto)
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {resultados.map((res, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{res.fechaNacimiento}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{res.apellidosNombres}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{calcularEdadNumero(res.fechaNacimiento)} Años</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{calcularEdadTexto(res.fechaNacimiento)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <div className="mt-6 flex justify-end space-x-4">
                <button
                    onClick={onClear}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors shadow-sm"
                >
                    Limpiar
                </button>
                <button
                    onClick={onExport}
                    className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors shadow-md"
                >
                    Exportar (CSV)
                </button>
            </div>
        </div>
    );
};

export default AgeCalculatorResult;
