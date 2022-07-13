import Chart from "react-apexcharts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Chartbox = styled.div`
  width: 80vw;
  height: 70vh;
  margin: auto;
  margin-top: 3%;
`;

interface dataI {
  0: { x: string; y: string };
  1: { x: string; y: string };
  3: { x: string; y: string };
  4: { x: string; y: string };
  5: { x: string; y: string };
  6: { x: string; y: string };
  7: { x: string; y: string };
  8: { x: string; y: string };
  9: { x: string; y: string };
  10: { x: string; y: string };
  11: { x: string; y: string };
  12: { x: string; y: string };
}

function Achart() {
  const nav = useNavigate();
  return (
    <Chartbox>
      <Chart
        style={{ cursor: "pointer" }}
        type="treemap"
        series={[
          {
            data: [
              {
                x: "Javascript",
                y: "4",
              },
              {
                x: "Typescript",
                y: "3",
              },
              {
                x: "React",
                y: "10",
              },
              {
                x: "React Native",
                y: "3",
              },
              {
                x: "NextJs",
                y: "9",
              },
              {
                x: "NodeJs",
                y: "7",
              },
              {
                x: "Express",
                y: "2",
              },
              {
                x: "NestJs",
                y: "2",
              },
              {
                x: "Python",
                y: "6",
              },
              {
                x: "BS4",
                y: "1",
              },
              {
                x: "Django",
                y: "4",
              },
              {
                x: "Rest API",
                y: "2",
              },
              {
                x: "GraphQL",
                y: "3",
              },
            ],
          },
        ]}
        options={{
          chart: {
            height: 550,
            type: "treemap",
            toolbar: {
              show: false,
            },
            events: {
              click: function (event, chartContext, config) {
                const { dataPointIndex } = config;
                const {
                  config: {
                    series: {
                      0: { data },
                    },
                  },
                }: { config: { series: { 0: { data: dataI } } } } = config;
                const clickedTitle = Object.values(
                  Object.values(data)[dataPointIndex]
                )[0];
                if (clickedTitle === "Javascript") {
                  nav(`/k`);
                } else if (clickedTitle === "React") {
                  nav("/react");
                } else {
                  nav("/www");
                }
              },
            },
          },
          colors: [
            "#3b93a5",
            "#f7b844",
            "#add8c7",
            "#ec3c65",
            "#cdd7b6",
            "#5f841f",
            "#d43f97",
            "#1e5d8c",
            "#421243",
            "#7f94b0",
            "#ef6537",
            "#c0addb",
            "#ff22dd",
          ],
          plotOptions: {
            treemap: {
              distributed: true,
              enableShades: false,
            },
          },
          tooltip: {
            enabled: true,
          },
        }}
        height={550}
      />
    </Chartbox>
  );
}

export default Achart;
