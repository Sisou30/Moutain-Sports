import { Component,TemplateRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-summer-home',
  templateUrl: './summer-home.component.html',
  styleUrls: ['./summer-home.component.scss']
})
export class SummerHomeComponent {
isCollapsed = false;
triggerTemplate = null;
triggerRight= null;
@ViewChild('trigger') customTrigger: TemplateRef<void>;

/** custom trigger can be TemplateRef **/
changeTrigger(): void {
  this.triggerTemplate = this.customTrigger;
}

changRight(): void {
  this.triggerRight = this.customTrigger;
}
}
