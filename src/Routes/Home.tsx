import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { openApp } from "../atoms";

const Main = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.white.darker};
`;
const Loading = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.black.moreDark};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Box = styled(motion.div)``;

const Svg = styled(motion.svg)``;

function Home() {
  const [open, setOpen] = useRecoilState(openApp);
  const [symbol, setSymbol] = useState(false);
  useEffect(() => {
    setTimeout(() => setSymbol((prev) => !prev), 6500);
    setTimeout(() => setOpen((prev) => !prev), 7500);
  }, [setOpen]);
  return open ? (
    <Loading
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 6 }}
    >
      {!symbol ? (
        <Box layoutId="symbol">
          <Svg
            version="1.1"
            id="レイヤー_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="700px"
            height="700px"
            viewBox="0 0 1000 1000"
            enable-background="new 0 0 1000 1000"
          >
            <motion.path
              initial={{ pathLength: 0, fill: "rgba(255, 255, 255, 0)" }}
              animate={{ pathLength: 1, fill: "rgba(255, 255, 255, 1)" }}
              transition={{
                default: { duration: 5 },
                fill: { duration: 1, delay: 5 },
              }}
              stroke="#fd79a8"
              stroke-width="6"
              d="M746.589,592.819c-6.714-32.241-24.852-60.446-54.399-84.623
	c-15.239-12.536-32.475-22.379-51.722-29.554c-19.268-7.158-38.954-13.435-59.104-18.806c-20.148-5.375-40.531-10.75-61.12-16.121
	c-20.61-5.374-39.416-12.529-56.418-21.491c-18.806-9.844-31.125-21.495-36.937-34.926c-5.833-13.435-6.273-25.964-1.343-37.612
	c4.91-11.627,14.103-21.491,27.537-29.551c13.428-8.06,30.43-11.63,51.047-10.746c13.428,0,26.188,2.245,38.279,6.714
	c12.092,4.493,23.95,9.864,35.595,16.12c11.63,6.276,23.281,12.089,34.926,17.463c11.631,5.371,24.184,9.403,37.611,12.089
	c11.631,1.804,22.607,0.902,32.916-2.686c10.281-3.57,18.806-8.941,25.52-16.12c6.714-7.158,11.189-16.121,13.435-26.866
	c2.225-10.746,1.55-21.933-2.018-33.58c-5.371-17.904-14.103-32.912-26.194-45c-12.085-12.088-25.52-22.167-40.298-30.223
	c-14.777-8.06-30.685-14.547-47.686-19.477c-17.022-4.914-33.143-8.732-48.361-11.42c-23.296-3.567-47.913-4.91-73.88-4.028
	c-25.981,0.902-51.274,5.161-75.892,12.76c-24.642,7.619-47.246,18.365-67.834,32.24c-20.613,13.893-37.171,31.566-49.704,53.058
	c-23.295,41.203-32.027,82.171-26.194,122.909c5.815,40.762,27.076,75.017,63.807,102.761
	c17.001,12.549,35.808,22.163,56.417,28.883c20.59,6.714,41.854,12.76,63.807,18.131c21.932,5.379,43.424,11.211,64.475,17.463
	c21.036,6.281,40.069,14.778,57.093,25.527c12.532,8.959,18.344,21.719,17.463,38.279c-0.902,16.582-11.211,31.125-30.898,43.658
	c-13.428,8.057-29.342,12.092-47.686,12.092c-18.365,0-37.398-2.692-57.086-8.063c-19.708-5.371-39.416-12.76-59.106-22.167
	c-19.708-9.398-36.73-19.012-51.043-28.88c-17.925-11.624-34.045-14.771-48.361-9.399c-14.333,5.371-25.31,15.005-32.908,28.881
	c-7.619,13.896-11.207,30.016-10.746,48.36c0.441,18.338,6.924,34.692,19.478,49.028c17.904,20.59,40.066,37.612,66.492,51.04
	c26.404,13.435,54.173,23.282,83.28,29.556c29.093,6.252,58.648,9.398,88.658,9.398c29.995,0,57.974-2.686,83.955-8.057
	c35.808-8.057,66.933-24.177,93.361-48.36c26.401-24.177,45-51.941,55.742-83.28C751.292,656.853,753.304,625.06,746.589,592.819z"
            />
          </Svg>
        </Box>
      ) : null}

      {symbol ? (
        <Box
          layoutId="symbol"
          style={{ position: "absolute", left: "2px", top: "2px" }}
        >
          <Svg
            version="1.1"
            id="レイヤー_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100px"
            height="100px"
            viewBox="0 0 1000 1000"
            enable-background="new 0 0 1000 1000"
          >
            <motion.path
              stroke="#fd79a8"
              fill="black"
              stroke-width="6"
              d="M746.589,592.819c-6.714-32.241-24.852-60.446-54.399-84.623
	c-15.239-12.536-32.475-22.379-51.722-29.554c-19.268-7.158-38.954-13.435-59.104-18.806c-20.148-5.375-40.531-10.75-61.12-16.121
	c-20.61-5.374-39.416-12.529-56.418-21.491c-18.806-9.844-31.125-21.495-36.937-34.926c-5.833-13.435-6.273-25.964-1.343-37.612
	c4.91-11.627,14.103-21.491,27.537-29.551c13.428-8.06,30.43-11.63,51.047-10.746c13.428,0,26.188,2.245,38.279,6.714
	c12.092,4.493,23.95,9.864,35.595,16.12c11.63,6.276,23.281,12.089,34.926,17.463c11.631,5.371,24.184,9.403,37.611,12.089
	c11.631,1.804,22.607,0.902,32.916-2.686c10.281-3.57,18.806-8.941,25.52-16.12c6.714-7.158,11.189-16.121,13.435-26.866
	c2.225-10.746,1.55-21.933-2.018-33.58c-5.371-17.904-14.103-32.912-26.194-45c-12.085-12.088-25.52-22.167-40.298-30.223
	c-14.777-8.06-30.685-14.547-47.686-19.477c-17.022-4.914-33.143-8.732-48.361-11.42c-23.296-3.567-47.913-4.91-73.88-4.028
	c-25.981,0.902-51.274,5.161-75.892,12.76c-24.642,7.619-47.246,18.365-67.834,32.24c-20.613,13.893-37.171,31.566-49.704,53.058
	c-23.295,41.203-32.027,82.171-26.194,122.909c5.815,40.762,27.076,75.017,63.807,102.761
	c17.001,12.549,35.808,22.163,56.417,28.883c20.59,6.714,41.854,12.76,63.807,18.131c21.932,5.379,43.424,11.211,64.475,17.463
	c21.036,6.281,40.069,14.778,57.093,25.527c12.532,8.959,18.344,21.719,17.463,38.279c-0.902,16.582-11.211,31.125-30.898,43.658
	c-13.428,8.057-29.342,12.092-47.686,12.092c-18.365,0-37.398-2.692-57.086-8.063c-19.708-5.371-39.416-12.76-59.106-22.167
	c-19.708-9.398-36.73-19.012-51.043-28.88c-17.925-11.624-34.045-14.771-48.361-9.399c-14.333,5.371-25.31,15.005-32.908,28.881
	c-7.619,13.896-11.207,30.016-10.746,48.36c0.441,18.338,6.924,34.692,19.478,49.028c17.904,20.59,40.066,37.612,66.492,51.04
	c26.404,13.435,54.173,23.282,83.28,29.556c29.093,6.252,58.648,9.398,88.658,9.398c29.995,0,57.974-2.686,83.955-8.057
	c35.808-8.057,66.933-24.177,93.361-48.36c26.401-24.177,45-51.941,55.742-83.28C751.292,656.853,753.304,625.06,746.589,592.819z"
            />
          </Svg>
        </Box>
      ) : null}
    </Loading>
  ) : (
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0 }}
    >
      Home!
    </Main>
  );
}

export default Home;
