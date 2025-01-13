import React, { Component } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import axios from "axios";

class floatingPopulationScatterChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseFPList: null,
            append_FPList: [],
        };
    }

    componentDidMount = async () => {
        axios.get(process.env.PUBLIC_URL + "/JSON/SeoulData.json")
            .then(response => {
                if (response.data && response.data.entry) {
                    this.setState({ 
                        responseFPList: response.data,
                        append_FPList: response.data.entry
                    });
                } else {
                    alert("JSON 데이터에 'entry' 필드가 없습니다.");
                }
            })
            .catch(error => {
                alert(error);
            });
    }

    render () {
        return (
            <ScatterChart
              width={1000}
              height={300}
              margin={{
                top: 5, right: 50, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid />
              <XAxis type="number" dataKey="연령대" name="연령대" unit="세" />
              <YAxis type="number" dataKey="유동인구수" name="유동인구수" unit="명" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.state.append_FPList} fill="#003458" />
            </ScatterChart>
          );
    }
}

export default floatingPopulationScatterChart;