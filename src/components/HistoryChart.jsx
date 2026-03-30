import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", s1: 600, s2: 380, s3: 120 },
  { month: "Feb", s1: 610, s2: 390, s3: 130 },
  { month: "Mar", s1: 630, s2: 400, s3: 150 },
  { month: "Apr", s1: 650, s2: 410, s3: 170 },
  { month: "May", s1: 700, s2: 440, s3: 260 },
  { month: "Jun", s1: 710, s2: 450, s3: 280 },
  { month: "Jul", s1: 660, s2: 410, s3: 190 },
  { month: "Aug", s1: 720, s2: 460, s3: 280 },
  { month: "Sep", s1: 760, s2: 480, s3: 350 },
  { month: "Oct", s1: 720, s2: 450, s3: 300 },
  { month: "Nov", s1: 740, s2: 460, s3: 330 },
  { month: "Dec", s1: 820, s2: 520, s3: 460 },
];

function HistoryChart() {
  return (
    <div className="historyChart_main">
      <div className="historyChart_header">
        <div>
          <h2>History Chart</h2>
          <p>Suspendisse rutrum vulputate felis</p>
        </div>

        <button className="chart_button">
          Buy History (Product per Currency)
          <img src="./icons/arrow_head_down.svg" alt="" />
        </button>
      </div>

      <div className="historyChart_body">
        <div className="chart_body_header">
          <div className="time_button">
            <button>12 months</button>
            <button>30 days</button>
            <button>7 days</button>
            <button>24 hours</button>
          </div>

          <button className="filter_button">
            <img src="./icons/filter_icon.svg" alt="" />
            Filter
          </button>
        </div>

        {/* Chart starts here */}

        <div
          style={{ width: "100%", height: 250, padding: "0px 0px 0px 10px" }}
        >
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            >
              <defs>
                <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7B61FF" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#7B61FF" stopOpacity={0} />
                </linearGradient>

                <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#A58BFF" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#A58BFF" stopOpacity={0} />
                </linearGradient>

                <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3F2B96" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#3F2B96" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid stroke="#ECECEC" vertical={false} />

              <XAxis
                dataKey="month"
                tick={{ fill: "#9AA0A6", fontSize: 13 }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{ fill: "#9AA0A6", fontSize: 12, fontWeight: 500 }}
                axisLine={false}
                tickLine={false}
                label={{
                  value: "Active users",
                  angle: -90,
                  position: "insideLeft",
                  style: { fill: "#9AA0A6", fontSize: 13 },
                }}
              />

              <Tooltip />

              <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                iconSize={7}
                wrapperStyle={{ top: -5 }}
              />

              <Area
                type="monotone"
                dataKey="s1"
                stroke="#7B61FF"
                fillOpacity={1}
                fill="url(#color1)"
                fontSize={14}
                strokeWidth={2.5}
                name="Series 1"
              />

              <Area
                type="monotone"
                dataKey="s2"
                stroke="#A58BFF"
                fillOpacity={1}
                fill="url(#color2)"
                fontSize={14}
                strokeWidth={2.5}
                name="Series 2"
              />

              <Area
                type="monotone"
                dataKey="s3"
                stroke="#3F2B96"
                fillOpacity={1}
                fill="url(#color3)"
                strokeWidth={2.5}
                fontSize={14}
                name="Series 3"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default HistoryChart;
