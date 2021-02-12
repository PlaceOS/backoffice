import { PlaceModule } from '@placeos/ts-client';
import { calculateModuleIndex, toQueryString } from 'src/app/common/api';

describe('API Helper Methods', () => {
    describe('toQueryString', () => {
        it('should convert object to query string', () => {
            expect(toQueryString({ test: 1 })).toBe('test=1');
            expect(toQueryString({ test: 1, another: 'test' })).toBe('test=1&another=test');
            expect(toQueryString({ test: 1, another: { some: 'json' } })).toBe(
                'test=1&another=%7B%22some%22%3A%22json%22%7D'
            );
        });
    });

    describe('calculateModuleIndex', () => {
        it('should get the correct index for the module', () => {
            const modules = new Array(10)
                .fill(0)
                .map((_, idx) => new PlaceModule({ id: `${idx}`, custom_name: 'Test' }));
            let index = Math.floor(Math.random() * modules.length);
            expect(calculateModuleIndex(modules, modules[index])).toBe(index + 1);
            const other_modules = modules.concat(
                new Array(5)
                    .fill(0)
                    .map((_, idx) => new PlaceModule({ id: `A_${idx}`, custom_name: 'Another' }))
            );
            other_modules.sort((a, b) => Math.random() - 0.5);
            expect(
                calculateModuleIndex(other_modules, other_modules[other_modules.length - 1])
            ).not.toBe(other_modules.length);
            expect(
                calculateModuleIndex(
                    other_modules,
                    [...other_modules].reverse().find((mod) => mod.custom_name === 'Another')
                )
            ).toBe(5);
        });
    });

    describe('extensionsForItem', () => {
        it('should get the correct extensions for the given item', () => {

        });
    });
});
