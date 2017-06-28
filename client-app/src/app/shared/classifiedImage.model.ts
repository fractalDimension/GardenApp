// reference classifiedImageModel in /db_Models on express server

export class ClassifiedImage {
  image_name: string;
  image_path: string;
  // date ?
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
