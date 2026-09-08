import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { form, SchemaFn } from '@angular/forms/signals';

/** Build a real signal form so tests exercise validation and field dependencies. */
export function createTestForm<T>(value: T, schema: SchemaFn<T>) {
    const model = signal(value);
    const fields = TestBed.runInInjectionContext(() => form(model, schema));
    return { model, fields };
}
