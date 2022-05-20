import Chart from "react-apexcharts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Chartbox = styled.div`
  width: 80vw;
  height: 70vh;
  margin: auto;
  margin-top: 3%;
`;

function Achart() {
  const nav = useNavigate();
  return (
    <Chartbox>
      <Chart
        type="treemap"
        series={[
          {
            data: [
              {
                x: "Javascript",
                y: "258",
              },
              {
                x: "Typescript",
                y: "150",
              },
              {
                x: "React",
                y: "100",
              },
              {
                x: "React Native",
                y: "50",
              },
              {
                x: "NextJs",
                y: "50",
              },
              {
                x: "NodeJs",
                y: "350",
              },
              {
                x: "Express",
                y: "218",
              },
              {
                x: "NestJs",
                y: "218",
              },
              {
                x: "Python",
                y: "350",
              },
              {
                x: "BS4",
                y: "100",
              },
              {
                x: "Django",
                y: "400",
              },
              {
                x: "Rest API",
                y: "218",
              },
              {
                x: "GraphQL",
                y: "218",
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
                const indexNumber = config.dataPointIndex;
                const clickedTitle = chartContext.data.twoDSeriesX[indexNumber];
                console.log(clickedTitle);
                clickedTitle === "Javascript" || clickedTitle === "NodeJs"
                  ? nav(`/k`)
                  : nav(`/w`);
              },
            },
          },
          colors: [
            "#3b93a5",
            "#f7b844",
            "#add8c7",
            "#ec3c65",
            "#cdd7b6",
            "#c1f666",
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
        }}
        height={550}
      />
    </Chartbox>
  );
}

export default Achart;
