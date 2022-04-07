import "styled-components";

declare module "styled-componenets" {
  export interface DefaultTheme {
    red: {
      red: string;
      mainRed: string;
      violet: string;
      pink: string;
    };
    green: {
      green: string;
      mainGreen: string;
    };
    black: {
      moreDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
  }
}
