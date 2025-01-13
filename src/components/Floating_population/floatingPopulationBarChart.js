import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from "axios";

class floatingPopulationBarChart extends Component {
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
            <BarChart
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
              <Legend />
              <Bar dataKey="유동인구수" fill="#82ca9d" />
            </BarChart>
          );
    }
}

export default floatingPopulationBarChart;