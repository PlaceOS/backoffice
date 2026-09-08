import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    applyRepositoryFormSchema,
    generateRepositoryFormModel,
} from '../../app/repositories/repositories.utilities';
import { createTestForm } from '../common/form-test.helpers';

// Use the browser entry because the client marks its CommonJS entry as ESM.
vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);

describe('repository form validation', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it.each(['', '../interfaces', 'my folder', 'folder/name'])(
        'rejects folder name %j for a new repository',
        (folder_name) => {
            const { fields } = createTestForm(
                {
                    ...generateRepositoryFormModel(),
                    name: 'Interfaces',
                    branch: 'main',
                    uri: 'https://example.com/repo.git',
                    folder_name,
                },
                applyRepositoryFormSchema,
            );
            expect(fields.folder_name().invalid()).toBe(true);
            fields.folder_name().value.set('interfaces-v2');
            expect(fields().valid()).toBe(true);
        },
    );

    it('allows an existing repository without a folder name but still requires its source and branch', () => {
        const { fields } = createTestForm(
            {
                ...generateRepositoryFormModel(),
                id: 'repo-1',
                name: 'Drivers',
                branch: 'main',
                uri: 'https://example.com/repo.git',
            },
            applyRepositoryFormSchema,
        );
        expect(fields().valid()).toBe(true);
        fields.branch().value.set('');
        fields.uri().value.set('');
        expect(fields.branch().invalid()).toBe(true);
        expect(fields.uri().invalid()).toBe(true);
    });
});
