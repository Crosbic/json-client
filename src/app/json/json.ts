import {required, maxLength, minNumber, maxNumber, digit} from '@rxweb/reactive-form-validators';

export class JsonModel {
  @required()
  @maxLength({ value: 50 })
  name: string = 'Вася Пупкин';

  @required()
  @digit()
  @minNumber({ value: 15 })
  @maxNumber({ value: 150 })
  age: number = 18;

  @required()
  @maxLength({ value: 100 })
  occupation: string = 'Жмыхер';
}
