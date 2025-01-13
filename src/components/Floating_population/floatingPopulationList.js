import React, { Component } from 'react';
import axios from "axios";

class floatingPopulationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseFPList: null,
            append_FPList: [],
        };
    }

    componentDidMount() {
        this.callFloatPopulListApi();
    }

    callFloatPopulListApi = async () => {
        axios.get(process.env.PUBLIC_URL + "/JSON/SeoulData.json")
            .then(response => {
                console.log(response.data); // 데이터 확인용
                this.setState({ responseFPList: response.data }, () => {
                    this.setState({ append_FPList: this.FloatPopulListAppend() });
                });
            })
            .catch(error => {
                alert(error);
            });
    }

    FloatPopulListAppend = () => {
        const result = [];
        const FPList = this.state.responseFPList;

        if (FPList && FPList.entry) {
            for (let i = 0; i < FPList.entry.length; i++) {
                const data = FPList.entry[i];
                const idx = i + 1;
                result.push(
                    <tr className="hidden_type" key={idx}>
                        <td>{idx}</td>
                        <td>{data.일자}</td>
                        <td>{data.시간}</td>
                        <td>{data.연령대}</td>
                        <td>{data.성별}</td>
                        <td>{data.시}</td>
                        <td>{data.군구}</td>
                        <td>{data.유동인구수}</td>
                    </tr>
                );
            }
        }
        return result;
    }

    render() {
        return (
            <section className="sub_wrap">
                <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                    <div className="li_top">
                        <h2 className="s_tit1">서울시 유동인구 데이터 - 19년 11월</h2>
                    </div>
                    <div className="list_cont list_cont_admin">
                        <table className="table_ty1 fp_tlist">
                            <thead>
                                <tr>
                                    <th>Row</th>
                                    <th>일자</th>
                                    <th>시간</th>
                                    <th>연령대</th>
                                    <th>성별</th>
                                    <th>시</th>
                                    <th>군구</th>
                                    <th>유동인구수</th>
                                </tr>
                            </thead>
                        </table>	
                        <table className="table_ty2 fp_tlist">
                            <tbody>
                                {this.state.append_FPList}
                            </tbody>
                        </table>
                    </div>
                </article>
            </section>
        );
    }
}

export default floatingPopulationList;
