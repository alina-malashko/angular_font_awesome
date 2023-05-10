import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { concatMap, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-icon-block',
  templateUrl: './icon-block.component.html',
  styleUrls: ['./icon-block.component.css']
})
export class IconBlockComponent implements OnInit {
  @ViewChild('button') button!: ElementRef;

  private iconsList = Object.keys(fas);

  public icon!: IconProp;

  ngOnInit(): void {
    this.getRandomIcon();
  }

  private getRandomIcon(): void {
    let random = Math.floor(Math.random() * this.iconsList.length);
    this.icon = fas[this.iconsList[random]];
  }

  public clickHandler(): void {
    const clicks = fromEvent(this.button.nativeElement, 'click').pipe(
      concatMap(() => interval(3000))
    );
    const subscription = clicks.subscribe(() => {
      this.getRandomIcon();
      subscription.unsubscribe();
    })
  }
}
