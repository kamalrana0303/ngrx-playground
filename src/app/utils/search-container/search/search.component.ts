import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgControl } from '@angular/forms';
import { MatFormField, MatFormFieldControl } from '@angular/material';
import { Observable, Subject } from 'rxjs';
export interface FieldValue{
  query:string;
  scope:string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers:[
    {
      provide: MatFormFieldControl,
      useExisting: SearchComponent
    }
  ]
})
export class SearchComponent implements OnInit , MatFormFieldControl<FieldValue>{
  

  constructor(private fb:FormBuilder) { 
    this.fg=fb.group({
      query:[],
      scope:['ALL']
    })
  }
  ngControl: NgControl | null;

  value: FieldValue | null;
  stateChanges: Observable<void>= new Subject();
  id: string;
  placeholder: string;
  focused: boolean;
  empty: boolean;
  shouldLabelFloat: boolean;
  required: boolean;
  disabled: boolean;
  errorState: boolean;
  controlType?: string | undefined;
  autofilled?: boolean | undefined;

  fg:FormGroup

  setDescribedByIds(ids: string[]): void {
    
  }
  onContainerClick(event: MouseEvent): void {
    
  }

  ngOnInit() {

  }

}
