import { Component, inject, Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { refocusIfLost } from '../../app/common/focus';

@Component({ template: '<button>Retry</button>' })
class Host {
    public readonly injector = inject(Injector);
}

describe('refocusIfLost', () => {
    it('does nothing when the view closed before it runs', () => {
        const fixture = TestBed.createComponent(Host);
        fixture.detectChanges();
        const injector = fixture.componentInstance.injector;
        fixture.destroy();
        let target_read = false;

        expect(() =>
            refocusIfLost(injector, () => {
                target_read = true;
                return null;
            }),
        ).not.toThrow();
        TestBed.tick();
        expect(target_read).toBe(false);
    });
});
