/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: string | HTMLElement | Element | (string | HTMLElement | Element)[], vars?: unknown);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
    split(vars: unknown): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: unknown): ScrollSmoother;
    static get(): ScrollSmoother;
    static refresh(force?: boolean): void;
    paused(value?: boolean): boolean | void;
    scrollTop(value?: number): number | void;
    scrollTo(target: string | HTMLElement | Element | number, smooth?: boolean, position?: string): void;
  }
}
