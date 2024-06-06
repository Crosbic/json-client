import { Component, OnInit } from '@angular/core';
import { RxFormBuilder, RxFormGroup } from '@rxweb/reactive-form-validators';
import { JsonService } from '../json.service';
import { JsonModel } from './json';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {
  jsonData: any = {};
  jsonForm: RxFormGroup | undefined = undefined;

  constructor(private jsonService: JsonService, private fb: RxFormBuilder) {}

  ngOnInit(): void {
    this.getJsonData();
  }

  getJsonData(): void {
    this.jsonService.getJson().subscribe(data => {
      this.jsonData = data;
      this.createForm(data);
    });
  }

  createForm(data: JsonModel): void {
    const jsonModel = new JsonModel();

    this.jsonForm = this.fb.formGroup(jsonModel) as RxFormGroup;
    this.jsonForm.patchValue(jsonModel);
  }

  updateJsonData(): void {
    if (this.jsonForm && this.jsonForm.valid) {
      this.jsonService.updateJson(this.jsonForm.value).subscribe(data => {
        this.jsonData = data;
      });
    }
  }
}
