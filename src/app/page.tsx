import Image from "next/image";

import {
    DoughnutChart,
    DumbbellChart,
    ComparisonGraph,
    HorizontalBar,
    HorizontalList,
    StackedAreaChart,
    SplineAreaChart,
    RiskRating,
    HeatMap,
    StackedRow,
    StackedBarChart,
    BenchmarkChart,
    WaffleChart,
    SparkBar,
    SparkHorizontalBar,
    SparkStackedBar,
    SparkLine
} from 'infocharts';

import 'infocharts/styles/infocharts.css';

export default function Home() {

    const sampleData = {
        doughnutData: {
            title: "Apples",
            summary: "56% of the total fruit production in the first quarter",
            value: 56,
            size: 300,
            bgColor: "blue",
            fgColor: "orange",
            background: "white",
            textColor: "black",
            labelColor: "black",
            percentageTextSize: 3.5,
            titleTextSize: 1.8,
            summaryTextSize: 0.8,
        },
        dumbbellData: {
            data: [
                { fruit: "Apples", series1: 50, series2: 80 },
                { fruit: "Bananas", series1: 40, series2: 70 },
                { fruit: "Oranges", series1: 30, series2: 60 },
                { fruit: "Grapes", series1: 10, series2: 20 },
                { fruit: "Pears", series1: 20, series2: 50 },
                { fruit: "Peaches", series1: 40, series2: 50 }
            ],
            colors: ["rgba(0, 123, 255, 0.7)", "rgba(255, 0, 123, 0.7)"],
            height: 400,
            width: 500,
            background: "#fff",
            foreground: "#000",
            labelColor: "#000"
        },
        comparisonData: {
            title: "Comparison Graph Example",
            summary: "This graph compares different fruit production.",
            ariaDescription: "A Comparison graph comparing the production of various fruits.",
            labelColor: "#fff",
            background: "#f0f0f0",
            foreground: "#333",
            data: [
                { value: 80, color: "#007bff" },
                { value: 60, color: "#ff007b" },
                { value: 90, color: "#00ff7b" },
                { value: 10, color: "#ffdd00" }
            ]
        },
        horizontalBarData: {
            title: "Fruit Production Comparison",
            background: "#0c263eff",
            foreground: "#ffffff",
            labelColor: "#ffffff",
            summary: "A horizontal bar chart comparing the production of various fruits in 2023.",
            year: 2023,
            valueType: "%",
            items: [
                { name: "Apples", value: 50, color: "#007bff" },
                { name: "Bananas", value: 30, color: "#28a745" },
                { name: "Oranges", value: 20, color: "#ffc107" },
                { name: "Grapes", value: 15, color: "#17a2b8" }
            ],
            colorSeries: ["#ff5733", "#c70039", "#900c3f", "#581845"]
        },
        horizontalListData: {
            title: "Fruit Consumption Comparison",
            background: "#0c263eff",
            foreground: "#ffffff",
            summary: "A horizontal list comparing the consumption of various fruits in 2023.",
            labelColor: "#ffffff",
            valueType: "%",
            items: [
                { name: "Apples", value: 50, color: "#ff6347" },
                { name: "Bananas", value: 30, color: "#4682b4" },
                { name: "Oranges", value: 20, color: "#32cd32" },
                { name: "Grapes", value: 15, color: "#dda0dd" }
            ],
            valueColor: "#fff"
        },
        stackedAreaData: {
            data: [
                { month: "Jan", series1: 30, series2: 50, series3: 20 },
                { month: "Feb", series1: 40, series2: 60, series3: 30 },
                { month: "Mar", series1: 35, series2: 55, series3: 25 },
                { month: "Apr", series1: 50, series2: 70, series3: 40 },
                { month: "May", series1: 60, series2: 80, series3: 50 }
            ],
            colors: ["rgba(0, 123, 255, 0.5)", "rgba(0, 255, 123, 0.5)", "rgba(255, 123, 0, 0.5)"],
            height: 400,
            seriesNames: ["Sales", "Revenue", "Profit"],
            background: "#fff",
            foreground: "#333",
            labelColor: "#000",
            axisColor: "#000"
        },
        splineAreaData: {
            data: [30, 40, 35, 50, 45, 60, 55],
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            width: 800,
            height: 400,
            fillColor: "rgba(70, 130, 180, 0.3)",
            strokeColor: "rgba(70, 130, 180, 1)",
            background: "#f9f9f9",
            labelColor: "#333",
            lineColor: "#ccc"
        },
        riskRatingData: {
            riskData: [
                ['low', 'low', 'low', 'medium', 'high'], // Impact 1 (low)
                ['low', 'low', 'medium', 'high', 'high'], // Impact 2
                ['low', 'medium', 'medium', 'high', 'high'], // Impact 3
                ['medium', 'medium', 'high', 'high', 'high'], // Impact 4
                ['medium', 'high', 'high', 'high', 'high'], // Impact 5 (high)
            ],
            likelihoodLabels: ['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost Certain'],
            impactLabels: ['Insignificant', 'Minor', 'Moderate', 'Major', 'Catastrophic'],
            background: '#fff',
            foreground: '#000',
            labelColor: ['#fff','#000','#000'],
            colors: ['red', 'orange', 'yellow']
        },
        heatMapData: {
            data: [
                [30, 50, 70, 90],
                [40, 60, 80, 100],
                [20, 40, 60, 80]
            ],
            months: ['January', 'February', 'March', 'April'],
            rowLabels: ['Category 1', 'Category 2', 'Category 3'],
            background: "#fff",
            labelColor: "#000",
            valueColor: "#fff"
        },
        stackedRowData: {
            data: [
                { description: 'Category 1', segments: [
                        { value: 10, color: '#4682b4' },
                        { value: 20, color: '#ff6347' },
                        { value: 30, color: '#32cd32' },
                        { value: 25, color: '#dda0dd' },
                        { value: 15, color: '#ffa500' }
                    ] },
                { description: 'Category 2', segments: [
                        { value: 20, color: '#4682b4' },
                        { value: 15, color: '#ff6347' },
                        { value: 25, color: '#32cd32' },
                        { value: 20, color: '#dda0dd' },
                        { value: 20, color: '#ffa500' }
                    ] },
                { description: 'Category 3', segments: [
                        { value: 30, color: '#4682b4' },
                        { value: 20, color: '#ff6347' },
                        { value: 10, color: '#32cd32' },
                        { value: 25, color: '#dda0dd' },
                        { value: 15, color: '#ffa500' }
                    ] }
            ],
            legend: [
                { label: 'Segment 1', color: '#4682b4' },
                { label: 'Segment 2', color: '#ff6347' },
                { label: 'Segment 3', color: '#32cd32' },
                { label: 'Segment 4', color: '#dda0dd' },
                { label: 'Segment 5', color: '#ffa500' }
            ],
            background: "#f9f9f9",
            textColor: "#000",
            defaultColors: ['#4682b4', '#ff6347', '#32cd32', '#dda0dd', '#ffa500'],
            explanation: "This chart shows the proportion of five different values for different categories.",
            barWidth: "90%"
        },
        stackedBarChartData: {
            data: [
                { month: 'January', series1: 40, series2: 30, series3: 20 },
                { month: 'February', series1: 60, series2: 20, series3: 10 },
                { month: 'March', series1: 30, series2: 40, series3: 20 }
            ],
            colors: ["rgba(0, 123, 255, 0.7)", "rgba(0, 255, 123, 0.7)", "rgba(255, 123, 0, 0.7)"],
            height: 400,
            seriesNames: ["Series 1", "Series 2", "Series 3"],
            background: "#f9f9f9",
            labelColor: "#000",
            axisColor: "#ccc"
        },
        benchmarkChartData: {
            data: [
                { label: 'Category 1', actual: 70, benchmark: 80 },
                { label: 'Category 2', actual: 50, benchmark: 60 },
                { label: 'Category 3', actual: 90, benchmark: 85 },
            ],
            title: "Performance vs Target",
            background: "#f9f9f9",
            foreground: "#000",
            barColor: "#4682b4",
            targetColor: "#ff6347"
        },
        waffleData: {
            title: "Waffle Chart Example",
            percentage: 75,
            background: "#f9f9f9",
            foreground: "#000",
            description: "This waffle chart shows a 75% completion rate.",
            activeColor: "#4caf50",
            nonActiveColor: "#ccc"
        }
    };

  return (
    <div>
        <div>
            <h1>InfoCharts Example</h1>

            <DoughnutChart {...sampleData.doughnutData} />

            <ComparisonGraph {...sampleData.comparisonData} />
                <HorizontalBar {...sampleData.horizontalBarData} />
            <RiskRating {...sampleData.riskRatingData} />
            <HeatMap {...sampleData.heatMapData} />



            <DumbbellChart {...sampleData.dumbbellData} />

            <HorizontalList {...sampleData.horizontalListData} />
            <StackedAreaChart
                data={[
                    { month: "Jan", series1: 30, series2: 50, series3: 20 },
                    { month: "Feb", series1: 40, series2: 60, series3: 30 },
                    { month: "Mar", series1: 35, series2: 55, series3: 25 },
                    { month: "Apr", series1: 50, series2: 70, series3: 40 },
                    { month: "May", series1: 60, series2: 80, series3: 50 }
                ]}
                width={800}
                height={400}
                colors={["#ff6347", "#4682b4", "#32cd32"]}
                background="#f5f5f5"
                labelColor="#333"
                axisColor="#000"
            />
            <SplineAreaChart {...sampleData.splineAreaData} />

            <StackedRow {...sampleData.stackedRowData} />
            <StackedBarChart
                data={[
                    { month: 'January', series1: 30, series2: 20, series3: 50 },
                    { month: 'February', series1: 40, series2: 30, series3: 30 },
                    { month: 'March', series1: 20, series2: 50, series3: 30 },
                ]}
                width={800}
                height={400}
                colors={["#ff6347", "#4682b4", "#32cd32"]}
                background="#f5f5f5"
                labelColor="#333"
                axisColor="#000"
            />
            <BenchmarkChart {...sampleData.benchmarkChartData} />
            <WaffleChart {...sampleData.waffleData} />

            {/*<SparkBar*/}
            {/*    title="Sales Over Time"*/}
            {/*    data={[*/}
            {/*        { item: 'January', value: 500 },*/}
            {/*        { item: 'February', value: 200 },*/}
            {/*        { item: 'March', value: 150 },*/}
            {/*        { item: 'April', value: 300 },*/}
            {/*        { item: 'May', value: 400 },*/}
            {/*        { item: 'June', value: 450 },*/}
            {/*        { item: 'July', value: 500 },*/}
            {/*    ]}*/}
            {/*    fillColor="blue"*/}
            {/*    backgroundColor="#f9f9f9"*/}
            {/*    foregroundColor="darkblue"*/}
            {/*/>*/}

            {/*<SparkHorizontalBar*/}
            {/*    title="Sales Progress"*/}
            {/*    total={100}*/}
            {/*    value={75}*/}
            {/*    suffix="%"*/}
            {/*    barColor="green"*/}
            {/*    background="#f9f9f9"*/}
            {/*    foreground="darkgreen"*/}
            {/*/>*/}
            https://github.com/garethslinn/info.git

            {/*<SparkStackedBar*/}
            {/*    title="Fruit Sales"*/}
            {/*    total={100}*/}
            {/*    segments={[*/}
            {/*        { label: 'Segment 1', value: 40, color: 'green' },*/}
            {/*        { label: 'Segment 2', value: 30, color: 'blue' },*/}
            {/*        { label: 'Segment 3', value: 20, color: 'orange' },*/}
            {/*        { label: 'Segment 4', value: 10, color: 'red' }*/}
            {/*    ]}*/}
            {/*    background="#f0f0f0"*/}
            {/*    foreground="darkblue"*/}
            {/*    suffix="%"*/}
            {/*/>*/}

            {/*<SparkLine*/}
            {/*    title="Revenue Growth"*/}
            {/*    data={[*/}
            {/*        { item: 'January', value: 500 },*/}
            {/*        { item: 'February', value: 200 },*/}
            {/*        { item: 'March', value: 150 },*/}
            {/*        { item: 'April', value: 300 },*/}
            {/*        { item: 'May', value: 400 },*/}
            {/*        { item: 'June', value: 450 },*/}
            {/*        { item: 'July', value: 500 },*/}
            {/*    ]}*/}
            {/*    strokeColor="blue"*/}
            {/*    strokeWidth={3}*/}
            {/*    backgroundColor="#f9f9f9"*/}
            {/*    foregroundColor="darkblue"*/}
            {/*/>*/}
        </div>
    </div>
  );
}
