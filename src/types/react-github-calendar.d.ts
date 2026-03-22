declare module "react-github-calendar" {
  import React from "react";

  export interface GitHubCalendarProps {
    username: string;
    blockMargin?: number;
    blockRadius?: number;
    blockSize?: number;
    colorScheme?: "light" | "dark";
    errorMessage?: string;
    fontSize?: number;
    hideColorLegend?: boolean;
    hideMonthLabels?: boolean;
    hideTotalCount?: boolean;
    loading?: boolean;
    style?: React.CSSProperties;
    theme?: any;
    totalCount?: number;
    tooltips?: boolean;
    transformData?: (data: any[]) => any[];
    labels?: any;
    showWeekdayLabels?: boolean;
    weekdayLabel?: string[];
    year?: number | "last";
  }

  export const GitHubCalendar: React.FunctionComponent<GitHubCalendarProps>;
}