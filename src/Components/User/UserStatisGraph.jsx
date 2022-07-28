import React from "react";
import { VictoryPie, VictoryBar, VictoryChart } from "victory";
import styles from "./Styles/UserStatisGraph.module.css";

const UserStatisGraph = ({ data }) => {
  const [acessos, setAcessos] = React.useState(0);
  const [graph, setGraph] = React.useState([]);

  React.useEffect(() => {
    if (data.length > 0) {
      const graphValues = data.map((item) => {
        return {
          x: item.title,
          y: Number(item.acessos),
        };
      });
      setAcessos(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
      );
      setGraph(graphValues);
    }
  }, [data]);
  return (
    <section className={`${styles.graph} animaLeft`}>
      <div className={`${styles.acessos} ${styles.graphItem}`}>
        Acessos: {acessos}
      </div>
      <div className={`${styles.graphic} ${styles.graphItem} `}>
        <VictoryPie
          data={graph}
          colorScale={["tomato", "orange", "gold", "cyan", "red", "blue"]}
          animate={{ duration: 2000 }}
          innerRadius={40}
          padding={{ top: 20, bottom: 20, left: 50, right: 50 }}
        />
      </div>
      <div className={`${styles.graphic} ${styles.graphItem}`}>
        <VictoryChart>
          <VictoryBar data={graph} alignment={"start"} />
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatisGraph;
