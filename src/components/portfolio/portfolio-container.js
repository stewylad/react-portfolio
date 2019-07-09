import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component{
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: [
                {title: "Totodile", category: "Water"},
                {title: "Totodile", category: "Water"},
                {title: "Treecko", category: "Grass"},
                {title: "Snivy", category: "Grass"},
                {title: "Tepig", category: "Fire"},
                {title: "Growlithe", category: "Fire"},
                {title: "Eevee", category: "Normal"},
                {title: "Togepi", category: "Normal"},
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter("Water")}>
                    Water
                </button>
                <button onClick={() => this.handleFilter("Grass")}>
                    Grass
                </button>
                <button onClick={() => this.handleFilter("Fire")}>
                    Fire
                </button>
                <button onClick={() => this.handleFilter("Normal")}>
                    Normal
                </button>


                {this.portfolioItems()}

            </div>
        )
    }
}