import { TDataset } from "./dataset.type";

export type TParsedData = {
  labels: Array<string>;
  dataset: Array<TDataset>;
  xAxisLabel: string;
  yAxisLabel: string;
}
