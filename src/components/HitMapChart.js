import React, { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts';

import { Heading, Chart } from "../styledComponents/Globle";

// xaxis title list
const categories = [
    '9 AM', '9:30 AM',
    '10 AM', '10:30 AM',
    '11 AM', '11:30 AM',
    '12 PM', '12:30 PM',
    '01 PM', '01:30 PM',
    '02 PM', '02:30 PM',
    '03 PM', '03:30 PM',
    '04 PM', '04:30 PM',
    '05 PM', '05:30 PM',
    '06 PM', '06:30 PM',
    '07 PM', '07:30 PM',
]

function generateData(yRange) {
    var i = 0;
    var data = [];
    while (i < categories.length) {
        var y = Math.floor(Math.random() * (yRange.max - yRange.min + 1)) + yRange.min;
        data.push({
            x: categories[i],
            y: y
        });
        i++;
    }
    return data;
}

const HitMapChart = ({ userData }) => {
    const [series, setSeries] = useState([])

    // set charts feature settings 
    const options = {
        chart: {
            height: 350,
            type: 'heatmap',
            toolbar: {
                show: true,
                tools: {
                    download: false
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#67D0D3", '#165173', '#D4E9EC', '#67758A'],       
        axisBorder: {
            show: true,
            color: '#78909C',
            offsetX: 0,
            offsetY: 0
        }
    }

    useEffect(() => {
        let dataList = []
        userData.map((user) => (
            dataList.push(
                {
                    name: `${user.first_name} ${user.last_name}`,
                    data: generateData({
                        min: 0,
                        max: 100
                    })
                }
            )
        ))
        setSeries(dataList)
    }, [userData])

    return (
        <>
            <Heading>Camera Analysis</Heading>
            <Chart id="chart">
                <ReactApexChart options={options} series={series} type="heatmap" height={350} />
            </Chart>
        </>
    )
}

export default HitMapChart;
