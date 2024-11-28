import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    category: 'general'
  }
  static propTypes = {
    category: PropTypes.string
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=14`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })

  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=14`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=14`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  render() {
    const totalPages = Math.ceil(this.state.totalResults / 14);
    return (
      <div className="container my-3">
        <h2 className='text-center' style={{ margin: '30px 0px' }}>TOP HEADLINES</h2>
        {this.state.loading && <Spinner />}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) =>
            <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} discription={element.description ? element.description : ""} author={element.author} date={element.publishedAt} source={element.source.name} imageUrl={element.urlToImage ? element.urlToImage : "https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2024/07/elon_musk_2158243766.jpg"} newsUrl={element.url} />
            </div>
          )}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} type='button' className='btn btn-dark'>&larr; Previous</button>
          <button disabled={this.state.page >= totalPages} onClick={this.handleNextClick} type='button' className='btn btn-dark'>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
