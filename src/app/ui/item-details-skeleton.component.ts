import { Component } from '@angular/core';

@Component({
    selector: 'item-details-skeleton',
    template: `
        <div class="flex animate-pulse flex-col">
            <!-- Item details skeleton -->
            <div class="flex items-center justify-between px-4 py-2">
                <div class="flex flex-col space-y-2">
                    <div class="bg-base-300 h-8 w-48 rounded-sm"></div>
                    <div class="flex items-center space-x-2">
                        <div class="bg-base-300 h-4 w-32 rounded-sm"></div>
                        <div class="bg-base-300 h-6 w-16 rounded-xl"></div>
                    </div>
                </div>
                <div class="bg-base-300 h-10 w-10 rounded-sm"></div>
            </div>

            <!-- Tab list skeleton -->
            <div class="border-base-300 h-12 w-full border-b">
                <div class="flex h-full items-center space-x-4 px-4">
                    <div class="bg-base-300 h-8 w-24 rounded-sm"></div>
                    <div class="bg-base-300 h-8 w-28 rounded-sm"></div>
                    <div class="bg-base-300 h-8 w-20 rounded-sm"></div>
                    <div class="bg-base-300 h-8 w-24 rounded-sm"></div>
                </div>
            </div>

            <!-- Content area skeleton -->
            <div class="space-y-4 p-4">
                <div class="bg-base-300 h-4 w-3/4 rounded-sm"></div>
                <div class="bg-base-300 h-4 w-1/2 rounded-sm"></div>
                <div class="bg-base-300 h-4 w-2/3 rounded-sm"></div>
                <div class="bg-base-300 mt-6 h-32 w-full rounded-sm"></div>
            </div>
        </div>
    `,
    styles: [``],
})
export class ItemDetailsSkeletonComponent {}
