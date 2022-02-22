import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {

  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes-->', changes);
  }
  
  ngOnInit(): void {
    console.log('onDestroy');
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }

}
