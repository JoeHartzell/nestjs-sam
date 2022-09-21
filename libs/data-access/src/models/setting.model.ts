import { ModelType } from 'dynamoose/dist/General';
import { Item } from 'dynamoose/dist/Item';
import * as dynamoose from 'dynamoose';

export class Setting extends Item {
  pk: string;
  sk: string;
  value: any;
}

export const SettingModel = dynamoose.model<Setting>('Setting', {
  pk: {
    hashKey: true,
    type: String,
  },
  sk: {
    rangeKey: true,
    type: String,
  },
  value: dynamoose.type.ANY,
});
