import { Directive, ElementRef, HostListener, inject, Input } from "@angular/core";

@Directive({
    selector:'a[appSafeLink]',
    standalone: true,
    // host:{
    //     '(click)':'onConfirmLeave($event)'
    // }
})
export class SafeLinkDirective{
    constructor(){}
    @Input() queryParam = '?myapp';
    private hostElementRef =inject<ElementRef<HTMLAnchorElement>>(ElementRef);
     @HostListener('click') onConfirmLeave(event : MouseEvent){
        const wantsToLeave =window.confirm("Do you want to leave this site?");
        if(wantsToLeave){
            const address= this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address+ this.queryParam;
            return;
        }
        event.preventDefault();
    }

}