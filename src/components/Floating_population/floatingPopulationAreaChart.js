import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import axios from "axios";

class floatingPopulationAreaChart extends Component {
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
            <AreaChart
              width={1000}
              height={300}
              data={this.state.append_FPList}
              margin={{
                top: 5, right: 50, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="군구" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="유동인구수" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          );
    }
}

export default floatingPopulationAreaChart;