export type ChartType = "linear" | "area" | "bar";

export interface ChartConfig {
  title: string;
  type: ChartType;
  colorScheme: string[];
  metrics: string[];
  width: number; 
  height: number;
}

export interface DashboardSection {
  id: string;
  gap: number;
  charts: ChartConfig[];
}

export interface DashboardDSL {
  resolution: {
    width: number;
    height: number;
    columns: number;
    rows: number;
  };
  sections: DashboardSection[];
}
