// reference classifiedImageModel in /db_Models on express server

export class ClassifiedImage {
  _id: string;
  image_name: string;
  date_uploaded: Date;
  predictions: [
    {
      date: string,
      model_version: string,
      values_by_class: [
        {class_name: string, probability: number}
      ]
    }
  ];
}
