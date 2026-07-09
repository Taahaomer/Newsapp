import React, { useState, useEffect} from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News (props) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);  
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true)

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    const data = await fetch(url);
    const information = await data.json();

    setArticles(information.articles)
    setTotalResults(information.totalResults)
    setLoading(false)

  }

  // const componentDidMount = async () => {
  //   console.log("component did mount function ");
  //   updateNews()
  // }

  useEffect(() => {
      updateNews();
  },[])
  
  const capF=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

// handleNext = async () => {

//       this.setState({
//         page: (this.state.page + 1),
//       });
      
//       this.updateNews();
// };

//   handlePrevious = async () => {
//     this.setState({
//       page:this.state.page - 1
//     })

//     this.updateNews();
//   };
  


  const fetchMoreData = async () => {
      const nextPage=page+1
      setPage(nextPage)

      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
      const data = await fetch(url);
      const information = await data.json();

      setArticles(prevArticles => prevArticles.concat(information.articles))
      setTotalResults(information.totalResults)
      setLoading(false)

      if (information.articles.length === 0) {
        setHasMore(false);
        return;
      }
console.log("Current articles:", articles.length);
console.log("Total Results:", information.totalResults);
console.log("Fetched:", information.articles.length);
};
 
    return (
      <>
        <div className="container">

          <h2 className="text-center" style={{margin:'5rem 0 1rem 0'}}>News Headlines - {capF(props.category)}</h2>

          {loading && <Loader />}
          
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<Loader/>}
            endMessage={<p style={{ textAlign: 'center' }}>All items loaded.</p>}>
            <div className="row container justify-content-evenly" >
              
             {articles.map((element) => {

                return (
                  
                  <div className="col-md-3 my-3 mx-1 " key={element.url} >
                              

                    <NewsItem

                      title={element.title ? element.title.slice(0, 45) : "."}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imgurl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://dims.apnews.com/dims4/default/ca32e88/2147483647/strip/true/crop/5232x3486+0+1/resize/980x653!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fff%2F14%2Fcb0fce3f05f4e43355aba20ec708%2F982c33e4eb004df39cb9f3084f57d021"
                      }
                      newsurl={element.url}

                      author={element.author?(element.author.length>35?element.source.name:element.author):"Unknown"}

                      date={new Date(element.publishedAt).toGMTString()}

                      source={element.source.name}

                    />
                  </div>

                );
              })}
            </div>
          </InfiniteScroll>

          

          {/* <div className="d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page - 1 <= 0}
              className="btn btn-primary"
              onClick={this.handlePrevious}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              className="btn btn-primary"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div> */}

        </div>
      </>
    );
  }


  News.defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  News.propTypes = {
    pageSize: PropTypes.number.isRequired,
    country: PropTypes.string,
    category: PropTypes.string,
  };
