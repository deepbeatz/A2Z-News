import React, { Component } from 'react';
import './NewsItem.css';
export class NewsItem extends Component {
    render() {
        let { newsTitle, description, date, imageUrl, newsUrl } = this.props;
        return (
            <div className="column-item">
                <a className="card" href={newsUrl}>
                    <img src={imageUrl} alt="" className="card-img"/>
                    <div className="details">
                        <div className="date">{date}</div>
                        <h1 className="title">{newsTitle}</h1>
                        <p className="desc">{description}</p>
                        <a id="btn_link" href={newsUrl}><button className="btn">Read More</button></a>
                    </div>
                </a>
            </div>
        )
    }
}

export default NewsItem;
