import React, { Component } from "react";
import NewSingle from "./NewSingle";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
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

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ news: data.articles }))
      .catch(err => console.log(err));
  }

  renderItem() {
    return this.state.news.map(item => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return <div>{this.renderItem()}</div>;
  }
}

export default News;
