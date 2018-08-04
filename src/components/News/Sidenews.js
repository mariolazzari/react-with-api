import React, { Component } from "react";
import SingleSide from "./SingleSide";
import axios from "axios";
import Error from "./Error";

class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
      error: false
    };
  }

  componentDidMount() {
    /*
    const url = `https://newsapi.org/v2/${this.props.news.type}?${
      this.props.news.query
    }&apiKey=7f740020a4b146afb17036a175b5d65f`;
*/
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7f740020a4b146afb17036a175b5d65f";

    axios
      .get(url)
      .then(res => this.setState({ sidenews: res.data.articles }))
      .catch(err => this.setState({ error: true }));
  }

  renderItem() {
    if (this.state.error) {
      return <Error />;
    } else {
      return this.state.sidenews.map(item => (
        <SingleSide key={item.url} item={item} />
      ));
    }
  }

  render() {
    return <div>{this.renderItem()}</div>;
  }
}

export default SideNews;
