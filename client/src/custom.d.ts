// custom.d.ts
import 'react';

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        popovertarget?: string;
        popover?: string;
        popovertargetaction?: string;
    }
}
