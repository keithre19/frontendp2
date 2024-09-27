import { render, screen } from '@testing-library/react';
import { useSearchParams } from 'next/navigation';
import UpdateProyectos from '@/app/(dashboard)/updateProyectos/page';


jest.mock('next/navigation', () => ({
    useSearchParams: jest.fn(),
}));

describe('UpdateProyectos', () => {
    beforeEach(() => {
        useSearchParams.mockReturnValue({
            get: jest.fn((key) => {
                const params = {
                    idProyecto: '1',
                    nombre: 'Proyecto de Prueba',
                    area: 'Desarrollo',
                    descripcion: 'Descripción del proyecto',
                    fecha_inicio: '2023-01-01',
                    fecha_fin: '2023-06-30',
                    porcentaje_completado: '75.00',
                    comentarios: 'Comentarios del proyecto',
                    responsable: 'Juan Pérez',
                };
                return params[key];
            }),
        });
    });

    it('debe renderizar el formulario con los datos del proyecto', () => {
        render(<UpdateProyectos />);

        expect(screen.getByLabelText('Nombre')).toHaveValue('Proyecto de Prueba');
        expect(screen.getByLabelText('Área')).toHaveValue('Desarrollo');
        expect(screen.getByLabelText('Descripción')).toHaveValue('Descripción del proyecto');
        expect(screen.getByLabelText('Fecha de Inicio')).toHaveValue('2023-01-01');
        expect(screen.getByLabelText('Fecha de Fin')).toHaveValue('2023-06-30');
        expect(screen.getByLabelText('Porcentaje Completado')).toHaveValue('75.00');
        expect(screen.getByLabelText('Comentarios')).toHaveValue('Comentarios del proyecto');
        expect(screen.getByLabelText('Responsable')).toHaveValue('Juan Pérez');
    });
});
