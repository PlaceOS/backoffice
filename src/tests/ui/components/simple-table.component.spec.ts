import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { beforeEach, describe, expect, it } from 'vitest';
import {
    SimpleTableComponent,
    TableColumn,
} from '../../../app/ui/simple-table.component';

describe('SimpleTableComponent', () => {
    let component: SimpleTableComponent<Record<string, unknown>>;
    let fixture: ComponentFixture<
        SimpleTableComponent<Record<string, unknown>>
    >;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SimpleTableComponent, NoopAnimationsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(SimpleTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('default state', () => {
        it('should have empty selected array', () => {
            expect(component.selected()).toEqual([]);
        });

        it('should have undefined data by default', () => {
            expect(component.data()).toBeUndefined();
        });

        it('should have empty columns by default', () => {
            expect(component.columns()).toEqual([]);
        });

        it('should not be selectable by default', () => {
            expect(component.selectable()).toBe(false);
        });

        it('should not be sortable by default', () => {
            expect(component.sortable()).toBe(false);
        });

        it('should have default empty message', () => {
            expect(component.empty_message()).toBe('No data to list');
        });

        it('should have page 0 by default', () => {
            expect(component.page()).toBe(0);
        });

        it('should have null sort by default', () => {
            expect(component.sort()).toBeNull();
        });
    });

    describe('data handling', () => {
        const test_columns: TableColumn[] = [
            { key: 'name', name: 'Name' },
            { key: 'value', name: 'Value' },
        ];

        it('should handle array data input', async () => {
            const data = [
                { id: '1', name: 'Item 1', value: 10 },
                { id: '2', name: 'Item 2', value: 20 },
            ];
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', test_columns);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.data_length()).toBe(2);
            expect(component.data_view()).toEqual(data);
        });

        it('should handle signal data input', async () => {
            const data = signal([{ id: '1', name: 'Item 1', value: 10 }]);
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', test_columns);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.data_length()).toBe(1);

            data.set([
                { id: '1', name: 'Item 1', value: 10 },
                { id: '2', name: 'Item 2', value: 20 },
            ]);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.data_length()).toBe(2);
        });

        it('should handle null/undefined data', async () => {
            fixture.componentRef.setInput('data', null);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.data_length()).toBe(0);
        });
    });

    describe('columns', () => {
        it('should filter out columns with show:false', async () => {
            const columns: TableColumn[] = [
                { key: 'name', name: 'Name', show: true },
                { key: 'hidden', name: 'Hidden', show: false },
                { key: 'value', name: 'Value' },
            ];
            fixture.componentRef.setInput('columns', columns);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.active_columns().length).toBe(2);
            expect(
                component.active_columns().find((c) => c.key === 'hidden'),
            ).toBeUndefined();
        });

        it('should include columns without explicit show property', async () => {
            const columns: TableColumn[] = [
                { key: 'name', name: 'Name' },
                { key: 'value', name: 'Value' },
            ];
            fixture.componentRef.setInput('columns', columns);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.active_columns().length).toBe(2);
        });

        it('should find column by key', async () => {
            const columns: TableColumn[] = [
                { key: 'name', name: 'Name' },
                { key: 'value', name: 'Value' },
            ];
            fixture.componentRef.setInput('columns', columns);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.column('name')).toEqual(columns[0]);
            expect(component.column('nonexistent')).toBeUndefined();
        });
    });

    describe('filtering', () => {
        const test_columns: TableColumn[] = [
            { key: 'name', name: 'Name' },
            { key: 'category', name: 'Category' },
        ];

        it('should filter data based on filter string', async () => {
            const data = [
                { id: '1', name: 'Apple', category: 'Fruit' },
                { id: '2', name: 'Banana', category: 'Fruit' },
                { id: '3', name: 'Carrot', category: 'Vegetable' },
            ];
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', test_columns);
            fixture.componentRef.setInput('filter', 'apple');
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.data_view().length).toBe(1);
            expect(component.data_view()[0].name).toBe('Apple');
        });

        it('should filter case-insensitively', async () => {
            const data = [
                { id: '1', name: 'APPLE', category: 'Fruit' },
                { id: '2', name: 'banana', category: 'Fruit' },
            ];
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', test_columns);
            fixture.componentRef.setInput('filter', 'BANANA');
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.data_view().length).toBe(1);
        });

        it('should filter only on specified fields when filter_on is set', async () => {
            const data = [
                { id: '1', name: 'Apple', category: 'Fruit' },
                { id: '2', name: 'Fruit Cake', category: 'Dessert' },
            ];
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', test_columns);
            fixture.componentRef.setInput('filter', 'Fruit');
            fixture.componentRef.setInput('filter_on', ['category']);
            fixture.detectChanges();
            await fixture.whenStable();

            // Only "Apple" has category "Fruit"
            expect(component.data_view().length).toBe(1);
            expect(component.data_view()[0].name).toBe('Apple');
        });
    });

    describe('sorting', () => {
        const test_columns: TableColumn[] = [
            { key: 'name', name: 'Name' },
            { key: 'value', name: 'Value' },
        ];

        it('should set sort on first call', async () => {
            fixture.componentRef.setInput('sortable', true);
            fixture.detectChanges();

            component.setSort('name');

            expect(component.sort()).toEqual({ key: 'name', reverse: false });
        });

        it('should toggle reverse on second call with same key', async () => {
            fixture.componentRef.setInput('sortable', true);
            fixture.detectChanges();

            component.setSort('name');
            component.setSort('name');

            expect(component.sort()).toEqual({ key: 'name', reverse: true });
        });

        it('should clear sort on third call with same key', async () => {
            fixture.componentRef.setInput('sortable', true);
            fixture.detectChanges();

            component.setSort('name');
            component.setSort('name');
            component.setSort('name');

            expect(component.sort()).toBeNull();
        });

        it('should reset to new key when different key is selected', async () => {
            fixture.componentRef.setInput('sortable', true);
            fixture.detectChanges();

            component.setSort('name');
            component.setSort('value');

            expect(component.sort()).toEqual({ key: 'value', reverse: false });
        });

        it('should sort string data ascending', async () => {
            const data = [
                { id: '1', name: 'Banana', value: 2 },
                { id: '2', name: 'Apple', value: 1 },
                { id: '3', name: 'Cherry', value: 3 },
            ];
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', test_columns);
            fixture.componentRef.setInput('sortable', true);
            fixture.detectChanges();
            await fixture.whenStable();

            component.setSort('name');
            fixture.detectChanges();
            await fixture.whenStable();

            const names = component.data_view().map((d) => d.name);
            expect(names).toEqual(['Apple', 'Banana', 'Cherry']);
        });

        it('should sort number data ascending', async () => {
            const data = [
                { id: '1', name: 'B', value: 20 },
                { id: '2', name: 'A', value: 10 },
                { id: '3', name: 'C', value: 30 },
            ];
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', test_columns);
            fixture.componentRef.setInput('sortable', true);
            fixture.detectChanges();
            await fixture.whenStable();

            component.setSort('value');
            fixture.detectChanges();
            await fixture.whenStable();

            const values = component.data_view().map((d) => d.value);
            expect(values).toEqual([10, 20, 30]);
        });

        it('should sort descending when reverse is true', async () => {
            const data = [
                { id: '1', name: 'B', value: 20 },
                { id: '2', name: 'A', value: 10 },
                { id: '3', name: 'C', value: 30 },
            ];
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', test_columns);
            fixture.componentRef.setInput('sortable', true);
            fixture.detectChanges();
            await fixture.whenStable();

            component.setSort('value');
            component.setSort('value'); // toggle reverse
            fixture.detectChanges();
            await fixture.whenStable();

            const values = component.data_view().map((d) => d.value);
            expect(values).toEqual([30, 20, 10]);
        });

        it('should use custom sort function when provided', async () => {
            const columns_with_sort: TableColumn[] = [
                {
                    key: 'name',
                    name: 'Name',
                    sort_fn: (a, b) =>
                        (b as string).length - (a as string).length,
                },
            ];
            const data = [
                { id: '1', name: 'A' },
                { id: '2', name: 'ABCD' },
                { id: '3', name: 'AB' },
            ];
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', columns_with_sort);
            fixture.componentRef.setInput('sortable', true);
            fixture.detectChanges();
            await fixture.whenStable();

            component.setSort('name');
            fixture.detectChanges();
            await fixture.whenStable();

            const names = component.data_view().map((d) => d.name);
            expect(names).toEqual(['ABCD', 'AB', 'A']);
        });
    });

    describe('selection', () => {
        const test_columns: TableColumn[] = [{ key: 'name', name: 'Name' }];
        const data = [
            { id: '1', name: 'Item 1' },
            { id: '2', name: 'Item 2' },
            { id: '3', name: 'Item 3' },
        ];

        it('should select an item', async () => {
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', test_columns);
            fixture.componentRef.setInput('selectable', true);
            fixture.detectChanges();
            await fixture.whenStable();

            component.select(0, true);

            expect(component.selected()).toEqual([0]);
        });

        it('should unselect an item', async () => {
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', test_columns);
            fixture.componentRef.setInput('selectable', true);
            fixture.detectChanges();
            await fixture.whenStable();

            component.select(0, true);
            component.select(1, true);
            component.select(0, false);

            expect(component.selected()).toEqual([1]);
        });

        it('should select all items', async () => {
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', test_columns);
            fixture.componentRef.setInput('selectable', true);
            fixture.detectChanges();
            await fixture.whenStable();

            component.selectAll(true);

            expect(component.selected()).toEqual([0, 1, 2]);
        });

        it('should unselect all items', async () => {
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', test_columns);
            fixture.componentRef.setInput('selectable', true);
            fixture.detectChanges();
            await fixture.whenStable();

            component.selectAll(true);
            component.selectAll(false);

            expect(component.selected()).toEqual([]);
        });
    });

    describe('pagination', () => {
        const test_columns: TableColumn[] = [{ key: 'name', name: 'Name' }];

        it('should paginate data when page_size is set', async () => {
            const data = [
                { id: '1', name: 'Item 1' },
                { id: '2', name: 'Item 2' },
                { id: '3', name: 'Item 3' },
                { id: '4', name: 'Item 4' },
                { id: '5', name: 'Item 5' },
            ];
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', test_columns);
            fixture.componentRef.setInput('page_size', 2);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.paginated_data().length).toBe(2);
            expect(component.total_pages()).toBe(3);
        });

        it('should not paginate when page_size is 0', async () => {
            const data = [
                { id: '1', name: 'Item 1' },
                { id: '2', name: 'Item 2' },
                { id: '3', name: 'Item 3' },
            ];
            fixture.componentRef.setInput('data', data);
            fixture.componentRef.setInput('columns', test_columns);
            fixture.componentRef.setInput('page_size', 0);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.paginated_data().length).toBe(3);
        });
    });

    describe('column template', () => {
        it('should generate grid template with column sizes', async () => {
            const columns: TableColumn[] = [
                { key: 'name', name: 'Name', size: '1fr' },
                { key: 'value', name: 'Value', size: '2fr' },
            ];
            fixture.componentRef.setInput('columns', columns);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.column_template()).toBe('1fr 2fr');
        });

        it('should use auto for columns without size', async () => {
            const columns: TableColumn[] = [
                { key: 'name', name: 'Name' },
                { key: 'value', name: 'Value', size: '100px' },
            ];
            fixture.componentRef.setInput('columns', columns);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.column_template()).toBe('auto 100px');
        });

        it('should prepend selectable column width', async () => {
            const columns: TableColumn[] = [{ key: 'name', name: 'Name' }];
            fixture.componentRef.setInput('columns', columns);
            fixture.componentRef.setInput('selectable', true);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.column_template()).toBe('3.5rem auto');
        });

        it('should prepend reorder column width', async () => {
            const columns: TableColumn[] = [{ key: 'name', name: 'Name' }];
            fixture.componentRef.setInput('columns', columns);
            fixture.componentRef.setInput('can_reorder', true);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.column_template()).toBe('3.5rem auto');
        });
    });

    describe('can_sort computed', () => {
        it('should return true when sortable and not reorderable', async () => {
            fixture.componentRef.setInput('sortable', true);
            fixture.componentRef.setInput('can_reorder', false);
            fixture.detectChanges();

            expect(component.can_sort()).toBe(true);
        });

        it('should return false when reorderable', async () => {
            fixture.componentRef.setInput('sortable', true);
            fixture.componentRef.setInput('can_reorder', true);
            fixture.detectChanges();

            expect(component.can_sort()).toBe(false);
        });

        it('should return false when not sortable', async () => {
            fixture.componentRef.setInput('sortable', false);
            fixture.componentRef.setInput('can_reorder', false);
            fixture.detectChanges();

            expect(component.can_sort()).toBe(false);
        });
    });

    describe('gridSquare helper', () => {
        it('should return correct grid area string', () => {
            expect(component.gridSquare(1, 2)).toBe('1 / 2 / 2 / 3');
            expect(component.gridSquare(3, 4)).toBe('3 / 4 / 4 / 5');
        });
    });

    describe('column_count computed', () => {
        it('should return columns count', async () => {
            const columns: TableColumn[] = [
                { key: 'a', name: 'A' },
                { key: 'b', name: 'B' },
            ];
            fixture.componentRef.setInput('columns', columns);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.column_count()).toBe(2);
        });

        it('should add 1 for selectable', async () => {
            const columns: TableColumn[] = [{ key: 'a', name: 'A' }];
            fixture.componentRef.setInput('columns', columns);
            fixture.componentRef.setInput('selectable', true);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(component.column_count()).toBe(2);
        });
    });

    describe('columnType method', () => {
        it('should return raw for string content', () => {
            const column: TableColumn = { key: 'name', name: 'Name' };
            expect(component.columnType(column)).toBe('raw');
        });
    });

    describe('empty state', () => {
        it('should show empty message when no data', async () => {
            fixture.componentRef.setInput('data', []);
            fixture.componentRef.setInput('columns', [
                { key: 'name', name: 'Name' },
            ] as TableColumn[]);
            fixture.detectChanges();
            await fixture.whenStable();

            const empty_el = fixture.nativeElement.querySelector('.opacity-30');
            expect(empty_el).toBeTruthy();
            expect(empty_el.textContent.trim()).toBe('No data to list');
        });

        it('should show custom empty message', async () => {
            fixture.componentRef.setInput('data', []);
            fixture.componentRef.setInput('columns', [
                { key: 'name', name: 'Name' },
            ] as TableColumn[]);
            fixture.componentRef.setInput('empty_message', 'No items found');
            fixture.detectChanges();
            await fixture.whenStable();

            const empty_el = fixture.nativeElement.querySelector('.opacity-30');
            expect(empty_el.textContent.trim()).toBe('No items found');
        });
    });
});
