import React from 'react';

const Registration = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">

            {/* Fondo decorativo (Huellas o camino sutil) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-full bg-stone-100 rounded-full -z-10 hidden md:block"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Encabezado */}
                <div className="text-center mb-16">
                    <span className="bg-green-100 text-green-800 text-sm font-bold px-4 py-2 rounded-full border border-green-200 uppercase tracking-wider">
                        📝 Inicia tu viaje
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-bosque mt-6 mb-4">
                        ¿Cómo me registro?
                    </h2>
                    <p className="text-tierra text-lg">
                        Sigue estos 4 sencillos pasos para formar parte de nuestra comunidad.
                    </p>
                </div>

                {/* Pasos de Registro */}
                <div className="space-y-12 relative">

                    {/* Paso 1 */}
                    <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                        <div className="w-16 h-16 bg-white border-4 border-green-500 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-10 shrink-0">
                            1
                        </div>
                        <div className="bg-stone-50 p-8 rounded-[2rem] shadow-sm border border-stone-200 flex-1 w-full hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-bosque mb-2">Elige tu Camino</h3>
                            <p className="text-tierra mb-2">
                                Selecciona el curso que más te resuene.
                            </p>
                            <div className="bg-white p-3 rounded-xl border border-stone-100 text-sm text-stone-500 flex items-start gap-2">
                                <span>🗓</span>
                                <span>
                                    Para actividades presenciales, revisa nuestras <a href="#" className="text-green-600 font-bold hover:underline">redes sociales</a> para consultar el calendario vigente.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Paso 2 */}
                    <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                        <div className="w-16 h-16 bg-white border-4 border-green-500 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-10 shrink-0">
                            2
                        </div>
                        <div className="bg-stone-50 p-8 rounded-[2rem] shadow-sm border border-stone-200 flex-1 w-full hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-bosque mb-4">Envíanos tus Datos</h3>
                            <p className="text-tierra mb-4">
                                Manda un mensaje por WhatsApp o Correo con la siguiente ficha:
                            </p>

                            <div className="bg-white p-6 rounded-2xl border-l-4 border-green-400 shadow-inner">
                                <ul className="space-y-2 text-sm text-stone-600">
                                    <li>👤 <strong>Nombre Completo</strong></li>
                                    <li>👨‍👩‍👧 <strong>Posición familiar y/o Profesión</strong></li>
                                    <li>📚 <strong>Nombre del curso</strong> de interés</li>
                                    <li>⏰ <strong>Horario</strong> preferido</li>
                                    <li>💡 <strong>¿Para qué necesitas el curso?</strong> (Tu intención)</li>
                                </ul>
                            </div>

                            {/* Botones de Acción Rápida (Placeholders) */}
                            <div className="flex gap-4 mt-6 flex-wrap">
                                <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700 transition-colors">
                                    <span>📱</span> WhatsApp
                                </button>
                                <button className="flex items-center gap-2 bg-stone-800 text-white px-6 py-2 rounded-full font-bold hover:bg-stone-900 transition-colors">
                                    <span>✉️</span> Correo
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Paso 3 */}
                    <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                        <div className="w-16 h-16 bg-white border-4 border-green-500 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-10 shrink-0">
                            3
                        </div>
                        <div className="bg-stone-50 p-8 rounded-[2rem] shadow-sm border border-stone-200 flex-1 w-full hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-bosque mb-2">Confirmación y Pago</h3>
                            <p className="text-tierra">
                                Una vez organizados los detalles, te enviaremos:
                            </p>
                            <ul className="mt-3 space-y-2 text-sm font-medium text-green-800">
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Costo Final</li>
                                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Datos Bancarios para transferencia/depósito</li>
                            </ul>
                        </div>
                    </div>

                    {/* Paso 4 */}
                    <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                        <div className="w-16 h-16 bg-green-600 border-4 border-green-200 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg z-10 shrink-0">
                            ✓
                        </div>
                        <div className="bg-green-50 p-8 rounded-[2rem] shadow-md border border-green-100 flex-1 w-full transform hover:-translate-y-1 transition-transform">
                            <h3 className="text-xl font-bold text-green-900 mb-2">¡Bienvenido al Grupo!</h3>
                            <p className="text-green-800 mb-4">
                                Envía tu comprobante de pago. Te incluiremos en el <strong>Grupo de WhatsApp Oficial</strong> del curso donde recibirás:
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-green-700 shadow-sm">📹 Liga Zoom</span>
                                <span className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-green-700 shadow-sm">📍 Ubicación</span>
                                <span className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-green-700 shadow-sm">📘 Cuadernillos</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Registration;