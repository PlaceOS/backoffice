import { Component } from '@angular/core';

@Component({
    selector: 'item-details-skeleton',
    template: `
        <div class="flex flex-col animate-pulse">
            <!-- Item details skeleton -->
            <div class="flex items-center justify-between px-4 py-2">
                <div class="flex flex-col space-y-2">
                    <div class="h-8 w-48 rounded bg-base-300"></div>
                    <div class="flex items-center space-x-2">
                        <div class="h-4 w-32 rounded bg-base-300"></div>
                        <div class="h-6 w-16 rounded-xl bg-base-300"></div>
                    </div>
                </div>
                <div class="h-10 w-10 rounded bg-base-300"></div>
            </div>

            <!-- Tab list skeleton -->
            <div class="h-12 w-full border-b border-base-300">
                <div class="flex h-full items-center space-x-4 px-4">
                    <div class="h-8 w-24 rounded bg-base-300"></div>
                    <div class="h-8 w-28 rounded bg-base-300"></div>
                    <div class="h-8 w-20 rounded bg-base-300"></div>
                    <div class="h-8 w-24 rounded bg-base-300"></div>
                </div>
            </div>

            <!-- Content area skeleton -->
            <div class="space-y-4 p-4">
                <div class="h-4 w-3/4 rounded bg-base-300"></div>
                <div class="h-4 w-1/2 rounded bg-base-300"></div>
                <div class="h-4 w-2/3 rounded bg-base-300"></div>
                <div class="mt-6 h-32 w-full rounded bg-base-300"></div>
            </div>
        </div>
    `,
    styles: [``],
})
export class ItemDetailsSkeletonComponent {}
